const infoMail = document.getElementById("mail");
const infoName = document.getElementById("name");
const infoMessage = document.getElementById("message");
const btn = document.getElementById("btn");
const userInfoP = document.getElementById("userInfoP")



// function saveInfo(e) {
//     e.preventDefault();
//     const user1 = {name: infoName.value, mail: infoMail.value, message: infoMessage.value};
    
//     // pasar a local storage
//     localStorage.setItem("user1", JSON.stringify(user1));
    
//     // registrar al usuario en el HTML
//     const infoUser = JSON.parse(localStorage.getItem("user1"));
//     userInfoP.innerHTML = `Tu nombre es ${infoUser.name}, tu mail ${infoUser.mail} y tu comentario: ${infoUser.message}`;
// };

// btn.addEventListener("click", saveInfo);

const arrayUsers = []

function saveUsers(e) {
    e.preventDefault();
    userInfoP.innerHTML = "";
    const userRandom = {name: infoName.value, mail: infoMail.value, message: infoMessage.value};
    arrayUsers.push(userRandom);
    document.getElementById("myForm").reset();
    localStorage.setItem("arrayUsers", JSON.stringify(arrayUsers));

    let dataUsers = JSON.parse(localStorage.getItem("arrayUsers"));

    for (let i=0; i<dataUsers.length; i++) {
        // let newP = document.createElement("p");
        // document.body.appendChild(newP);
        userInfoP.innerHTML += `<p> Tu nombre es ${dataUsers[i].name}, tu mail ${dataUsers[i].mail} y tu comentario: ${dataUsers[i].message} </p>`
    }

   
};





btn.addEventListener("click", saveUsers);