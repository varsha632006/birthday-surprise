let message = `Happy 21st Birthday Army ❤️🎂

You are the best gift in my life 💖  
Thank you for always supporting me 😘  

On your special day, I just want to remind you  
that you mean the world to me 🌍❤️  

May your 21st year be filled with success, happiness  
and endless love 💕✨  

Once again... Happy Birthday 💙`;

let i = 0;
let speed = 40;

function typingEffect() {
  if (i < message.length) {
    document.getElementById("typingText").innerHTML += message.charAt(i);
    i++;
    setTimeout(typingEffect, speed);
  }
}

typingEffect();

function showSurprise() {
  document.getElementById("surpriseMsg").innerHTML =
    "💖 Happy birthday to my ultimate bias and bestie! May your special day shine as bright as a BTS stadium concert, filled with endless purple love, joyous mikrokosmos lights, and all the happiness you deserve.";
}
