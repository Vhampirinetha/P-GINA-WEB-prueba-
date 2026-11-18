/**
 * ==========================================================================
 * ATELIERLDIC AUDIO - LÓGICA PRINCIPAL (script.js)
 * JavaScript Vainilla limpio, modular y fácil de explicar.
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. BASE DE DATOS LOCAL: LOS 20 AUDÍFONOS (ARRAY DE OBJETOS)
// --------------------------------------------------------------------------
const audifonos = [
    {
        id: 1,
        nombre: "JBL Tour Pro 2",
        marca: "JBL",
        categoria: "In-Ear",
        precio: 1149000,
        imagen: "images/jbl-tour-pro-2.png",
        descripcionCorta: "Estuche inteligente Smart Case con pantalla táctil integrada de 1.45 pulgadas.",
        descripcionLarga: "Primeros audífonos en incorporar una pantalla táctil en el estuche para controlar música, llamadas y ecualización sin tocar el celular. Ofrecen cancelación de ruido adaptativa y sonido JBL Pro Sound.",
        specs: {
            driver: "Dinámico de 10 mm",
            bateria: "Hasta 40 horas totales (10h auriculares + 30h estuche)",
            cancelacion: "True Adaptive Noise Cancelling",
            peso: "6.1 gramos por auricular"
        }
    },
    {
        id: 2,
        nombre: "Huawei FreeBuds Pro 5",
        marca: "Huawei",
        categoria: "In-Ear",
        precio: 1199000,
        destacado: true, // BUQUE INSIGNIA DESTACADO
        imagen: "images/huawei-freebuds-pro-5.png",
        descripcionCorta: "Buque insignia con doble transductor acústico planar + dinámico de 11mm y ANC 3.0.",
        descripcionLarga: "Audífonos de referencia con sonido de alta resolución Hi-Res. Cuentan con un transductor dinámico de 11mm para bajos profundos y un microdiafragma planar para frecuencias ultra altas de hasta 48 kHz. Cancelación de ruido inteligente ANC 3.0.",
        specs: {
            driver: "Doble motor (Dinámico 11mm + Planar micro)",
            bateria: "Hasta 33 horas con estuche (7h continuas)",
            cancelacion: "ANC Dinámico Inteligente 3.0 hasta 50 dB",
            peso: "5.8 gramos por auricular"
        }
    },
    {
        id: 3,
        nombre: "AirPods Pro 3",
        marca: "Apple",
        categoria: "In-Ear",
        precio: 1399000,
        imagen: "images/airpods-pro-3.png",
        descripcionCorta: "Audio computacional avanzado con chip H3 y Audio Espacial personalizado.",
        descripcionLarga: "La nueva generación de audífonos de Apple con chip H3. Ofrecen el doble de cancelación de ruido activa, modo ambiente adaptativo de grado clínico y estuche MagSafe USB-C.",
        specs: {
            driver: "Transductor a medida de alta excursión",
            bateria: "Hasta 36 horas totales (8h continuas)",
            cancelacion: "Cancelación Activa de Ruido Pro de nivel clínico",
            peso: "5.3 gramos por auricular"
        }
    },
    {
        id: 4,
        nombre: "Sony WH-1000XM5",
        marca: "Sony",
        categoria: "Over-Ear",
        precio: 1849000,
        imagen: "images/sony-wh-1000xm5.png",
        descripcionCorta: "Líder mundial en cancelación de ruido con procesador dual V1 + QN1 y 8 micrófonos.",
        descripcionLarga: "El estándar de la industria en cancelación activa de ruido con cúpula de fibra de carbono de 30mm. Su doble procesador elimina ruidos de media y alta frecuencia de forma instantánea. Soporta códec LDAC de alta resolución.",
        specs: {
            driver: "30 mm con compuesto de fibra de carbono",
            bateria: "30 horas con ANC activo (40h sin ANC)",
            cancelacion: "Auto NC Optimizer con procesadores V1 y QN1",
            peso: "250 gramos"
        }
    },
    {
        id: 5,
        nombre: "Bose QuietComfort Ultra Headphones",
        marca: "Bose",
        categoria: "Over-Ear",
        precio: 2290000,
        imagen: "images/bose-quietcomfort-ultra-headphones.png",
        descripcionCorta: "Inmersión acústica tridimensional con Bose Immersive Audio y calibración CustomTune.",
        descripcionLarga: "Ofrecen sonido espacializado que sitúa la música directamente frente a ti. Su tecnología CustomTune analiza la forma única de tus oídos para personalizar el perfil de audio y el nivel de silencio.",
        specs: {
            driver: "Transductor electroacústico propietario Bose",
            bateria: "24 horas de autonomía continua",
            cancelacion: "Modos Silencio, Consciente e Inmersión total",
            peso: "252 gramos"
        }
    },
    {
        id: 6,
        nombre: "Sennheiser Momentum 4 Wireless",
        marca: "Sennheiser",
        categoria: "Over-Ear",
        precio: 1699000,
        imagen: "images/sennheiser-momentum-4-wireless.png",
        descripcionCorta: "Firma acústica audiófila alemana con una autonomía colosal de 60 horas continuas.",
        descripcionLarga: "Diseñados para los amantes del sonido de alta fidelidad. Su driver de 42 mm entrega un balance sonoro impecable con agudos aireados y graves controlados. Su batería de 60 horas es líder en el mercado.",
        specs: {
            driver: "Dinámico de 42 mm inspirado en monitores de estudio",
            bateria: "60 horas ininterrumpidas con ANC activo",
            cancelacion: "ANC Adaptativo híbrido con modo transparencia",
            peso: "293 gramos"
        }
    },
    {
        id: 7,
        nombre: "Samsung Galaxy Buds3 Pro",
        marca: "Samsung",
        categoria: "In-Ear",
        precio: 999000,
        imagen: "images/samsung-galaxy-buds3-pro.png",
        descripcionCorta: "Diseño Blade vanguardista con luces LED interactivas y audio Hi-Fi de 24 bits.",
        descripcionLarga: "Presentan un cuerpo angular con iluminación Blade LED y doble amplificador (woofer + tweeter planar). Incluyen cancelación adaptativa impulsada por Galaxy AI y certificación IP57.",
        specs: {
            driver: "Doble amplificador (Woofer dinámico + Tweeter planar)",
            bateria: "Hasta 30 horas con estuche",
            cancelacion: "ANC Adaptativo inteligente con detección de voz",
            peso: "5.4 gramos por auricular"
        }
    },
    {
        id: 8,
        nombre: "Sony WF-1000XM5",
        marca: "Sony",
        categoria: "In-Ear",
        precio: 1249000,
        imagen: "images/sony-wf-1000xm5.png",
        descripcionCorta: "Diafragma Dynamic Driver X de 8.4mm y almohadillas de aislamiento de poliuretano.",
        descripcionLarga: "El pináculo del sonido true wireless de Sony. Incorpora el procesador integrado V2 y el chip QN2e, con soporte de códec de alta fidelidad LDAC y almohadillas de espuma viscoelástica.",
        specs: {
            driver: "Dynamic Driver X de 8.4 mm con diafragma multizona",
            bateria: "Hasta 24 horas (8h audífonos + 16h estuche)",
            cancelacion: "Doble procesador V2 + QN2e",
            peso: "5.9 gramos por auricular"
        }
    },
    {
        id: 9,
        nombre: "Beats Studio Pro",
        marca: "Beats",
        categoria: "Over-Ear",
        precio: 1499000,
        imagen: "images/beats-studio-pro.png",
        descripcionCorta: "DAC interno USB-C para audio sin pérdidas Lossless y almohadillas UltraPlush.",
        descripcionLarga: "La entrega más precisa de Beats. Permite reproducir audio sin pérdida vía cable USB-C a 24 bits / 48 kHz. Sus almohadillas de cuero sintético UltraPlush ofrecen comodidad duradera.",
        specs: {
            driver: "Transductor de 40 mm con polímero de doble capa",
            bateria: "40 horas de reproducción (24h con ANC activo)",
            cancelacion: "Cancelación Activa de Ruido adaptativa",
            peso: "260 gramos"
        }
    },
    {
        id: 10,
        nombre: "Bowers & Wilkins Px7 S2e",
        marca: "Bowers & Wilkins",
        categoria: "Over-Ear",
        precio: 2099000,
        imagen: "images/bowers-wilkins-px7-s2e.png",
        descripcionCorta: "DSP de 24 bits afinado con conos de biocelulosa angulados de 40 mm.",
        descripcionLarga: "Inspirados en los legendarios altavoces 800 Diamond de B&W. Cuentan con un motor digital DSP de 24 bits, conos de biocelulosa angulados dentro del auricular y acabados en aluminio y cuero.",
        specs: {
            driver: "Conos dinámicos de biocelulosa de 40 mm",
            bateria: "30 horas continuas con ANC",
            cancelacion: "Híbrida con 6 micrófonos acústicos",
            peso: "307 gramos"
        }
    },
    {
        id: 11,
        nombre: "Bose QuietComfort Ultra Earbuds",
        marca: "Bose",
        categoria: "In-Ear",
        precio: 1450000,
        imagen: "images/bose-quietcomfort-ultra-earbuds.png",
        descripcionCorta: "La cancelación activa in-ear más potente del mercado con CustomTune.",
        descripcionLarga: "El silencio más profundo en formato compacto. El sistema CustomTune mide el conducto auditivo con una señal acústica y ajusta la cancelación de ruido al instante para tus oídos.",
        specs: {
            driver: "Microtransductor acústico propietario Bose",
            bateria: "Hasta 24 horas con estuche (6h continuas)",
            cancelacion: "Cancelación Activa de Ruido de clase mundial",
            peso: "6.2 gramos por auricular"
        }
    },
    {
        id: 12,
        nombre: "Nothing Ear",
        marca: "Nothing",
        categoria: "In-Ear",
        precio: 749000,
        imagen: "images/nothing-ear.png",
        descripcionCorta: "Diseño icónico transparente con diafragma de cerámica pura y códec LHDC 5.0.",
        descripcionLarga: "Destacan por su diseño transparente y su transductor de cerámica de 11 mm, que otorga agudos cristalinos y respuesta rápida. Soporta códec de audio en alta resolución LHDC 5.0.",
        specs: {
            driver: "Diafragma de cerámica de 11 mm",
            bateria: "Hasta 40.5 horas totales (8.5h sin ANC)",
            cancelacion: "Smart ANC inteligente de hasta 45 dB",
            peso: "4.6 gramos por auricular"
        }
    },
    {
        id: 13,
        nombre: "Google Pixel Buds Pro 2",
        marca: "Google",
        categoria: "In-Ear",
        precio: 1090000,
        imagen: "images/google-pixel-buds-pro-2.png",
        descripcionCorta: "Chip acústico Tensor A1 con inteligencia artificial integrada y diseño ultraliviano.",
        descripcionLarga: "Equipados con el primer procesador de audio diseñado por Google: el chip Tensor A1. Cancela el doble de ruido mediante Silent Seal 2.0 en un diseño ultraligero Twist-to-Adjust.",
        specs: {
            driver: "Dinámico de 11 mm con cámara de descompresión",
            bateria: "Hasta 30 horas con estuche (8h continuas con ANC)",
            cancelacion: "Silent Seal 2.0 impulsado por IA",
            peso: "4.7 gramos por auricular"
        }
    },
    {
        id: 14,
        nombre: "Marshall Major V",
        marca: "Marshall",
        categoria: "Over-Ear",
        precio: 799000,
        imagen: "images/marshall-major-v.png",
        descripcionCorta: "Estilo retro con cuero texturizado, botón de latón dorado y más de 100 horas de batería.",
        descripcionLarga: "Herencia del rock clásico en tus oídos. Confeccionados con vinilo texturizado tipo cuero, botón multidireccional dorado y una autonomía impresionante de más de 100 horas inalámbricas.",
        specs: {
            driver: "Dinámicos de 40 mm sintonizados con sonido Marshall",
            bateria: "Más de 100 horas con carga rápida inalámbrica",
            cancelacion: "Aislamiento acústico pasivo de alta densidad",
            peso: "186 gramos"
        }
    },
    {
        id: 15,
        nombre: "Shure AONIC 50 Gen 2",
        marca: "Shure",
        categoria: "Over-Ear",
        precio: 1890000,
        imagen: "images/shure-aonic-50-gen-2.png",
        descripcionCorta: "Monitor de estudio profesional con DAC de 32 bits y drivers de neodimio de 50 mm.",
        descripcionLarga: "Desarrollados por la legendaria casa de micrófonos de estudio Shure. Incorporan un DAC de 32 bits y transductores de 50 mm para revelar los detalles más finos de cualquier grabación.",
        specs: {
            driver: "Dinámicos con imán de neodimio de 50 mm",
            bateria: "Hasta 45 horas de reproducción",
            cancelacion: "Híbrida espacial con tecnología Snapdragon Sound",
            peso: "340 gramos"
        }
    },
    {
        id: 16,
        nombre: "Technics EAH-AZ80",
        marca: "Technics",
        categoria: "In-Ear",
        precio: 1380000,
        imagen: "images/technics-eah-az80.png",
        descripcionCorta: "Diafragma de aleación de aluminio de 10 mm y conexión multipunto para 3 dispositivos.",
        descripcionLarga: "La división audiófila japonesa ofrece transductores de aluminio de 10 mm que reproducen medios y agudos naturales. Son pioneros en permitir conexión simultánea con 3 dispositivos Bluetooth.",
        specs: {
            driver: "Diafragma de aleación de aluminio de 10 mm",
            bateria: "Hasta 24 horas con estuche (7h continuas)",
            cancelacion: "Dual Hybrid Noise Cancelling",
            peso: "7.0 gramos por auricular"
        }
    },
    {
        id: 17,
        nombre: "Jabra Elite 10 Gen 2",
        marca: "Jabra",
        categoria: "In-Ear",
        precio: 1299000,
        imagen: "images/jabra-elite-10-gen-2.png",
        descripcionCorta: "Comodidad Jabra ComfortFit semiabierta con Dolby Atmos 3D y estuche transmisor.",
        descripcionLarga: "Diseño ergonómico semiabierto que elimina la presión en el oído. Su estuche inteligente se puede conectar mediante cable a pantallas de aviones para transmitir audio inalámbrico.",
        specs: {
            driver: "Altavoces enriquecidos de 10 mm con Dolby Atmos",
            bateria: "Hasta 36 horas totales con estuche",
            cancelacion: "Jabra Advanced ANC (el doble de reducción)",
            peso: "5.7 gramos por auricular"
        }
    },
    {
        id: 18,
        nombre: "Anker Soundcore Space One Pro",
        marca: "Anker Soundcore",
        categoria: "Over-Ear",
        precio: 849000,
        imagen: "images/anker-soundcore-space-one-pro.png",
        descripcionCorta: "Estructura plegable FlexiCurve ultracompacta con ANC de 4 etapas y audio LDAC.",
        descripcionLarga: "Diseño plegable que reduce su volumen a la mitad para transportarlo fácilmente. Su sistema de 6 micrófonos calibra la cancelación de ruido 3 veces por segundo para bloquear el entorno.",
        specs: {
            driver: "Transductor triple compuesto de 40 mm",
            bateria: "60 horas (40 horas con ANC activo)",
            cancelacion: "Sistema de 4 etapas con 6 micrófonos",
            peso: "286 gramos"
        }
    },
    {
        id: 19,
        nombre: "Dyson OnTrac",
        marca: "Dyson",
        categoria: "Over-Ear",
        precio: 2490000,
        imagen: "images/dyson-ontrac.png",
        descripcionCorta: "Rango sonoro ultra ampliado de 6 Hz a 21 kHz con tapas de aluminio personalizables.",
        descripcionLarga: "Ingeniería de vanguardia con un rango de respuesta que abarca sub-bajos de 6 Hz. Sus tapas y almohadillas son modulares e intercambiables en acabados cerámicos y metálicos.",
        specs: {
            driver: "Neodimio de 40 mm a 16 ohmios optimizado",
            bateria: "55 horas continuas con ANC activado",
            cancelacion: "Algoritmo con muestreo 384.000 veces por segundo",
            peso: "451 gramos"
        }
    },
    {
        id: 20,
        nombre: "Bang & Olufsen Beoplay EX",
        marca: "Bang & Olufsen",
        categoria: "In-Ear",
        precio: 2190000,
        imagen: "images/bang-olufsen-beoplay-ex.png",
        descripcionCorta: "Lujo escandinavo con cristal de espejo táctil, aluminio anodizado y drivers de 9.2mm.",
        descripcionLarga: "Construidos como una pieza de alta joyería en Dinamarca. Poseen una superficie de cristal templado de espejo táctil, marco de aluminio cepillado y sonido audiófilo con certificación IP57.",
        specs: {
            driver: "Neodimio electrodinámico de 9.2 mm",
            bateria: "Hasta 28 horas totales con estuche",
            cancelacion: "Cancelación Activa de Ruido Adaptativa",
            peso: "6.0 gramos por auricular"
        }
    }
];

// --------------------------------------------------------------------------
// 2. ESTADO DE LA APLICACIÓN (VARIABLES GLOBALES)
// --------------------------------------------------------------------------
let carrito = [];
let categoriaActiva = "todos";

// --------------------------------------------------------------------------
// 3. REFERENCIAS A ELEMENTOS DEL DOM (HTML)
// --------------------------------------------------------------------------
const grillaProductos = document.getElementById("grilla-productos");
const buscadorInput = document.getElementById("buscador");
const botonesFiltro = document.querySelectorAll(".btn-filtro");

// Modal
const modal = document.getElementById("modal-producto");
const modalCuerpo = document.getElementById("modal-cuerpo");
const btnCerrarModal = document.getElementById("btn-cerrar-modal");

// Carrito
const carritoFondo = document.getElementById("carrito-fondo");
const btnAbrirCarrito = document.getElementById("btn-abrir-carrito");
const btnCerrarCarrito = document.getElementById("btn-cerrar-carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const conteoCarrito = document.getElementById("conteo-carrito");
const btnVaciarCarrito = document.getElementById("btn-vaciar-carrito");
const btnCheckout = document.getElementById("btn-checkout");

// --------------------------------------------------------------------------
// 4. FUNCIONES PRINCIPALES
// --------------------------------------------------------------------------

/**
 * Convierte un número en formato de pesos colombianos (ej: 1199000 -> "$ 1.199.000 COP")
 */
function formatearPrecio(valor) {
    return "$ " + valor.toLocaleString("es-CO") + " COP";
}

/**
 * Dibuja las tarjetas de los productos en el catálogo
 */
function renderizarCatalogo(lista) {
    // Si no hay productos que coincidan
    if (lista.length === 0) {
        grillaProductos.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p style="font-size: 1.1rem; color: var(--color-beige);">No se encontraron audífonos con ese criterio.</p>
            </div>
        `;
        return;
    }

    // Generar el HTML de las tarjetas
    grillaProductos.innerHTML = lista.map(item => `
        <article class="tarjeta-producto">
            <div>
                <span class="tarjeta-categoria">${item.categoria} &bull; ${item.marca}</span>
                <div class="tarjeta-img" onclick="abrirModal(${item.id})">
                    <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='https://placehold.co/400x400/3b2418/e8dcc8?text=${encodeURIComponent(item.nombre)}'">
                </div>
                <h4 class="tarjeta-titulo" onclick="abrirModal(${item.id})">${item.nombre}</h4>
                <p class="tarjeta-desc">${item.descripcionCorta}</p>
            </div>
            <div class="tarjeta-pie">
                <span class="tarjeta-precio">${formatearPrecio(item.precio)}</span>
                <div class="tarjeta-acciones">
                    <button class="btn-icono" onclick="agregarAlCarrito(${item.id})" title="Agregar al Carrito">🛒</button>
                    <button class="btn-icono" onclick="abrirModal(${item.id})" title="Ver Detalles">👁️</button>
                </div>
            </div>
        </article>
    `).join("");
}

/**
 * Filtra los productos según el texto del buscador y la categoría seleccionada
 */
function filtrarCatalogo() {
    const texto = buscadorInput.value.toLowerCase().trim();

    const resultado = audifonos.filter(item => {
        // Coincidencia con categoría
        const coincideCategoria = (categoriaActiva === "todos") || (item.categoria === categoriaActiva);
        
        // Coincidencia con texto (nombre, marca o descripción)
        const coincideTexto = item.nombre.toLowerCase().includes(texto) ||
                              item.marca.toLowerCase().includes(texto) ||
                              item.descripcionCorta.toLowerCase().includes(texto);

        return coincideCategoria && coincideTexto;
    });

    renderizarCatalogo(resultado);
}

// --------------------------------------------------------------------------
// 5. VENTANA MODAL (DETALLES DEL PRODUCTO)
// --------------------------------------------------------------------------

/**
 * Abre el modal con la información detallada del audífono según su ID
 */
function abrirModal(id) {
    const producto = audifonos.find(item => item.id === id);
    if (!producto) return;

    modalCuerpo.innerHTML = `
        <div class="modal-img-col">
            <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://placehold.co/400x400/3b2418/e8dcc8?text=${encodeURIComponent(producto.nombre)}'">
        </div>
        <div class="modal-info-col">
            <span class="etiqueta">${producto.categoria} / ${producto.marca}</span>
            <h3>${producto.nombre}</h3>
            <div class="modal-precio">${formatearPrecio(producto.precio)}</div>
            <p class="modal-descripcion">${producto.descripcionLarga}</p>
            
            <ul class="modal-specs">
                <li><strong>Driver:</strong> ${producto.specs.driver}</li>
                <li><strong>Batería:</strong> ${producto.specs.bateria}</li>
                <li><strong>Cancelación de Ruido:</strong> ${producto.specs.cancelacion}</li>
                <li><strong>Peso:</strong> ${producto.specs.peso}</li>
            </ul>

            <button class="btn btn-primario" onclick="agregarAlCarrito(${producto.id}); cerrarModal(); abrirCarrito();">
                🛒 Agregar al Carrito
            </button>
        </div>
    `;

    modal.classList.remove("oculto");
}

/**
 * Cierra la ventana modal
 */
function cerrarModal() {
    modal.classList.add("oculto");
}

// --------------------------------------------------------------------------
// 6. CARRITO DE COMPRAS
// --------------------------------------------------------------------------

/**
 * Agrega un audífono al carrito o aumenta su cantidad si ya existe
 */
function agregarAlCarrito(id) {
    const producto = audifonos.find(item => item.id === id);
    if (!producto) return;

    // Verificar si el producto ya está en el carrito
    const itemExistente = carrito.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    renderizarCarrito();
}

/**
 * Quita un producto del carrito
 */
function quitarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    renderizarCarrito();
}

/**
 * Vacía todos los productos del carrito
 */
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

/**
 * Actualiza la vista del carrito (conteo, lista y total acumulado)
 */
function renderizarCarrito() {
    // 1. Calcular cantidad total y precio total
    let totalItems = 0;
    let sumaTotal = 0;

    carrito.forEach(item => {
        totalItems += item.cantidad;
        sumaTotal += item.precio * item.cantidad;
    });

    // 2. Actualizar badge del header y total
    conteoCarrito.textContent = totalItems;
    totalCarrito.textContent = formatearPrecio(sumaTotal);

    // 3. Renderizar items en la lista
    if (carrito.length === 0) {
        listaCarrito.innerHTML = `<p style="text-align: center; color: var(--color-beige); margin-top: 20px;">Tu carrito está vacío.</p>`;
        return;
    }

    listaCarrito.innerHTML = carrito.map(item => `
        <div class="carrito-item">
            <div class="carrito-item-info">
                <strong>${item.nombre}</strong>
                <span>${item.cantidad} x ${formatearPrecio(item.precio)}</span>
            </div>
            <button class="carrito-item-btn-quitar" onclick="quitarDelCarrito(${item.id})">Quitar</button>
        </div>
    `).join("");
}

function abrirCarrito() {
    carritoFondo.classList.remove("oculto");
}

function cerrarCarrito() {
    carritoFondo.classList.add("oculto");
}

/**
 * Finaliza la compra generando un enlace de WhatsApp con el resumen
 */
function realizarCheckout() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Agrega al menos un producto.");
        return;
    }

    let sumaTotal = 0;
    let mensaje = "Hola ATELIERLDIC AUDIO, deseo realizar el siguiente pedido:\n\n";

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        sumaTotal += subtotal;
        mensaje += `- ${item.cantidad}x ${item.nombre} (${formatearPrecio(subtotal)})\n`;
    });

    mensaje += `\nTotal: ${formatearPrecio(sumaTotal)}\nEnvío a Colombia.`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    vaciarCarrito();
    cerrarCarrito();
}

// --------------------------------------------------------------------------
// 7. ESCUCHADORES DE EVENTOS (EVENT LISTENERS)
// --------------------------------------------------------------------------

// Búsqueda en tiempo real
buscadorInput.addEventListener("input", filtrarCatalogo);

// Botones de filtro de categorías
botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        // Quitar clase activa de todos los botones y ponérsela al pulsado
        botonesFiltro.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");

        // Actualizar categoría activa y filtrar
        categoriaActiva = boton.getAttribute("data-categoria");
        filtrarCatalogo();
    });
});

// Eventos del modal
btnCerrarModal.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
});

// Eventos del carrito
btnAbrirCarrito.addEventListener("click", abrirCarrito);
btnCerrarCarrito.addEventListener("click", cerrarCarrito);
carritoFondo.addEventListener("click", (e) => {
    if (e.target === carritoFondo) cerrarCarrito();
});
btnVaciarCarrito.addEventListener("click", vaciarCarrito);
btnCheckout.addEventListener("click", realizarCheckout);

// Cerrar modales con tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        cerrarModal();
        cerrarCarrito();
    }
});

// --------------------------------------------------------------------------
// 8. INICIALIZACIÓN
// --------------------------------------------------------------------------
// Dibuja el catálogo inicial con los 20 audífonos al cargar la página
renderizarCatalogo(audifonos);
