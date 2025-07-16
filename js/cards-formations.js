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

// Événement de clic pour ouvrir le modal
stack.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (card) {
        openModal(card.querySelector('img').src);
    }
});

// Fonctionnalité pour ouvrir le modal avec l'image
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalImage.style.transform = 'scale(1) rotate(0deg)'; // Réinitialiser la transformation
    currentImageIndex = images.indexOf(imageSrc); // Définir l'index de l'image actuelle
    updateNavigationButtons(); // Mettre à jour les boutons de navigation
    console.log("Modal opened with image:", imageSrc); // Journal de débogage
}

// Mettre à jour l'état des boutons de navigation
function updateNavigationButtons() {
    document.getElementById("prevImage").disabled = currentImageIndex === 0; // Désactiver si c'est la première image
    document.getElementById("nextImage").disabled = currentImageIndex === images.length - 1; // Désactiver si c'est la dernière image
}

// Fonctionnalité pour fermer le modal
const closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function () {
    console.log("fermeture"); // Journal de débogage lors de la fermeture
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Cacher le modal
});

// Fermer le modal en cliquant en dehors
window.addEventListener("click", function (e) {
    const modal = document.getElementById("imageModal");
    if (e.target === modal) {
        modal.style.display = "none"; // Cacher le modal lorsque l'on clique à l'extérieur
    }
});

// Fonctionnalité pour changer d'image
function changeImage(direction) {
    if (direction === 'next') {
        currentImageIndex++;
    } else if (direction === 'prev') {
        currentImageIndex--;
    }
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];
    updateNavigationButtons(); // Mettre à jour les boutons de navigation
}

// Événements de clic pour les boutons de navigation
document.getElementById("nextImage").addEventListener("click", function () {
    changeImage('next');
});

document.getElementById("prevImage").addEventListener("click", function () {
    changeImage('prev');
});

// Zoom et Rotation fonctionnels avec le slider
const modalImage = document.getElementById("modalImage");
let scale = 1;
let rotation = 0;

const zoomSlider = document.getElementById("zoomSlider");
zoomSlider.addEventListener("input", function () {
    scale = parseFloat(zoomSlider.value);
    modalImage.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
});

// Événements de clic pour la rotation
document.getElementById("rotateLeft").addEventListener("click", function () {
    rotation -= 90;
    modalImage.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
});

document.getElementById("rotateRight").addEventListener("click", function () {
    rotation += 90;
    modalImage.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
});
