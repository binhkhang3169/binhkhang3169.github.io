var strokesLeftBottom = $("#LeftBottomGroup_1_ path[id^=Stroke]")
  .toArray()
  .reverse();
var strokesLeftTop = $("#LeftTopGroup_1_ path[id^=Stroke]").toArray().reverse();
var strokesRightBottom = $("#RightBottomGroup_1_ path[id^=Stroke]")
  .toArray()
  .reverse();
var strokesRightTop = $("#RightTopGroup_1_ path[id^=Stroke]")
  .toArray()
  .reverse();

var stemGroup1 = [
  "#Stem2_1_",
  "#Stem3_1_",
  "#Stem4_1_",
  "#Stem5a_1_",
  "#Stem5b_1_",
  "#Stem6_1_",
  "#Stem7a_1_",
  "#Stem7b_1_",
  "#Stem7c_1_",
  "#Stem8_1_",
];
var stemGroup2 = [
  "#Stem17_1_",
  "#Stem18_1_",
  "#Stem19_1_",
  "#Stem20a_1_",
  "#Stem20b_1_",
  "#Stem21_1_",
  "#Stem22a_1_",
  "#Stem22b_1_",
  "#Stem22c_1_",
  "#Stem23_1_",
];
var stemGroup3 = ["#Stem10_1_", "#Stem11_1_", "#Stem12a_1_", "#Stem12b_1_"];
var stemGroup4 = ["#Stem26_1_", "#Stem27_1_", "#Stem28a_1_", "#Stem28b_1_"];
var stemGroup5 = ["#Stem13a_1_", "#Stem13b_1_", "#Stem13c_1_"];
var stemGroup6 = ["#Stem29a_1_", "#Stem29b_1_", "#Stem29c_1_"];
var stemVarsFrom = { drawSVG: "0% 0%", autoAlpha: 1 };
var stemVarsTo = { drawSVG: "0% 100%", duration: 2, stagger: 0.5 };

var leafGroup1 = ["#Leaf2_1_", "#Leaf17_1_"];
var leafGroup2 = ["#Leaf4_1_", "#Leaf5a_1_", "#Leaf5b_1_"];
var leafGroup3 = ["#Leaf19_1_", "#Leaf20a_1_", "#Leaf20b_1_"];
var leafGroup4 = ["#Leaf11_1_", "#Leaf12a_1_", "#Leaf12b_1_"];
var leafGroup5 = ["#Leaf27_1_", "#Leaf28a_1_", "#Leaf28b_1_"];
var leafGroup6 = ["#Leaf13a_1_", "#Leaf13b_1_", "#Leaf13c_1_"];
var leafGroup7 = ["#Leaf29a_1_", "#Leaf29b_1_", "#Leaf29c_1_"];

var budGroup1 = ["#Bud3_1_", "#Bud6_1_"];
var budGroup2 = ["#Bud18_1_", "#Bud21_1_"];
var budGroup3 = ["#Bud7a_1_", "#Bud7b_1_", "#Bud7c_1_", "#Bud8_1_"];
var budGroup4 = ["#Bud22a_1_", "#Bud22b_1_", "#Bud22c_1_", "#Bud23_1_"];
var budGroup5 = ["#Bud10_1_", "#Bud26_1_"];

var dots = $("#Dots_1_");

var tl = gsap
  .timeline()
  .set("#Footer_group_1_", { autoAlpha: 1 })
  .fromTo(
    ["#Stem16_1_", "#Stem1_1_"],
    { drawSVG: "0% 0%" },
    { duration: 1.5, drawSVG: "0% 100%" },
    "start"
  )
  .fromTo(
    "#BaseGroup16_1_ path",
    { autoAlpha: 1, scale: 0, transformOrigin: "-10% 130%" },
    { duration: 1, scale: 1 },
    1.2,
    "flower1"
  )
  .fromTo(
    "#PinkFlowerGroup16_1_",
    { autoAlpha: 1, scale: 0, transformOrigin: "35% 110%" },
    { duration: 2, scale: 1 },
    "flower1-=0.55"
  )
  .fromTo(
    "#BaseGroup1_1_ path",
    { autoAlpha: 1, scale: 0, transformOrigin: "90% 130%" },
    { duration: 1, scale: 1 },
    1.2,
    "flower1"
  )
  .fromTo(
    "#PinkFlowerGroup1_1_",
    { autoAlpha: 1, scale: 0, transformOrigin: "65% 110%" },
    { duration: 2, scale: 1 },
    "flower1-=0.55"
  )
  .fromTo(
    ["#Stem9_1_", "#Stem25_1_"],
    { drawSVG: "0% 0%", autoAlpha: 1 },
    { duration: 2, drawSVG: "0% 100%" },
    "flower1+=0.5"
  )
  .fromTo(
    "#BaseGroup9_1_ path",
    { autoAlpha: 1, scale: 0, transformOrigin: "-10% 130%" },
    { duration: 1, scale: 1 },
    "flower2-=0.5"
  )
  .fromTo(
    "#PinkFlowerGroup9_1_",
    { autoAlpha: 1, scale: 0, transformOrigin: "5% 110%" },
    { duration: 2, scale: 1 },
    "flower2"
  )
  .fromTo(
    "#BaseGroup25_1_ path",
    { autoAlpha: 1, scale: 0, transformOrigin: "105% 130%" },
    { duration: 1, scale: 1 },
    "flower2-=0.5"
  )
  .fromTo(
    "#PinkFlowerGroup25_1_",
    { autoAlpha: 1, scale: 0, transformOrigin: "95% 110%" },
    { duration: 2, scale: 1 },
    "flower2"
  )

  //stems
  .fromTo(stemGroup1, stemVarsFrom, stemVarsTo, "start+=0.1")
  .fromTo(stemGroup2, stemVarsFrom, stemVarsTo, "start+=0.1")
  .fromTo(stemGroup3, stemVarsFrom, stemVarsTo, "flower2-=1.5")
  .fromTo(stemGroup4, stemVarsFrom, stemVarsTo, "flower2-=1.5")
  .fromTo(stemGroup5, stemVarsFrom, stemVarsTo, "flower3-=1")
  .fromTo(stemGroup6, stemVarsFrom, stemVarsTo, "flower3-=1")

  //leaves
  .fromTo(
    leafGroup1,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["80% 45%", "20% 45%"]),
    },
    { duration: 2, scale: 1 },
    "flower1-=1"
  )
  .fromTo(
    leafGroup2,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["80% 25%", "60% 35%", "70% 75%"]),
    },
    { duration: 2, stagger: 0.5, scale: 1 },
    "flower1"
  )
  .fromTo(
    leafGroup3,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["20% 25%", "40% 35%", "30% 75%"]),
    },
    { duration: 2, stagger: 0.5, scale: 1 },
    "flower1"
  )
  .fromTo(
    leafGroup4,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["90% 70%", "100% 100%", "0% 90%"]),
    },
    { duration: 2, stagger: 0.5, scale: 1 },
    "flower2"
  )
  .fromTo(
    leafGroup5,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["10% 70%", "0% 100%", "100% 90%"]),
    },
    { duration: 2, stagger: 0.5, scale: 1 },
    "flower2"
  )
  .fromTo(
    leafGroup6,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["0% 90%", "10% 50%", "70% 60%"]),
    },
    { duration: 2, stagger: 0.5, scale: 1 },
    "flower3"
  )
  .fromTo(
    leafGroup7,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["100% 90%", "90% 50%", "30% 60%"]),
    },
    { duration: 2, stagger: 0.5, scale: 1 },
    "flower3"
  )

  //buds
  .fromTo(
    budGroup1,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["220% -10%", "55% 100%"]),
    },
    { duration: 2, scale: 1, stagger: 2.75 },
    "flower1-=0.75"
  )
  .fromTo(
    budGroup2,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["-120% -10%", "45% 100%"]),
    },
    { duration: 2, scale: 1, stagger: 2.75 },
    "flower1-=0.75"
  )
  .fromTo(
    budGroup3,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap([
        "10% 110%",
        "0% 100%",
        "0% 100%",
        "80% 100%",
      ]),
    },
    { duration: 2, scale: 1, stagger: 0.5 },
    "flower2"
  )
  .fromTo(
    budGroup4,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap([
        "90% 110%",
        "100% 100%",
        "100% 100%",
        "20% 100%",
      ]),
    },
    { duration: 2, scale: 1, stagger: 0.5 },
    "flower2"
  )
  .fromTo(
    budGroup5,
    {
      autoAlpha: 1,
      scale: 0,
      transformOrigin: gsap.utils.wrap(["-50% 120%", "150% 120%"]),
    },
    { duration: 2, scale: 1 },
    "flower2-=0.5"
  )

  //strokes
  .fromTo(
    strokesLeftBottom,
    stemVarsFrom,
    { drawSVG: "0% 100%", duration: 2, stagger: 1 },
    1
  )
  .fromTo(
    strokesRightBottom,
    stemVarsFrom,
    { drawSVG: "0% 100%", duration: 2, stagger: 1 },
    1
  )
  .fromTo(
    strokesLeftTop,
    stemVarsFrom,
    { drawSVG: "0% 100%", duration: 2, stagger: 1 },
    "flower1+=0.5"
  )
  .fromTo(
    strokesRightTop,
    stemVarsFrom,
    { drawSVG: "0% 100%", duration: 2, stagger: 1 },
    "flower1+=0.5"
  )

  //dots
  .fromTo(
    dots,
    6,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Expo.easeOut },
    "flower3+=1"
  )
  .fromTo(
    dots,
    5,
    { scale: 0, transformOrigin: "50% 50%" },
    { scale: 1, ease: Expo.easeOut },
    "flower3"
  );
  const playerButton = document.querySelector('.player-button'),
  audio = document.querySelector('audio'),
  timeline = document.querySelector('.timeline'),
  soundButton = document.querySelector('.sound-button'),
  playIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
  `,
  pauseIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
  `,
  soundIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
<path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
</svg>`,
  muteIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
<path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>`;

function toggleAudio () {
if (audio.paused) {
audio.play();
playerButton.innerHTML = pauseIcon;
} else {
audio.pause();
playerButton.innerHTML = playIcon;
}
}

playerButton.addEventListener('click', toggleAudio);

function changeTimelinePosition () {
const percentagePosition = (100*audio.currentTime) / audio.duration;
timeline.style.backgroundSize = `${percentagePosition}% 100%`;
timeline.value = percentagePosition;
}

audio.ontimeupdate = changeTimelinePosition;

function audioEnded () {
playerButton.innerHTML = playIcon;
}

audio.onended = audioEnded;

function changeSeek () {
const time = (timeline.value * audio.duration) / 100;
audio.currentTime = time;
}

timeline.addEventListener('change', changeSeek);

function toggleSound () {
audio.muted = !audio.muted;
soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
}

soundButton.addEventListener('click', toggleSound);