// Fonction pour initialiser le bouton dark mode
function initializeDarkModeButton() {
    // Créer le bouton s'il n'existe pas déjà
    if (!document.getElementById('darkModeToggle')) {
        const button = document.createElement('button');
        button.id = 'darkModeToggle';
        button.className = 'dark-mode-toggle';
        button.setAttribute('aria-label', 'Activer/Désactiver le mode sombre');
        button.innerHTML = '<i class="fas fa-moon"></i>';
        document.body.appendChild(button);
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('i');
    
    // Vérifier si une préférence est déjà sauvegardée
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Ajouter l'écouteur d'événement pour le clic
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Mettre à jour l'icône
        if (isDarkMode) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', null);
        }
    });
}

// Initialiser le bouton dark mode quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initializeDarkModeButton); 