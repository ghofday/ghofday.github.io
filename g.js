var motion = true;
var order ="start"
setTimeout(letterfloat,1000);
var hearts = 0
var endDate = new Date("Mar 01, 2021 12:00:00").getTime();
var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days +
        " <span class='label'>days</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
        " <span class='label'>hours</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
        " <span class='label'>minutes</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
        " <span class='label'>seconds</span>";
    
    } else {

        alert('alert');
    
    }
    
}, 1000);

function letterfloat() {
  if (motion) {
  document.getElementById('letter').style.transform = 'translateY(20px)';
  document.getElementById('openletter').style.transform = 'translateY(20px)';
  document.getElementById('paper').style.transform = 'translateY(20px)';
  setTimeout(letterfloatback, 1000); 
  }
}

function letterfloatback() {
  if (motion) {
  document.getElementById('letter').style.transform = 'translateY(-20px)';
  document.getElementById('openletter').style.transform = 'translateY(-20px)';
  document.getElementById('paper').style.transform = 'translateY(-20px)';
  setTimeout(letterfloat, 1000); 
  }
}

function foff() {
  document.getElementById('firstholder').style.opacity = 0;
  setTimeout(ily1, 1000); 
}

function foff() {
  document.getElementById('firstholder').style.opacity = 0;
  setTimeout(ily1, 1000); 
}

function ily1() {
  document.getElementById('first').style.opacity = 0;
  setTimeout(ily1done, 500); 
}

function ily1done() {
  document.getElementById('first').style.visibility = 'hidden';
}

function ilystart() {
 document.getElementById('dis').style.opacity = 0; 
 document.getElementById('diss').style.opacity = 0;
setTimeout(ily2, 1000); 
}

function ily2() {
 // document.getElementById('secondholder').style.opacity = 0;
 document.getElementById('portal').classList.remove("cursor"); 
 document.getElementById('portal').innerHTML = "";
 document.getElementById('portal').style.height = "100vh"; 
setTimeout(ily3, 1000); 
}

function ily3() {
 // document.getElementById('secondholder').style.opacity = 0; 
 document.getElementById('portal').style.width = "100vw"; 
 setTimeout(ily4, 1000); 
}

function ily4() {
  document.getElementById('second').style.opacity = 0;
  setTimeout(ily5, 3000); 
    setTimeout(ily6, 2000);
}

function ily5() {
  document.getElementById('second').style.visibility = 'hidden'; 
}

function ily6() {
  document.getElementById('third').style.opacity = 0;
  document.getElementById('fourth').style.opacity = 1;
  setTimeout(ily7, 2000); 
}

function ily7() {
  document.getElementById('fourth').style.opacity = 0;
  document.getElementById('paper').style.opacity = 1;
  setTimeout(ily8, 1000); 
}

function ily8() {
  motion=false;
  document.getElementById('paper').style.transition = 'transform 1s ease';
  document.getElementById('paper').style.transform = 'rotateY(90deg) scale(1.8,1.8) translateY(-50px)';
  document.getElementById('fifth').style.opacity = 0;
  setTimeout(ily9, 1050); 
}

function ily9(){
  document.getElementById('fifth').remove();
  document.getElementById('fourth').remove();
  document.getElementById('third').remove();
  document.getElementById('textletter').style.transform = 'rotateY(0deg) scale(1,1) translateY(0px)';
  document.getElementById('textletter').style.opacity = 1;
}

function PrevP(){
  if (order === "hold") { return false;}
  else if (order === "second") {
  order = "hold";
  document.getElementById('heart').style.transform = 'translateX(-190px)';
  document.getElementById('letterop').style.opacity = 0;
  document.getElementById('prev').style.opacity = 0;
  setTimeout(firstp, 1000);
  }
  else if (order === "third") {
  document.getElementById('heart').style.transform = 'translateX(0px)';
  document.getElementById('letterop').style.opacity = 0;
  document.getElementById('next').style.opacity = 0;
  setTimeout(secondp, 1000);
  setTimeout(bringp, 1000);
  }
  else {
    return false;
  }
}

function NextP(){
  if (order === "hold") { return false;}
  else if (order === "start") {
  order = "hold";
  document.getElementById('prev').style.visibility = 'visible';
  document.getElementById('prev').style.opacity = 1;
  document.getElementById('heart').style.transform = 'translateX(0px)';
  document.getElementById('letterop').style.opacity = 0;
  setTimeout(secondp, 1000);
  }
  else if (order === "second") {
  order = "hold";
  document.getElementById('heart').style.transform = 'translateX(190px)';
  document.getElementById('letterop').style.opacity = 0;
  document.getElementById('next').style.opacity = 0;
  setTimeout(thirdp, 1000);
  }
  else if (order === "third") {
  order = "push";
  document.getElementById('heart').style.transform = 'translateX(0px)';
  document.getElementById('letterop').style.opacity = 0;
  document.getElementById('buttons').style.opacity = 0;
  document.getElementById('r').style.borderRadius = '180px';
  document.getElementById('g').style.borderRadius = '180px';
  document.getElementById('g').innerHTML = "(ɔ◠‿◠)ɔ";
  setTimeout(switchbonus, 1000);
  }
  else {
    return false;
  }
}

function switchbonus(){
  document.getElementById('letterop').remove();
  document.getElementById('buttons').remove();
  document.getElementById('height').style.height = '100%';
  document.getElementById('g').style.marginLeft = '180px';
  document.getElementById('r').style.marginRight = '180px';
  setTimeout(pushback, 1000);
  setTimeout(goneletter, 2500);
}

function pinkworld(){
    document.getElementById('sixth').style.backgroundColor = 'black';
    document.getElementById('heart').style.opacity = 0;
    setTimeout(nextpink, 3000);
}

function goneletter(){
      document.getElementById('r').style.backgroundColor = '#d7ebff';
    document.getElementById('g').style.backgroundColor = '#d4cce8';
    document.getElementById('g').style.color = 'black';
   document.getElementById('r').style.color = 'black';
   document.getElementById('sixth').style.backgroundColor = 'rgba(0,0,0,0)';
    document.getElementById('textletter').style.backgroundColor = 'inherit';
    document.getElementById('textletter').style.borderColor = 'rgba(0,0,0,0)';
    setTimeout(pinkworld, 3000);
}

function nextpink(){
    const distance = getDistanceBetweenElements(document.getElementById("x"), document.getElementById("y"));
    document.getElementById('last').remove();
    document.getElementById('height').style.transition = 'opacity 2s ease,transform 2s ease'
    document.getElementById('height').style.transform = 'translateY(-' + distance + 'px)' ;
    document.getElementById('sixth').style.opacity = 0 ;
    setTimeout(removemess, 2000);
}

function removemess(){
           document.getElementById('sixth').remove();
           order = "bonus";
}

function pushback(){
  if (order === "push") {
  document.getElementById('g').style.marginLeft = '140px';
  document.getElementById('r').style.marginRight = '200px';
  setTimeout(push, 1000);
  }
}

function push(){
  if (order === "push") {
  document.getElementById('g').style.marginLeft = '200px';
  document.getElementById('r').style.marginRight = '140px';
  setTimeout(pushback, 1000);
  }
}

function firstp(){
   document.getElementById('letterop').innerHTML = " I love you. Whenever said by you it never failed to brighten my days and ease my nights, as much as you've reminded me of your love for me I'd like to remind you of your worth for me, you mean so much to me i could fill up hundreds of pages and i still wouldn't be able to express how thankful I am for your existence and how much you've helped me the past two years cause everytime I was down your playlists were what I played, everytime I was sad your messages were what cheered me up, and everytime I was broken your embrace was what I sought, you are truly my home and my safe place and I'm thankful for having you.<br/><br/> Day after day my appreciation for you grows, I meant it when I said I look up to you, you might not see it yourself but I get inspired by your every action from you being strong against your problems, being optimistic for me, to all the unconditional love you've given me, it all made me wanna be a better person for you, and for that I'm thankful. ";
  document.getElementById('letterop').style.opacity = 1;
  document.getElementById('prev').style.visibility = 'hidden';
  order = "start";
}

function secondp(){
   document.getElementById('letterop').innerHTML = "A lot has happened this past year, you've had many difficulties, struggles and bad days, I've watched you survive through every single one and I couldn't have been more proud of you.<br/><br/> Although you don't show it I'm sure you still have a lot of worries on your mind that you want to figure out by yourself, and you'll have more upcoming challenges thrown at you by life, as much as I believe in you to get through it all by yourself, I just want to remind you that you don't have to do it all alone.<br/><br/> Please lean on me and take a break whenever you need to. Take it one step at a time, one day at a time, don't compare your progress to anyone else's and don't care about what others say cause I'll be forever right by your side throughout your whole journey.";
  document.getElementById('letterop').style.opacity = 1;
  order = "second";
}

function bringp(){
    document.getElementById('next').innerHTML = "Next Part →";
    document.getElementById('next').style.backgroundColor = "#d7ebff";
    document.getElementById('next').style.opacity = 1;
}

function thirdp(){
    document.getElementById('next').innerHTML = "Bonus";
  document.getElementById('next').style.backgroundColor = "#ffd1dc";
    document.getElementById('next').style.opacity = 1;
   document.getElementById('letterop').innerHTML = "Hoping this year gets you closer to finding your place in this world, I already know that my place is right beside you. <br/> I wish you nothing but happiness and good health, happy birthday my angel I love you to heaven and back <3 ";
  document.getElementById('letterop').style.opacity = 1;
  order = "third";
}

function ily2done() {
  document.getElementById('second').style.opacity = 0;
  setTimeout(ily2end, 500); 
}

function ily2end() {
  document.getElementById('second').style.visibility = 'hidden';
}

function pongmenu() {
  document.getElementById('bonusmenu').style.visibility = "hidden";
  document.getElementById('hpl').style.visibility = 'visible';
  document.getElementById('hpl').style.opacity = 1;
  order = "ponging"
  setTimeout(ponging, 1100);
} 

function songmenu() {
  document.getElementById('bonusmenu').style.visibility = "hidden";
  document.getElementById('s').style.visibility = 'visible';
  document.getElementById('s').style.opacity = 1;
}

function exammenu() {
  document.getElementById('bonusmenu').style.visibility = "hidden";
  document.getElementById('ex').style.visibility = 'visible';
  document.getElementById('ex').style.opacity = 1;
}

var speed = 1;

function ponging(){
  if (order === "ponging") {
  document.getElementById('playerr').style.transition = 'margin ' + speed +'s linear';
  document.getElementById('playerg').style.transition = 'margin ' + speed +'s ease-in';
  document.getElementById('heartpong').style.transform = 'translateX(160px)';
  document.getElementById('playerr').style.marginLeft = '-20px';
  document.getElementById('playerg').style.marginRight = '30px';
  hearts += 1;
  if (speed >= 0.15) { speed -= 0.02;}
  document.getElementById('score').innerHTML = hearts;
  setTimeout(pongingback, speed * 1000);
  }
}

function pongingback(){
    if (order === "ponging") {
  document.getElementById('playerg').style.transition = 'margin ' + speed +'s linear';
  document.getElementById('playerr').style.transition = 'margin ' + speed +'s ease-in';
  document.getElementById('heartpong').style.transition = 'transform ' + speed +'s ease-in-out';
  document.getElementById('heartpong').style.transform = 'translateX(-160px)';
  document.getElementById('playerr').style.marginLeft = '30px';
  document.getElementById('playerg').style.marginRight = '-20px';
  hearts += 1;
  document.getElementById('score').innerHTML = hearts;
  setTimeout(ponging, speed * 1000);
  }
}

function closepong() {
  order = "stop";
  document.getElementById('bonusmenu').style.visibility = "visible";
  document.getElementById('hpl').style.opacity = 0;
  setTimeout(cptwo, 1000);
}

function closesong() {
  document.getElementById('bonusmenu').style.visibility = "visible";
  document.getElementById('s').style.opacity = 0;
  setTimeout(cstwo, 1000);
}

function closeexam() {
  document.getElementById('bonusmenu').style.visibility = "visible";
  document.getElementById('ex').style.opacity = 0;
  setTimeout(cetwo, 1000);
}

function cetwo() {
  document.getElementById('ex').style.visibility = "hidden";
  document.getElementById('bonusmenu').style.opacity = 1;
   order = "bonus";
}

function cstwo() {
  document.getElementById('s').style.visibility = "hidden";
  document.getElementById('bonusmenu').style.opacity = 1;
   order = "bonus";
}

function cptwo() {
  document.getElementById('hpl').style.visibility = 'hidden';
  document.getElementById('heartpong').style.transform = 'translateX(-190px)';
  document.getElementById('playerr').style.transform = 'translateX(0px)';
  document.getElementById('playerg').style.transform = 'translateX(0px)';
  document.getElementById('bonusmenu').style.opacity = 1;
  order = "bonus";
}

 function getPositionAtCenter(element) {
   const {top, left, width, height} = element.getBoundingClientRect();
   return {
     x: left + width / 2,
     y: top + height / 2
   };
 }

function getDistanceBetweenElements(a, b) {
  const aPosition = getPositionAtCenter(a);
  const bPosition = getPositionAtCenter(b);

  return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
}



function Bonus(a){
  if (order === "hold") { return false;}
  else if (a === "pong") {
    order = "hold"
  document.getElementById('bonusmenu').style.opacity = 0;
  setTimeout(pongmenu, 1000);
}
  else if (a === "songs") {
  order = "hold";
  document.getElementById('bonusmenu').style.opacity = 0;
  setTimeout(songmenu, 1000);
  }
  else if (a === "rem") {
  order = "hold";
  document.getElementById('bonusmenu').style.opacity = 0;
  setTimeout(exammenu, 1000);
  }
  else {
    return false;
  }
}
