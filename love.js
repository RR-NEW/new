document.querySelector("#calculate").addEventListener("click", function(){
    let randomnumber = Math.floor(Math.random()*100)+1;
    let boy= document.querySelector("#boyname").value;
    let girl=document.querySelector("#girlname").value;
    document.querySelector("#result").textContent="The score of your love ❤️ is " + randomnumber + "  %  , Your love compatibility has been calculated successfully. This score is just for fun, but it reflects the special bond and chemistry between you both. Stay happy, support each other, and enjoy every moment together. 💕";
});
let message = "";

if (randomNumber > 80) {
    message = "Perfect Match! ❤️";
} else if (randomNumber > 50) {
    message = "You make a great couple! 😊";
} else {
    message = "Friendship is a great start! 😄";
}