document.addEventListener('DOMContentLoaded', () => {
    // 1. Slider Infinito con Fade
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }, 5000);
    }

    // 2. Smooth Scroll para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

/**
 * Función Maestra de Pedidos
 * @param {string} prod - Nombre del producto
 * @param {number} precio - Precio actual
 * @param {string} cat - Categoría para el mensaje
 */
function comprarPorWsp(prod, precio, cat) {
    const tel = "5491155609045";
    const msg = encodeURIComponent(
        `¡Hola Noelia! ✨ Vengo de la web de Artemisa.\n\n` +
        `Me interesa el siguiente producto de la sección *${cat}*:\n` +
        `🌿 *${prod}*\n` +
        `💰 Precio: $${precio}\n\n` +
        `¿Me podrías asesorar sobre el stock o formas de pago? ¡Muchas gracias!`
    );
    window.open(`https://wa.me/${tel}?text=${msg}`, '_blank');
}
function agrandarImagen(elemento) {
    var modal = document.getElementById("modal-foto");
    var fotoGrande = document.getElementById("foto-grande");
    
    modal.style.display = "flex"; /* ¡ESTO ES CLAVE! Tiene que ser flex */
    fotoGrande.src = elemento.src;
}

function cerrarImagen() {
    var modal = document.getElementById("modal-foto");
    modal.style.display = "none";
}