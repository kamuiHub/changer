 

let i = 0;
const txt = "So I started to walk into the water." + 
"I won`t lie to you boys, I was terrified. " + 
"But I pressed on, and as I made my way past the breakers a strange calm came over me. " + 
"I don`t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment,I was a marine biologist.";
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();