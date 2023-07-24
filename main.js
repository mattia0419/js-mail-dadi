const emails = ["impiegato@gmail.com", "direttore@gmail.com", "risorse_umane@gmail.com", "sviluppo@gmail.com"];

const emailTexted = document.getElementById("email-texted");

const sendButton = document.getElementById("send-button");

let result = false;

sendButton.addEventListener("click", function(){
    for(let i = 0; i < emails.length; i++){
        
        if(emailTexted.value == emails[i]){
            result = true;
        }

        
        
}
        const success = document.getElementById("success");
        const tryAgain = document.getElementById("try-again")
        
if(result){
    
    success.classList.remove("d-none")
    
}
else{
    tryAgain.classList.remove("d-none")
    

}
})
