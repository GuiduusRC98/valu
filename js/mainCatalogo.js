function Gallery(containerId, imagePaths) {
    this.container = document.getElementById(containerId);
    this.imagePaths = imagePaths;
    this.currentImageIndex = 0;

    this.showNextImage = function () {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
        this.container.innerHTML = `<img src="${this.imagePaths[this.currentImageIndex]}" alt="" />`;
    };

    this.autoRotateInterval = 5000;

    // No llamamos a startAutoRotate para evitar el cambio automático
    // this.startAutoRotate = function () {
    //     this.autoRotateIntervalId = setInterval(() => this.showNextImage(), this.autoRotateInterval);
    // };

    this.stopAutoRotate = function () {
        clearInterval(this.autoRotateIntervalId);
    };

    this.container.addEventListener("click", () => {
        openModal(this.imagePaths, this.currentImageIndex);
    });

    this.showNextImage();
    // No llamamos a startAutoRotate para evitar el cambio automático
    // this.startAutoRotate();
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

    /* const autoRotateInterval = 5000;
    const autoRotateIntervalId = setInterval(nextImage, autoRotateInterval);

    modalImage.addEventListener("click", () => {
        clearInterval(autoRotateIntervalId);
    }); */

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
                updateThumbnailOpacity(thumbnailList, currentImageIndex);
            });
            thumbnailList.appendChild(thumbnail);
        }
    
        // Establece la opacidad inicial
        updateThumbnailOpacity(thumbnailList, currentImageIndex);
    }
    
    function updateThumbnailOpacity(thumbnailList, selectedIndex) {
        const thumbnails = thumbnailList.querySelectorAll("img");
        thumbnails.forEach((thumbnail, index) => {
            if (index === selectedIndex) {
                thumbnail.classList.add("selected");
            } else {
                thumbnail.classList.remove("selected");
            }
        });
    }

    showThumbnails();
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

const gallery1 = new Gallery("imageGallery1", [
    "./images/carteras/cartera_2_luna.jpeg",
    "./images/carteras/cartera_1_luna.jpeg",
    "./images/carteras/cartera_3_luna.jpeg",
    // Agrega más rutas de imágenes según sea necesario
])

const gallery2 = new Gallery("imageGallery2", [
    "./images/carteras/cartera_celeste_2.jpeg",
    "./images/carteras/cartera_celeste_1.jpeg",
    "./images/carteras/cartera_celeste_3.jpeg",
    "./images/carteras/cartera_celeste_4.jpeg",
    "./images/carteras/cartera_celeste_5.jpeg",
    // Agrega más rutas de imágenes según sea necesario
])

const gallery3 = new Gallery("imageGallery3", [
    "./images/carteras/cartera_lila_1.jpeg",
    "./images/carteras/cartera_lila_2.jpeg",
    "./images/carteras/cartera_lila_3.jpeg",
    "./images/carteras/cartera_lila_4.jpeg",
    // Agrega más rutas de imágenes según sea necesario
])