const header = document.getElementById("header");
const $form = document.getElementById("form");
const empresas = document.querySelectorAll(".img-fluid")
const divEmpresas = document.querySelectorAll(".empresas-container")
const servicios = document.querySelectorAll(".service")
const contacts = document.querySelectorAll(".contacts")

const texto = document.getElementById("leerMas")
const flechas = document.querySelectorAll(".js")
const divFotos = document.querySelectorAll(".divFotos")

const servTec = document.getElementById("servTec")
const programacion = document.getElementById("programacion")
const cctv = document.getElementById("cctv")
const telefonia = document.getElementById("telefonia")
const antenas = document.getElementById("antenas")
const estructura = document.getElementById("estructura")

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 1) {
        flechas.forEach(flecha => {
            flecha.classList.remove("flecha")
        })
    }
})

servTec.addEventListener("click", () => {
    Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html:
        '<i class="bi bi-pc-display" style="font-size: 50px; color: black;"></i>' + 
        '<h3 class="tituloService" style="margin-top: 20px; color: black; font-size: 1.8rem;">Soporte técnico</h3>' +
        '<p class="textoService" style="margin-top: 10px; font-size: 1.2rem; color: black;">Asesorías, proyecto básico, proyecto ejecutivo, asistencia técnica a la implementación, otros servicios.</p>',
    })
})

programacion.addEventListener("click", () => {
    Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html:
        '<i class="bi bi-code-square" style="font-size: 50px; color: black;"></i>' + 
        '<h3 class="tituloService" style="color: black; font-size: 1.8rem; margin-top: 10px;">Programación</h3>' +
        '<p class="textoService" style=" font-size: 1.2rem; color: black; margin-top: 20px;">Páginas web para PC, tabletas y celulares, desde páginas informativas hasta tiendas online.</p>',
    })
})

cctv.addEventListener("click", () => {
    Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html:
        '<img src="/images/panel.png" class="logoPanel" style="width: 60px">' + 
        '<h3 class="tituloService" style="margin-top: 15px; color: black; font-size: 2rem;">Paneles solares</h3>' +
        '<p class="textoService" style="margin-top: 10px; font-size: 1.2rem; color: black;">Buscamos la mayor rentabilidad en energía solar y autoconsumo para nuestros clientes, asesorando y diseñando las instalaciones en base a la necesidad de cada empresa.</p>',
    })
})

telefonia.addEventListener("click", () => {
    Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html:
        '<i class="bi bi-telephone" style="font-size: 50px; color: black;"></i>' + 
        '<h3 class="tituloService" style="margin-top: 20px; color: black; font-size: 2rem;">Telefonía IP</h3>' +
        '<p class="textoService" style="margin-top: 10px; font-size: 1.2rem; color: black;">Asesoramiento, implementación, customización, configuración, diseño de soluciones a medida, adaptación y reutilización de equipamiento, provisión de Hardware y mantenimiento. Desarrollo sobre la plataforma que brinda ASTERISK.</p>',
    })
})

antenas.addEventListener("click", () => {
    Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html:
        '<i class="bi bi-broadcast-pin" style="font-size: 50px; color: black;"></i>' + 
        '<h3 class="tituloService" style="margin-top: 20px; color: black; font-size: 2rem;">Antenas satelitales</h3>' +
        '<p class="textoService" style="margin-top: 10px; font-size: 1.2rem; color: black;">Instalación de antenas satelitales receptoras para los cines de todo el país.</p>' +
        '<br>Ver también <a href="/indexAWS.html" target="_blank" class="numero">All Works & SAT.</a>',
    })
})

estructura.addEventListener("click", () => {
    Swal.fire({
        showConfirmButton: false,
        showCloseButton: true,
        html:
        '<i class="bi-building-fill" style="font-size: 50px; color: black;"></i>' + 
        '<h3 class="tituloService" style="margin-top: 20px; color: black; font-size: 1.9rem;">Soluciones de infraestructura</h3>' +
        '<p class="textoService" style="margin-top: 10px; font-size: 1.2rem; color: black;">Asesoramiento, diseño e implementación de enlaces y redes inalámbricas, redes de telemetría, datos y vigilancia para parques eólicos, yacimientos de gas y petróleo. Diseño y cálculo de redes de fibra óptica tendidos aéreos y subterráneos.</p>',
    })
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
    })
})

empresas.forEach(img => {
    img.addEventListener("mouseover", () => {
        img.classList.remove("blur")
    })
})

empresas.forEach(img => {
    img.addEventListener("mouseout", () => {
        img.classList.add("blur")
    })
})

servicios.forEach((servicio) => observer.observe(servicio))
divEmpresas.forEach((empresa) => observer.observe(empresa))
contacts.forEach((contact) => observer.observe(contact))
divFotos.forEach((foto) => observer.observe(foto))


$form.addEventListener("submit", handleSubmit)

async function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })
    if(response.ok){
        Swal.fire({
            position: '',
            icon: 'success',
            title: 'Tu e-mail fue enviado',
            text:"¡Gracias por contactarte con All Works!",
            showConfirmButton: false,
            timer: 2500,
            width: "400px"
          })
        $form.reset()
    }   
}
