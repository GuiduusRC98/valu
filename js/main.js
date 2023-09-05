function Gallery(containerId, imagePaths) {
    this.container = document.getElementById(containerId);
    this.imagePaths = imagePaths;
    this.currentImageIndex = 0;

    this.showNextImage = function () {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
        this.container.innerHTML = `<img src="${this.imagePaths[this.currentImageIndex]}" alt="" />`;
    };

    this.autoRotateInterval = 5000;

    this.startAutoRotate = function () {
        this.autoRotateIntervalId = setInterval(() => this.showNextImage(), this.autoRotateInterval);
    };

    this.stopAutoRotate = function () {
        clearInterval(this.autoRotateIntervalId);
    };

    this.container.addEventListener("click", () => {
        openModal(this.imagePaths, this.currentImageIndex);
    });

    this.showNextImage();
    this.startAutoRotate();
}

function openModal(imagePaths, initialIndex) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    let currentImageIndex = initialIndex;

    // Función para mostrar la imagen actual
    function showCurrentImage() {
        modalImage.src = imagePaths[currentImageIndex];
    }

    // Muestra la imagen seleccionada
    showCurrentImage();
    modal.style.display = "block";

    // Función para avanzar a la siguiente imagen automáticamente
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        showCurrentImage();
    }

    // Inicia el intervalo para cambiar automáticamente las imágenes
    const autoRotateInterval = 5000; // Cambia el intervalo según lo necesites
    const autoRotateIntervalId = setInterval(nextImage, autoRotateInterval);

    // Detiene el intervalo al hacer clic en la imagen
    modalImage.addEventListener("click", () => {
        clearInterval(autoRotateIntervalId);
    });

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closeModal);
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

const gallery1 = new Gallery("imageGallery1", [
    "./images/carteras/cartera_1_luna.jpeg",
    "./images/carteras/cartera_2_luna.jpeg",
    // Agrega más rutas de imágenes según sea necesario
]);

const gallery2 = new Gallery("imageGallery2", [
    "./images/carteras/cartera_3.jpeg",
    "./images/carteras/cartera_4.jpeg",
    // Agrega más rutas de imágenes según sea necesario
]);