// variable qui permet de selectionner la div de classe .burger-button
const burger_button = document.querySelector(".burger-button");

// cette ligne permet de détecter le clic sur la div burger-button
burger_button.addEventListener("click", () => {
    burger_button.classList.toggle("active")
} );



// // usable variables

// let user_age = parseInt(prompt("Entrer votre age "));

// if (user_age <= 1 && user_age <= 17){
//     alert("Vous n'etes pas encore majeur");
// }
// else if(user_age >= 18 && user_age <= 49){
//     alert("Vous etes majeur mais pas encore senior");
// }
// else if(user_age >= 50 && user_age < 60){
//     alert("Vous etes senior mais pas encore retraité");
// }
// else{
//     alert("Vous etes retraité, profitez de votre temps libre");
// }