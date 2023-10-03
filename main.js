const infoMail = document.getElementById("mail");
const infoName = document.getElementById("name");
const infoMessage = document.getElementById("message");
const btn = document.getElementById("btn");
const userInfoP = document.getElementById("userInfoP")



function saveInfo(e) {
    e.preventDefault();
    const user1 = {name: infoName.value, mail: infoMail.value, message: infoMessage.value};
    
    // pasar a local storage
    localStorage.setItem("user1", JSON.stringify(user1));
    
    // registrar al usuario en el HTML
    const infoUser = JSON.parse(localStorage.getItem("user1"));
    // OPTION concatenar
    // userInfoP.innerHTML = "Nombre: " + infoUser.name + "\nMail: " + infoUser.mail + "\nMensaje:" + infoUser.message;
    userInfoP.innerHTML = `Tu nombre es ${infoUser.name}, tu mail ${infoUser.mail} y tu comentario: ${infoUser.message}`;
};


btn.addEventListener("click", saveInfo);