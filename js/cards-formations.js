const stack = document.querySelector(".container-cards");
const cards = Array.from(stack.children).reverse().filter((child) => child.classList.contains("card"));

let currentImageIndex = -1; // Index de l'image actuelle
let images = []; // Tableau pour stocker les sources des images

// Récupérer les sources des images
cards.forEach((card) => {
    const imgSrc = card.querySelector('img').src;
    images.push(imgSrc);
});

// Réorganiser les cartes
cards.forEach((card) => stack.appendChild(card));

// Fonction pour déplacer la carte
function moveCard() {
    const lastCard = stack.lastElementChild;
    if (lastCard.classList.contains("card")) {
        lastCard.classList.add("swap");

        setTimeout(() => {
            lastCard.classList.remove("swap");
            stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
    }
}

// Autoplay pour déplacer les cartes
let autoplayInterval = setInterval(moveCard, 4000);
