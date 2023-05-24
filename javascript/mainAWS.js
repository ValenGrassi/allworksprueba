const mode = document.querySelectorAll(".mode")
const body = document.body
const texto = document.getElementById("modoTexto")
const flechas = document.querySelectorAll(".js")
const $form = document.getElementById("form");

mode[0].addEventListener("click", () => {
    const value = body.classList.toggle("bright")
    localStorage.setItem("mode", value)
    if(value){
        texto.innerHTML = "modo claro";
    } else {texto.innerHTML = "modo oscuro";
}
})

const value = localStorage.getItem("mode")

if (value == "true") {
    body.classList.add("bright");
    texto.innerHTML = "modo claro";
} else {
    body.classList.remove("bright");
    texto.innerHTML = "modo oscuro";
}

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 1) {
        flechas.forEach(flecha => {
            flecha.classList.remove("flecha")
        })
    }
})

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
            text:"¡Gracias por contactarte con All Works & Sat!",
            showConfirmButton: false,
            timer: 2500,
            width: "400px"
          })
        $form.reset()
    }   
}