var currenyaudio;
const switchFullscreen = document.querySelector(".fullscreen");
const arrayNotes = ["c", "d", "e", "f", "g", "a", "b", "c#", "d#", "", "f#", "g#", "a#"];
const arrayLetters = ["D", "F", "G", "H", "J", "K", "L", "R", "T", "", "U", "I", "O"];
const btnActive = "btn-active";
const pianoKey = document.getElementsByClassName('piano-key');
const pianoKey1 = document.querySelectorAll('.piano-key');
const buttons = document.querySelectorAll('.btn');

window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if (!audio) return;
    currenyaudio = audio;
    audio.currentTime = 0;
    audio.play();
    changeAtiveBotton();

})
/*при нажатии мышки*/

var keys = document.querySelectorAll('.piano-key');
keys.forEach(key => {
    key.addEventListener('mouseover', playNote);
    key.addEventListener('click', playNote);

})
var keys = document.querySelectorAll('.button');
keys.forEach(key => {
    key.addEventListener('mouseover', playNote);

})
/*при нажатии мышки*/
function playNote(e) {
    if (e.buttons == 1 || e.type == "click") {
        console.log(e.toElement.innerText);
        const audio = document.querySelector(`audio[data-key="${"Key" + e.toElement.attributes[1].value}"]`);
        currenyaudio = audio;
        audio.currentTime = 0;
        audio.play();
        changeAtiveBotton();
    }
}
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if (!audio) return;
    currenyaudio = audio;
    audio.currentTime = 0;
    audio.play();
    changeAtiveBotton();
})
function changeNotesLaters() {
    console.log()
}
buttons.forEach(key => {
    key.addEventListener('click', changeNotesLaters);
    function changeNotesLaters(e) {
        e.toElement.className.includes(btnActive);
        buttons[0].classList.toggle(btnActive);
        buttons[1].classList.toggle(btnActive);
        if (e.target.innerText == "Letters") {
            toogleLettersNotes(arrayLetters);
        } else { toogleLettersNotes(arrayNotes); }

    }
})
function toogleLettersNotes(arr) {
    for (let i = 0; i < pianoKey.length; i++) {
        if (pianoKey[i].getAttribute('data-note') !== null) {
            pianoKey[i].setAttribute("data-note", arr[i])
        }
        else { }
    }
}
function removeTransition(e) {
    if (e.propertyName !== "box-shadow") return;
    this.classList.remove('playing');
}
function changeAtiveBotton() {
    let nameKey = currenyaudio.getAttribute('data-key').replace("Key", "");
    let currentItem = document.querySelector(`div[data-letter="${nameKey}"]`);
    currentItem.classList.add("playing");
    pianoKey1.forEach(key => key.addEventListener('transitionend', removeTransition))
}

switchFullscreen.addEventListener('click', switchFullscrean);

function switchFullscrean() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else {
        if (document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }
}
