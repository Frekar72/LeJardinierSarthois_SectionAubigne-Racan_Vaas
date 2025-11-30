# Configuration du Formulaire de Contact

## Vue d'ensemble

Le formulaire de contact est maintenant **fonctionnel** avec validation côté client complète.

Pour l'envoi des emails, deux options sont disponibles :
1. **Formspree** (recommandé) - Service gratuit sans backend
2. **Mailto fallback** - Ouvre le client email par défaut

---

## Option 1 : Formspree (Recommandé)

### Pourquoi Formspree ?
- ✅ **Gratuit** jusqu'à 50 soumissions/mois
- ✅ **Sans backend** - Pas de serveur nécessaire
- ✅ **Anti-spam** intégré
- ✅ **Email de notification** automatique
- ✅ **Interface de gestion** des soumissions

### Configuration (5 minutes)

#### Étape 1 : Créer un compte
1. Aller sur https://formspree.io/
2. Cliquer sur "Get Started" (inscription gratuite)
3. Créer un compte avec votre email

#### Étape 2 : Créer un formulaire
1. Dans le dashboard, cliquer sur "New Form"
2. Donner un nom : "Contact - Le Jardinier Sarthois"
3. Copier l'**ID du formulaire** (format: `xpwzbdqr`)

#### Étape 3 : Configurer le fichier
1. Ouvrir `src/pages/contact.html`
2. Ligne 643, remplacer :
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   par :
   ```javascript
   const response = await fetch('https://formspree.io/f/VOTRE_ID_ICI', {
   ```

#### Étape 4 : Configurer les emails
Dans Formspree, section "Settings" :
- **Email destination** : `claude.monique.pean@gmail.com`
- **Notification email** : Activer
- **Email de confirmation** : Activer (optionnel)

#### Étape 5 : Tester
1. Aller sur la page Contact
2. Remplir le formulaire
3. Envoyer → Vous devriez recevoir un email !

---

## Option 2 : Mailto Fallback (Actuel)

Si Formspree n'est pas configuré, le formulaire utilise automatiquement le système **mailto:**.

### Fonctionnement
1. L'utilisateur remplit le formulaire
2. Un lien `mailto:` est généré automatiquement
3. L'utilisateur clique → Son client email s'ouvre
4. Le message est pré-rempli

### Avantages
✅ Fonctionne immédiatement (pas de configuration)
✅ Pas de service externe

### Inconvénients
❌ Nécessite un client email configuré
❌ Expérience utilisateur moins fluide
❌ Pas d'anti-spam

---

## Fonctionnalités du Formulaire

### Champs disponibles
- **Nom complet** (obligatoire)
- **Email** (obligatoire) - Validé avec regex
- **Téléphone** (optionnel) - Format français validé
- **Sujet** (obligatoire) - Liste déroulante :
  - Adhésion à l'association
  - Demande d'information
  - Question sur un événement
  - Proposition de partenariat
  - Autre
- **Message** (obligatoire) - Minimum 10 caractères
- **Consentement RGPD** (obligatoire)

### Validation en temps réel
- **Email** : Format valide (ex: user@domain.com)
- **Téléphone** : Format français (ex: 06 12 34 56 78)
- **Message** : Minimum 10 caractères
- **Tous les champs** : Vérification au blur (perte de focus)
- **Messages d'erreur** : Affichés sous chaque champ invalide

### Retours visuels
- ✅ **Bordure verte** si succès
- ❌ **Bordure rouge** si erreur
- 🔄 **Bouton désactivé** pendant l'envoi
- 📩 **Messages de feedback** en haut du formulaire

---

## Test du Formulaire

### Test de validation

1. **Tester les champs vides**
   - Laisser un champ obligatoire vide
   - Cliquer sur "Envoyer"
   - ✅ Message d'erreur doit apparaître

2. **Tester l'email invalide**
   - Entrer : "test@test"
   - ✅ Message "Email invalide" doit apparaître

3. **Tester le téléphone invalide**
   - Entrer : "123456"
   - ✅ Message "Numéro de téléphone invalide" doit apparaître

4. **Tester le message court**
   - Entrer : "Test"
   - ✅ Message "Minimum 10 caractères" doit apparaître

5. **Tester sans RGPD**
   - Ne pas cocher la case
   - ✅ Message "Vous devez accepter cette condition" doit apparaître

### Test d'envoi

1. **Remplir correctement le formulaire**
2. **Cliquer sur "Envoyer"**
3. **Si Formspree configuré** :
   - ✅ Message "Message envoyé avec succès"
   - ✅ Email reçu sur `claude.monique.pean@gmail.com`
   - ✅ Formulaire réinitialisé
4. **Si Formspree non configuré** :
   - ✅ Lien mailto: généré
   - ✅ Client email s'ouvre avec message pré-rempli

---

## Personnalisation

### Changer l'email de destination

**Ligne 667** de `src/pages/contact.html` :
```javascript
const mailtoLink = `mailto:claude.monique.pean@gmail.com?subject=${subject}&body=${body}`;
```

Remplacer `claude.monique.pean@gmail.com` par l'email souhaité.

### Ajouter des sujets

**Lignes 316-321** de `src/pages/contact.html` :
```html
<option value="nouveau-sujet">Nouveau sujet</option>
```

### Changer la limite de caractères du message

**Ligne 573** de `src/pages/contact.html` :
```javascript
if (value.length < 10) {
```

Remplacer `10` par le nombre souhaité.

---

## Sécurité & RGPD

### Données collectées
- Nom
- Email
- Téléphone (optionnel)
- Sujet de la demande
- Message

### Consentement
✅ Checkbox RGPD obligatoire
✅ Texte explicite : "J'accepte que mes données personnelles soient utilisées pour me recontacter"

### Stockage
- **Formspree** : Données stockées sur leurs serveurs (conforme RGPD)
- **Mailto** : Pas de stockage tiers (email direct)

---

## Support

Si vous rencontrez des problèmes :

1. **Vérifier la console** (F12 → Console)
2. **Tester en navigation privée** (pour éliminer les extensions)
3. **Vérifier l'ID Formspree** (ligne 643)
4. **Contacter le support Formspree** : https://help.formspree.io/

---

## Améliorations futures possibles

- [ ] Protection anti-spam (reCAPTCHA)
- [ ] Email de confirmation automatique à l'expéditeur
- [ ] Sauvegarde des messages dans une base de données
- [ ] Page de remerciement dédiée après envoi
- [ ] Analytics sur les soumissions (Google Analytics events)
- [ ] Upload de fichiers (pièces jointes)

---

**Dernière mise à jour** : 30 novembre 2025
**Version** : 1.0
