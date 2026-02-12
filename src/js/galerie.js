/**
 * Galerie JavaScript - Le Jardinier Sarthois
 * Gestion dynamique de la galerie photos avec filtres et lightbox
 *
 * Pour modifier les photos, éditez le fichier : src/data/galerie.json
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        dataPath: '../data/galerie.json',
        imagePath: '../../public/images/'
    };

    // État de la galerie
    let galerieData = null;
    let filteredPhotos = [];
    let currentIndex = 0;
    let currentFilter = 'tous';

    // Éléments DOM
    const elements = {
        grid: document.getElementById('galerie-grid'),
        filtresContainer: document.getElementById('filtres-container'),
        photosCount: document.getElementById('photos-count'),
        lightbox: document.getElementById('lightbox'),
        lightboxImg: document.getElementById('lightbox-img'),
        lightboxTitle: document.getElementById('lightbox-title'),
        lightboxDescription: document.getElementById('lightbox-description'),
        lightboxClose: document.getElementById('lightbox-close'),
        lightboxPrev: document.getElementById('lightbox-prev'),
        lightboxNext: document.getElementById('lightbox-next'),
        currentIndexEl: document.getElementById('current-index'),
        totalImagesEl: document.getElementById('total-images')
    };

    /**
     * Initialisation de la galerie
     */
    async function init() {
        try {
            await loadGalerieData();
            renderFiltres();
            renderPhotos();
            setupEventListeners();
            console.log('🖼️ Galerie initialisée avec', galerieData.photos.length, 'photos');
        } catch (error) {
            console.error('Erreur lors du chargement de la galerie:', error);
            showError();
        }
    }

    /**
     * Chargement des données JSON
     */
    async function loadGalerieData() {
        const response = await fetch(CONFIG.dataPath);
        if (!response.ok) {
            throw new Error('Impossible de charger les données de la galerie');
        }
        galerieData = await response.json();
        filteredPhotos = [...galerieData.photos];
    }

    /**
     * Affichage d'une erreur
     */
    function showError() {
        elements.grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-red-500 font-semibold">Erreur lors du chargement des photos</p>
                <p class="text-gray-500 mt-2">Veuillez rafraîchir la page</p>
            </div>
        `;
    }

    /**
     * Génération des boutons de filtre
     */
    function renderFiltres() {
        // Garder le bouton "Toutes"
        let html = `
            <button class="filter-btn active px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg bg-jardin-vert text-white" data-filter="tous">
                Toutes
            </button>
        `;

        // Ajouter les catégories
        galerieData.categories.forEach(cat => {
            const count = galerieData.photos.filter(p => p.categorie === cat.id).length;
            html += `
                <button class="filter-btn px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg bg-gray-200 text-gray-700 hover:bg-jardin-vert hover:text-white" data-filter="${cat.id}" title="${cat.description}">
                    ${cat.nom} (${count})
                </button>
            `;
        });

        elements.filtresContainer.innerHTML = html;

        // Ajouter les écouteurs sur les boutons
        elements.filtresContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => filterPhotos(btn.dataset.filter));
        });
    }

    /**
     * Filtrage des photos par catégorie
     */
    function filterPhotos(filter) {
        currentFilter = filter;

        // Mettre à jour l'état actif des boutons
        elements.filtresContainer.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.dataset.filter === filter) {
                btn.classList.add('active', 'bg-jardin-vert', 'text-white');
                btn.classList.remove('bg-gray-200', 'text-gray-700');
            } else {
                btn.classList.remove('active', 'bg-jardin-vert', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            }
        });

        // Filtrer les photos
        if (filter === 'tous') {
            filteredPhotos = [...galerieData.photos];
        } else {
            filteredPhotos = galerieData.photos.filter(p => p.categorie === filter);
        }

        renderPhotos();
    }

    /**
     * Rendu de la grille de photos
     */
    function renderPhotos() {
        if (filteredPhotos.length === 0) {
            elements.grid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-500">Aucune photo dans cette catégorie</p>
                </div>
            `;
            elements.photosCount.textContent = '0';
            return;
        }

        let html = '';
        filteredPhotos.forEach((photo, index) => {
            const categorie = galerieData.categories.find(c => c.id === photo.categorie);
            html += `
                <div class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer gallery-item"
                     data-index="${index}">
                    <img src="${CONFIG.imagePath}${photo.src}"
                         alt="${photo.titre}"
                         class="w-full h-80 object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                         loading="lazy">
                    <div class="absolute inset-0 bg-gradient-to-t from-jardin-vert/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="absolute bottom-4 left-4 right-4 text-white">
                            <p class="font-semibold">${photo.titre}</p>
                            <p class="text-sm text-jardin-beige mt-1">${categorie ? categorie.nom : ''}</p>
                        </div>
                    </div>
                </div>
            `;
        });

        elements.grid.innerHTML = html;
        elements.photosCount.textContent = filteredPhotos.length;
        elements.totalImagesEl.textContent = filteredPhotos.length;

        // Ajouter les écouteurs pour la lightbox
        elements.grid.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
        });
    }

    /**
     * Ouverture de la lightbox
     */
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        elements.lightbox.classList.remove('hidden');
        elements.lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Fermeture de la lightbox
     */
    function closeLightbox() {
        elements.lightbox.classList.add('hidden');
        elements.lightbox.classList.remove('flex');
        document.body.style.overflow = '';
    }

    /**
     * Mise à jour du contenu de la lightbox
     */
    function updateLightboxContent() {
        const photo = filteredPhotos[currentIndex];
        elements.lightboxImg.src = CONFIG.imagePath + photo.src;
        elements.lightboxImg.alt = photo.titre;
        elements.lightboxTitle.textContent = photo.titre;
        elements.lightboxDescription.textContent = photo.description;
        elements.currentIndexEl.textContent = currentIndex + 1;
    }

    /**
     * Image suivante
     */
    function nextImage() {
        currentIndex = (currentIndex + 1) % filteredPhotos.length;
        updateLightboxContent();
    }

    /**
     * Image précédente
     */
    function prevImage() {
        currentIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        updateLightboxContent();
    }

    /**
     * Configuration des écouteurs d'événements
     */
    function setupEventListeners() {
        // Fermeture lightbox
        elements.lightboxClose.addEventListener('click', closeLightbox);
        elements.lightbox.addEventListener('click', (e) => {
            if (e.target === elements.lightbox) closeLightbox();
        });

        // Navigation lightbox
        elements.lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            prevImage();
        });
        elements.lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            nextImage();
        });

        // Navigation clavier
        document.addEventListener('keydown', (e) => {
            if (!elements.lightbox.classList.contains('hidden')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') prevImage();
                if (e.key === 'ArrowRight') nextImage();
            }
        });

        // Menu mobile
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn?.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Lancement au chargement du DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
