function showAlert(alertId){
    setTimeout(() => {
        const messageAlert= document.querySelector("#", alertId);
        const collapse= new bootstrap.Collapse(messageAlert);
        collapse.show();
    }, 500);
}
const modalYesButton= document.querySelector("#contact-modal .btn-primary");
modalYesButton.addEventListener("click", function(){
    const sendButton= document.querySelector("help-button");
    sendButton.style.display= "none";
    showAlert("conf-success-alert");
});