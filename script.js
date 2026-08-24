let page=1;

function next(){
  if(page>=9)return;
  const current=document.getElementById("p"+page);
  current.classList.remove("active");
  page++;
  const nextPage=document.getElementById("p"+page);
  nextPage.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(page===9) confetti();
}

function answer(b,ok){
  const c=b.closest(".quiz");
  const f=c.querySelector(".feedback");
  const n=c.querySelector(".next");
  const stage=c.closest(".quiz-stage");
  const panda=stage?.querySelector(".panda");
  const teddy=stage?.querySelector(".teddy");

  if(ok){
    c.querySelectorAll(".options button").forEach(x=>x.disabled=true);
    b.style.background="#39df9a";
    b.style.color="#143d2d";
    b.classList.add("correct-pop");
    f.textContent="Correct! 🎉💕 You got it!";
    n.classList.remove("hidden");

    if(panda){
      panda.classList.remove("sad");
      panda.classList.add("happy");
      panda.querySelector(".reaction").textContent="YAYYY! Correct! 🥳💖";
    }
    if(teddy){
      teddy.classList.remove("sad");
      teddy.classList.add("happy");
      teddy.querySelector(".reaction").textContent="So proud of you! 🧸✨";
    }

    burstHearts(stage);
  }else{
    f.textContent="Oops! 😜 Try again... the button is running away!";
    const box=c.querySelector(".options");
    box.classList.add("dodge-area");
    b.classList.add("wrong");
    b.style.left=Math.random()*65+"%";
    b.style.top=Math.random()*70+"%";

    if(panda){
      panda.classList.remove("happy");
      panda.classList.add("sad");
      panda.querySelector(".reaction").textContent="Hehe! Try again! 😜";
    }
    if(teddy){
      teddy.classList.remove("happy");
      teddy.classList.add("sad");
      teddy.querySelector(".reaction").textContent="Almost! 💕";
    }
  }
}

function burstHearts(stage){
  for(let i=0;i<12;i++){
    const h=document.createElement("span");
    h.textContent=["💖","💕","✨","🥳"][Math.floor(Math.random()*4)];
    h.className="mini-heart";
    h.style.left=(35+Math.random()*30)+"%";
    h.style.top=(35+Math.random()*30)+"%";
    h.style.animationDelay=(Math.random()*.2)+"s";
    stage.appendChild(h);
    setTimeout(()=>h.remove(),1100);
  }
}

function openGift(){
  document.querySelector(".gift").style.display="none";
  document.getElementById("giftmsg").classList.remove("hidden");
}

function confetti(){
  for(let i=0;i<100;i++){
    let x=document.createElement("div");
    x.textContent=["🎉","💖","✨","💕"][Math.floor(Math.random()*4)];
    x.style.position="fixed";
    x.style.left=Math.random()*100+"vw";
    x.style.top="-30px";
    x.style.fontSize="24px";
    x.style.zIndex=20;
    x.style.animation="fall 4s linear";
    document.body.appendChild(x);
    setTimeout(()=>x.remove(),4000);
  }
}
