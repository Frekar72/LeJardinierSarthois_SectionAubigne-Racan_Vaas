/**
 * Main JavaScript - Le Jardinier Sarthois
 * Gestion des interactions et fonctionnalités du site
 */

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌱 Le Jardinier Sarthois - Site initialisé');

    // Initialiser les fonctionnalités
    initMobileMenu();
    initSmoothScroll();
    initImageLazyLoading();
    initAnimations();

});

/**
 * Gestion du menu mobile
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');

            // Accessibilité: mettre à jour aria-expanded
            const isExpanded = !mobileMenu.classList.contains('hidden');
            menuBtn.setAttribute('aria-expanded', isExpanded);

            // Animation: ajouter une classe pour transition smooth
            if (isExpanded) {
                mobileMenu.classList.add('animate-fade-in');
            }
        });

        // Fermer le menu mobile quand on clique sur un lien
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Fermer le menu mobile quand on clique en dehors
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Smooth scroll pour les ancres
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            if (targetId !== '#' && targetId !== '#!') {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Mettre à jour l'URL sans recharger la page
                    history.pushState(null, null, targetId);
                }
            }
        });
    });
}

/**
 * Lazy loading des images (pour navigateurs anciens)
 * Les navigateurs modernes utilisent loading="lazy" natif
 */
function initImageLazyLoading() {
    // Vérifier si le navigateur supporte le lazy loading natif
    if ('loading' in HTMLImageElement.prototype) {
        console.log('✅ Lazy loading natif supporté');
        return;
    }

    // Fallback pour navigateurs anciens
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback: charger toutes les images
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

/**
 * Animations au scroll
 */
function initAnimations() {
    // Observer pour animer les éléments au scroll
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }
}

/**
 * Utilitaire: Afficher un message de notification
 * @param {string} message - Message à afficher
 * @param {string} type - Type de notification (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in ${
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' :
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Supprimer après 3 secondes
    setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Utilitaire: Formater une date
 * @param {string} dateString - Date au format ISO
 * @returns {string} Date formatée
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

/**
 * Utilitaire: Debounce function
 * @param {Function} func - Fonction à debouncer
 * @param {number} wait - Délai en ms
 * @returns {Function}
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Exposer les fonctions utilitaires globalement si nécessaire
window.JardinSarthois = {
    showNotification,
    formatDate,
    debounce
};
