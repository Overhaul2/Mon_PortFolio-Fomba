const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const Objet = document.getElementById("Objet");
const message = document.getElementById("message");


function sendEmail(){

    const bodyMessage= `Nom complet:${fullName.value}, <br> Email:${email.value},
     <br> Téléphone: ${tel.value},  <br> Message:${message.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "babalarab2012@gmail.com",
        Password : "76543A28BD5433A0DA94376F6788D72A6EEA",
        To : 'babalarab2012@gmail.com',
        From : email.value,
        Subject : Objet.value,
        Body : bodyMessage,
    }).then(
      message => {
        if(message== "OK"){
            Swal.fire({
                title: "Succes !!!",
                text: "Message envoyé avec succès",
                icon: "success"
              });
        }
      }
    );

    function validation(){
        const items = document.querySelector(".item");
        for(const item of items){
            if(item.value ==""){
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
            item.addEventListener("keyup", ()=>{
                if(item.value!= ""){
                    item.classList.remove("error");
                item.parentElement.classList.remove("error");
                }else{}
            })
        }
    }
}

form.addEventListener("submit", (e)=>{
    e.preventDefault;
    //sendEmail();
});