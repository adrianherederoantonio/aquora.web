function iniciarCarrusel() {
    const imagenes = [
        "waterpolista1.png", "waterpolista2.png", "waterpolista3.png", 
        "waterpolista4.png", "waterpolista5.png", "waterpolista6.png"
    ];

    const heroImage = document.getElementById("hero-png");
    let indiceActual = 0;

    if (!heroImage) return;

    function cambiarImagenCarrusel() {
        // 1. Iniciar salida hacia la derecha
        heroImage.classList.remove('slide-in');
        heroImage.classList.add('slide-out');

        // 2. Esperamos a que la animación de salida termine (0.8s)
        setTimeout(() => {
            let nuevoIndice;
            do {
                nuevoIndice = Math.floor(Math.random() * imagenes.length);
            } while (nuevoIndice === indiceActual);

            indiceActual = nuevoIndice;
            heroImage.src = "assets/img/" + imagenes[indiceActual];

            // 3. Cuando la nueva imagen cargue, la hacemos entrar por la izquierda
            heroImage.onload = () => {
                heroImage.classList.remove('slide-out');
                heroImage.classList.add('slide-in');
            };
        }, 500); // Coincide con la duración de la animación CSS
    }

    setInterval(cambiarImagenCarrusel, 5000);
};