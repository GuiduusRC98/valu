function Gallery(containerId, imagePaths) {
    this.container = document.getElementById(containerId);
    this.imagePaths = imagePaths;
    this.currentImageIndex = 0;

    this.showNextImage = function () {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
        this.container.innerHTML = `<img src="${this.imagePaths[this.currentImageIndex]}" alt="" />`;
    };

    this.autoRotateInterval = 5000; // Intervalo en milisegundos (en este caso, 5 segundos)

    this.startAutoRotate = function () {
        this.autoRotateIntervalId = setInterval(() => this.showNextImage(), this.autoRotateInterval);
    };

    this.stopAutoRotate = function () {
        clearInterval(this.autoRotateIntervalId);
    };

    // Agrega un evento clic al contenedor para mostrar la siguiente imagen al hacer clic
    this.container.addEventListener("click", () => this.showNextImage());

    // Muestra la primera imagen al cargar la página
    this.showNextImage();

    // Inicia la rotación automática al crear el objeto de galería
    this.startAutoRotate();
}

// Crea objetos de galería para cada caja
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