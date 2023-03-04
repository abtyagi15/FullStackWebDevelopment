let modalClass = document.querySelector(".modal");
let bodyClass = document.querySelector("#wrapper")
function closeModal() {
    modalClass.classList.add("scale-0");
    modalClass.classList.remove("scale-100");
    bodyClass.classList.add("bg-black");
    bodyClass.classList.remove("bg-[#404258]");

}

function openModal() {
    modalClass.classList.remove("scale-0");
    modalClass.classList.add("scale-100");
    bodyClass.classList.add("bg-[#404258]");
    bodyClass.classList.remove("bg-black");



}