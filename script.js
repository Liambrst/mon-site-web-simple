document.addEventListener('DOMContentLoaded', () => {
 const monBouton = document.getElementById('monBouton');
 if (monBouton) {
 monBouton.addEventListener('click', () => {
 alert('Bouton cliqué ! Votre requête est enregistrée.');
 });
 }
});
