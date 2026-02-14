const pages = document.querySelectorAll(".page");
const progressFill = document.querySelector(".progress-fill");
const music = document.getElementById("bgmusic");
const noBtn=document.getElementById("noBtn");

let currentPage=1;
const totalPages=pages.length;

const startDate=new Date("2026-02-02");
function updateCountdown(){
    const now=new Date();
    const diff=now-startDate;
    const days=Math.floor(diff/(1000*60*60*24));
    document.getElementById("countdown").innerHTML= 
        "Kita baru bersama "+days+ "hari 😆💕";
}
updateCountdown();

if(noBtn){
    noBtn.addEventListener("mouseover",()=>{
        noBtn.style.position="absolute";
        noBtn.style.left=Math.random()*80+"%";
        noBtn.style.top=Math.random()*80+"%";
    });
}

function updatePage(direction){
    pages.forEach(p=> {
        p.classList.remove("active", "slide-left","slide-right");
    });
    const current=document.getElementById("page"+currentPage);
    current.classList.add("active");

    updateProgress();
}

function goNext(){
    if(currentPage < totalPages){
        currentPage++;
        updatePage("next");
    }
}

function goBack(){
    if(currentPage > 1){
        currentPage--;
        updatePage("back");
    }
}

function updateProgress(){
    let percent=(currentPage/totalPages)*100;
    progressFill.style.width=percent+"%";
}

let startX=0;

document.addEventListener("touchstart",e=>{
    startX=e.touches[0].clientX;
});

document.addEventListener("touchend",e=>{
    let endX=e.changedTouches[0].clientX;
    let diff=startX-endX;

    if(diff>50){
        goNext();
    } else if(diff < -50){
        goBack();
    }
});

document.addEventListener("keydown",e=> {
    if(e.key === "arrowRight"){
        goNext();
    }
});

updateProgress();

function playMusic(){
    music.play();
}

function toggleMode(){
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
}

function toggleClean(){
    document.querySelector(".floating-hearts").style.display = "none";
}

function showMessage(){
    typeWriter("kamu cantik tapi nyebelin banget🙄")
}

function typeWriter(text){
    let i = 0;
    const target=document.getElementById("typing");
    target.innerHTML="";

    let interval = setInterval(()=>{
        target.innerHTML+=text.charAt(i);
        i++;
        if(i>=text.length)clearInterval(interval)
    },50)
}

function confettiEffect(){
    for(let i=0;i<30;i++){
        const conf=document.createElement("div")
        conf.style.position="fixed"
        conf.style.width="10px"
        conf.style.height="10px"
        conf.style.background="white"
        conf.style.top="0"
        conf.style.left=Math.random()*100+"%"
        conf.style.animation="float 3s linear"
        document.body.appendChild(conf)
        setTimeout(()=>conf.remove(),3000)
    }
}

function createHearts(){
    const container=document.querySelector(".floating-hearts");
    container.innerHTML="";
    
    for(let i=0;i<20;i++){
        const heart=document.createElement("span");
        heart.innerHTML="💖"
        heart.style.left=Math.random()*100+"%";
        heart.style.animationDuration=(Math.random()*3+2)+"s";
        container.appendChild(heart);
    }
}

function openEnvelope(){
    const envelope = document.querySelector(".envelope");
    const letterText = document.getElementById("letterText");

    envelope.classList.toggle("open");

    if(envelope.classList.contains("open")){
        letterText.innerHTML = "Semoga kita langgeng terus ya! Aku sayang kamu 💖";
        } else {
        letterText.innerHTML = "Klik amplop 💌";
    }
}
function typeWriterLetter(text){
    let i = 0;
    const target=document.getElementById("letterText");
    target.innerHTML="";

    let interval = setInterval(()=>{
        target.innerHTML+=text.charAt(i);
        i++;
        if(i>=text.length){
            clearInterval(interval);
        }
    },40);
}

function createSparkles(){
    const container=document.querySelector(".sparkles");
    for(let i=0;i<30;i++){
        const star=document.createElement("span");
        star.innerHTML="✨";
        star.style.left=Math.random()*100+"%";
        star.style.top=Math.random()*100+"%";
        star.style.animationDuration=(Math.random()*3+2)+"s";
        container.appendChild(star);
    }
}

let slides=document.querySelectorAll(".slide");
let slideIndex=0;

setInterval(()=>{
    slides[slideIndex].classList.remove("active");
    slideIndex=(slideIndex+1)%slides.length;
    slides[slideIndex].classList.add("active");
},3000);

function secretMessage(){
    const s=document.getElementById("secret");
    s.innerHTML="Makasi ya lek udah suka & sayang sama aku wlee";
    s.style.textShadow="0 0 20px pink";
}

createSparkles();
createHearts();

