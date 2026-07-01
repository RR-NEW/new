document.querySelector("#calculate").addEventListener("click", function(){
    let randomnumber = Math.floor(Math.random()*100)+1;
    let boy= document.querySelector("#boyname").value;
    let girl=document.querySelector("#girlname").value;
    document.querySelector("#result").textContent="This is the score of your love ❤️ is " + randomnumber + "  %  Your love compatibility has been calculated successfully. This score is just for fun, but it reflects the special bond and chemistry between you both. Stay happy, support each other, and enjoy every moment together. 💕";
});