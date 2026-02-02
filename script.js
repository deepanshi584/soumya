function goToStory(){
  window.location.href = "story.html";
}

let step = 0;

const stories = [
  {
    img:"lo.jpg",
    title:"Our Love Story 💕",
    text:"Every love story is beautiful, but ours is my favourite ✨"
  },
  {
    img:"first.jpg",
    title:"Our First Meet 🌸",
    text:"The moment I saw you, my heart whispered — this is special 💖"
  },
  {
    img:"bs.jpg",
    title:"From Strangers to Best Friends 😊",
    text:"We laughed, we talked, and unknowingly became inseparable ✨"
  },
  {
    img:"visu.jpg",
    title:"Love of My Life 💍",
    text:"You are my happiness, my comfort, my home 🥹❤️"
  },
  {
    img:"vinit.jpg",
    title:"I Love You Vinit ❤️",
    text:"Today, tomorrow, forever — it’s always you 💖💍"
  },
  {
    img:"slay.jpg",
    title:"hein",
    text:"Chl Chl...jyada khush mt ho ab 😒"
  }
];

function nextStory(){
  step++;
  if(step < stories.length){
    document.getElementById("storyImg").src = stories[step].img;
    document.getElementById("storyTitle").innerText = stories[step].title;
    document.getElementById("storyText").innerText = stories[step].text;

    if(step === stories.length - 1){
        document.querySelector(".card button").style.display = "none";
    document.querySelector(".card").classList.add("zoom");

    }
  }
}
function goToStory(){
  const music = document.getElementById("bgMusic");
  music.play(); // user click → allowed
  localStorage.setItem("musicPlaying", "true");
  window.location.href = "story.html";
}
window.onload = function(){
  if(localStorage.getItem("musicPlaying") === "true"){
    const music = document.getElementById("bgMusic");
    music.play();
  }
};
const heartsContainer = document.querySelector(".hearts");

function createHeart(){
  if(!heartsContainer) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  heart.style.opacity = Math.random();

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);



