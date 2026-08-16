(()=>{
            const f= document.querySelector("#contact-modal form");
            if(! f) return;
            f.id= "helpForm";
            const b= document.querySelector("#contact-modal .modal-footer .btn .btn-primary");
            if(b) {b.type="submit";
                    b.removeAttribute("data-bs-dismiss");
                    b.setAttribute("form", "helpForm");
            }
            f.addEventListener("submit", e =>(
                e.preventDefault(),
                bootstrap.Collapse.getOrCreateInstance(document.getElementById("conf-success-alert")).show(),
                bootstrap.Modal.getOrCreateInstance(document.getElementById("contact-modal")).hide(),
                f.reset()
            ));
        })();
function showAlert(alertId){
    const messageAlert= document.querySelector("#", alertId);
    const collapse= new bootstrap.Collapse(messageAlert);
    collapse.show();
}
const modalYesButton= document.querySelector("#contact-modal .btn-primary");
modalYesButton.addEventListener("click", function(){
    const sendButton= document.querySelector("#help-button");
    sendButton.style.display= "none";
    showAlert("conf-success-alert");
});
const button = document.getElementById("openbtn");
const menu = document.getElementById("routes_of_america_tablet_and_phone_navbar_menu");
button.addEventListener("click", () => {
    menu.classList.toggle("open");
});