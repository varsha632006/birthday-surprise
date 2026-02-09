let message = `Happy 21st Birthday My Love ❤️🎂

You are the best gift in my life 💖  
Thank you for always supporting me and loving me 😘  

On your special day, I just want to remind you  
that you mean the world to me 🌍❤️  

May your 21st year be filled with success, happiness  
and endless love 💕✨  

Once again... Happy Birthday My King 👑💙`;

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
    "💖 Surpriseee My Love 😘🎉 I Love you unconditionally Pedhoda 💙💙💙💙💙 You are my all time favorite Chocolate Boy  💕✨ and thank you soooooooooooooo much for treating me like princess👸";
}
