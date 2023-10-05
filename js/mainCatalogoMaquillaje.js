class Producto {
    constructor(id, nombre, precio, descripcion, img, alt, descuento, rebaja, imagenes) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.img = img;
        this.alt = alt;
        this.descuento = descuento;
        this.rebaja = rebaja;
        this.imagenes = imagenes || [];
    }
  
    descripcion_Producto() {
        let rebajaHTML = '';
        if (this.rebaja) {
            rebajaHTML = `<span>    $${this.rebaja}</span>`;
        }
        return `
        <div class="box">
            <div class="image">
                <div id="imageGallery${this.id}" class="carousel">
                    <img onclick="openModal(${this.id})" src="${this.img}" alt="${this.alt}" />
                </div>
                <div class="icons">
                    <a href="https://ig.me/m/vp_oficial_" target="_blank" class="">Comprar</a>
                </div>
            </div>
            <div class="content">
                <h3>${this.nombre}</h3>
                <p>${this.descripcion}</p>
                <div class="price">$${this.precio}${rebajaHTML}</div>
            </div>
        </div>`;
    }
  }
  
  class ControladorDeProductos {
    constructor() {
        this.listaDeProducto = [];
    }
  
    agregar(producto) {
        this.listaDeProducto.push(producto);
    }
  
    updateProduct() {
        const imagenesProducto1 = [
            "../images/maquillaje/cherry_lime_2.jpeg",
            "../images/maquillaje/cherry_lime_1.jpeg",
            "../images/maquillaje/cherry_lime_3.jpeg",
            "../images/maquillaje/cherry_lime_4.jpeg",
        ];
        const imagenesProducto2 = [
            "../images/maquillaje/coconut_2.jpeg",
            "../images/maquillaje/coconut_1.jpeg",
            "../images/maquillaje/coconut_3.jpeg",
            // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto3 = [
            "../images/maquillaje/raspberry_2.jpeg",
            "../images/maquillaje/raspberry_1.jpeg",
          // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto4 = [
            "../images/maquillaje/raspberry_melon_2.jpeg",
            "../images/maquillaje/raspberry_melon_1.jpeg",
            "../images/maquillaje/raspberry_melon_3.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto5 = [
            "../images/maquillaje/rosegold_2.jpeg",
            "../images/maquillaje/rosegold_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto6 = [
            "../images/maquillaje/gold_2.jpeg",
            "../images/maquillaje/gold_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto7 = [
            "../images/maquillaje/kiwiblush_2.jpeg",
            "../images/maquillaje/kiwiblush_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto8 = [
            "../images/maquillaje/coconut_craze_2.jpeg",
            "../images/maquillaje/coconut_craze_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto9 = [
            "../images/maquillaje/strawberryfizz_1.jpeg",
            "../images/maquillaje/strawberryfizz_2.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto10 = [
            "../images/maquillaje/juicy_melon_1.jpeg",
            "../images/maquillaje/juicy_melon_2.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto11 = [
            "../images/maquillaje/candy_baby_1.jpeg",
            "../images/maquillaje/candy_baby_2.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto12 = [
            "../images/maquillaje/sugar_high_1.jpeg",
            "../images/maquillaje/sugar_high_2.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto13 = [
            "../images/maquillaje/violet_2.jpeg",
            "../images/maquillaje/violet_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto14 = [
            "../images/maquillaje/Brown_2.jpeg",
            "../images/maquillaje/Brown_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto15 = [
            "../images/maquillaje/light_pink_glitter_2.jpeg",
            "../images/maquillaje/light_pink_glitter_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto16 = [
            "../images/maquillaje/pink_glitter_2.jpeg",
            "../images/maquillaje/pink_glitter_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];
        const imagenesProducto17 = [
            "../images/maquillaje/pink_2.jpeg",
            "../images/maquillaje/pink_1.jpeg",
        // Agrega más rutas de imágenes para el producto 2
        ];

  
        this.agregar(new Producto(
          1,
          "Cherry Lime",
          1600,
          "Fruit Fetish Victoria's Spirit",
          "../images/maquillaje/cherry_lime_2.jpeg",
          "maquillaje de alta calidad",
          null,
          null,
          imagenesProducto1 // Agregar la lista de imágenes aquí
      ));
        this.agregar(new Producto(
            2,
            "Coconut",
            1600,
            "Fruit Fetish Victoria's Spirit",
            "../images/maquillaje/coconut_2.jpeg",
            "maquillaje de alta calidad",
            null,
            null,
            imagenesProducto2 // Agregar la lista de imágenes aquí
        ));
        this.agregar(new Producto(
          3,
          "Raspberry",
          1600,
          "Fruit Fetish Victoria's Spirit",
          "../images/maquillaje/raspberry_2.jpeg",
          "maquillaje de alta calidad",
          null,
          null,
          imagenesProducto3 // Agregar la lista de imágenes aquí
      ));
      this.agregar(new Producto(
        4,
        "Strawberry and Melon",
        1600,
        "Fruit Fetish Victoria's Spirit",
        "../images/maquillaje/raspberry_melon_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto4 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        5,
        "Rose Gold 24k",
        1500,
        "Victoria's Spirit",
        "../images/maquillaje/rosegold_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto5 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        6,
        "Gold 24k",
        1500,
        "Victoria's Spirit",
        "../images/maquillaje/gold_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto6 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        7,
        "Kiwi Blush",
        1600,
        "Gloss Victoria's Spirit",
        "../images/maquillaje/kiwiblush_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto7 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        8,
        "Coconut",
        1600,
        "Gloss Victoria's Spirit",
        "../images/maquillaje/coconut_craze_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto8 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        9,
        "Strawberry fizz",
        1600,
        "Gloss Victoria's Spirit",
        "../images/maquillaje/strawberryfizz_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto9 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        10,
        "Juicy Melon",
        1600,
        "Gloss Victoria's Spirit",
        "../images/maquillaje/juicy_melon_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto10 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        11,
        "Candy Baby",
        1600,
        "Gloss Victoria's Spirit",
        "../images/maquillaje/candy_baby_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto11 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        12,
        "Sugar High",
        1600,
        "Gloss Victoria's Spirit",
        "../images/maquillaje/sugar_high_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto12 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        13,
        "Violet",
        2000,
        "Fat Oil Lip Drip",
        "../images/maquillaje/violet_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto13 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        14,
        "Brown",
        2000,
        "Fat Oil Lip Drip",
        "../images/maquillaje/Brown_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto14 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        15,
        "Light Pink Glitter",
        2000,
        "Fat Oil Lip Drip",
        "../images/maquillaje/light_pink_glitter_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto15 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        16,
        "Pink Glitter",
        2000,
        "Fat Oil Lip Drip",
        "../images/maquillaje/pink_glitter_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto16 // Agregar la lista de imágenes aquí
    ));
    this.agregar(new Producto(
        17,
        "Pink",
        2000,
        "Fat Oil Lip Drip",
        "../images/maquillaje/pink_2.jpeg",
        "maquillaje de alta calidad",
        null,
        null,
        imagenesProducto17 // Agregar la lista de imágenes aquí
    ));
    }
  
    mostrarNovedad() {
        let contenedor_productos = document.getElementById("contenedor_productos");
        this.listaDeProducto.forEach(producto => {
            contenedor_productos.innerHTML += producto.descripcion_Producto();
        });
    }
  }
  
  function openModal(productId) {
    const modal = document.getElementById("myModal");
    modal.classList.add("fadeIn");
    const modalImage = document.getElementById("modalImage");
    const thumbnailList = document.getElementById("thumbnailList");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    // Encuentra el producto correspondiente en tu lista de productos
    const product = cp.listaDeProducto.find((p) => p.id === productId);
  
    if (!product) {
        return; // Si no se encuentra el producto, no hagas nada
    }
  
    let currentImageIndex = 0;
  
    function showCurrentImage() {
        modalImage.src = product.imagenes[currentImageIndex];
    }
  
    function updateThumbnailOpacity(selectedIndex) {
        const thumbnails = thumbnailList.querySelectorAll("img");
        thumbnails.forEach((thumbnail, index) => {
            if (index === selectedIndex) {
                thumbnail.classList.add("selected");
            } else {
                thumbnail.classList.remove("selected");
            }
        });
    }
  
    function showThumbnails() {
        thumbnailList.innerHTML = "";
        product.imagenes.forEach((imagen, index) => {
            const thumbnail = document.createElement("li");
            thumbnail.innerHTML = `<img src="${imagen}" alt="" data-index="${index}" />`;
            thumbnail.addEventListener("click", (event) => {
                currentImageIndex = parseInt(event.target.getAttribute("data-index"));
                showCurrentImage();
                updateThumbnailOpacity(currentImageIndex);
            });
            thumbnailList.appendChild(thumbnail);
        });
  
        // Establece la opacidad inicial
        updateThumbnailOpacity(currentImageIndex);
    }
  
    showCurrentImage();
    modal.style.display = "block";
  
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", closeModal);
  
    prevBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex - 1 + product.imagenes.length) % product.imagenes.length;
        showCurrentImage();
        updateThumbnailOpacity(currentImageIndex);
    });
  
    nextBtn.addEventListener("click", () => {
        currentImageIndex = (currentImageIndex + 1) % product.imagenes.length;
        showCurrentImage();
        updateThumbnailOpacity(currentImageIndex);
    });
  
    showThumbnails();
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.classList.add("fadeOut");
    modal.style.display = "none";
  
    setTimeout(() => {
      modal.classList.remove("fadeIn", "fadeOut"); // Eliminar las clases de animación después de la transición
      modal.style.display = "none";
  }, 300);
  }
  
  const cp = new ControladorDeProductos();
  cp.updateProduct();
  cp.mostrarNovedad();

  function buscarProductos() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const contenedorProductos = document.getElementById("contenedor_productos");

    // Filtra los productos que coincidan con el término de búsqueda en nombre o descripción
    const productosFiltrados = cp.listaDeProducto.filter((producto) => {
        const nombreEnMinusculas = producto.nombre.toLowerCase();
        const descripcionEnMinusculas = producto.descripcion.toLowerCase();
        return nombreEnMinusculas.includes(searchTerm) || descripcionEnMinusculas.includes(searchTerm);
    });

    // Borra el contenido actual del contenedor de productos
    contenedorProductos.innerHTML = "";

    // Muestra los productos filtrados
    productosFiltrados.forEach((producto) => {
        contenedorProductos.innerHTML += producto.descripcion_Producto();
    });
}

// Agrega un evento click al botón de búsqueda
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", buscarProductos);
  