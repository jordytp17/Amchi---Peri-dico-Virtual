const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");


const btnArbrirSuscripcion = document.querySelector("#btn-abrir-suscripcion");
const btnCerrarSubs = document.querySelector("#btn-cerrar-suscripcion");
const modal2 = document.querySelector("#modal2");



btnAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})


//
btnArbrirSuscripcion.addEventListener("click", ()=>{
    modal2.showModal();
})

btnCerrarSubs.addEventListener("click", ()=>{
    modal2.close();
})
