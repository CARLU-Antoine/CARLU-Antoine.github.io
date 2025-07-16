const containerCardsFromations = document.querySelector(".container-cards-formations");
const cards = Array.from(containerCardsFromations.children).reverse().filter((child) => child.classList.contains("card"));

let currentImageIndex = -1; // Index de l'image actuelle
let images = []; // Tableau pour stocker les sources des images

// Récupérer les sources des images
cards.forEach((card) => {
    const imgSrc = card.querySelector('img').src;
    images.push(imgSrc);
});

// Réorganiser les cartes
cards.forEach((card) => containerCardsFromations.appendChild(card));

// Fonction pour déplacer la carte
function moveCard() {
    const lastCard = containerCardsFromations.lastElementChild;
    if (lastCard.classList.contains("card")) {
        lastCard.classList.add("swap");

        setTimeout(() => {
            lastCard.classList.remove("swap");
            containerCardsFromations.insertBefore(lastCard, containerCardsFromations.firstElementChild);
        }, 1200);
    }
}

// Autoplay pour déplacer les cartes
let autoplayInterval = setInterval(moveCard, 4000);
