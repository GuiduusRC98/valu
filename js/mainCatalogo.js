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

    function showCurrentImage() {
        modalImage.src = imagePaths[currentImageIndex];
    }

    showCurrentImage();
    modal.style.display = "block";

    const autoRotateInterval = 5000;
    const autoRotateIntervalId = setInterval(nextImage, autoRotateInterval);

    modalImage.addEventListener("click", () => {
        clearInterval(autoRotateIntervalId);
    });

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closeModal);

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        showCurrentImage();
    }

    function showThumbnails() {
        const thumbnailList = document.getElementById("thumbnailList");
        thumbnailList.innerHTML = "";

        for (let i = 0; i < imagePaths.length; i++) {
            const thumbnail = document.createElement("li");
            thumbnail.innerHTML = `<img src="${imagePaths[i]}" alt="" data-index="${i}" />`;
            thumbnail.addEventListener("click", (event) => {
                currentImageIndex = parseInt(event.target.getAttribute("data-index"));
                showCurrentImage();
            });
            thumbnailList.appendChild(thumbnail);
        }
    }

    showThumbnails();
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