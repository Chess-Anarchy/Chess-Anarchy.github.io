const openPopupButton = document.getElementById('Home_button');
const aboutButton = document.getElementById('About_button');
const closePopupButton = document.getElementById('closePopup');
const popupContainer = document.getElementById('popupContainer');

const intro = document.getElementById("intro")
const pointer = document.getElementById("pointer")
const sentence = "Welcome to the website for anarchists with an interest in chess! We have everything you didn't want, need, or even ask for.".split("")
const sentence2 = "For example, this brickpipi calculator! (kinda broken rn) ->".split("")

//Handles the popup when pressing the home button
openPopupButton.addEventListener('click', function() {
    popupContainer.style.display = 'block';
});
closePopupButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
});
//*should* bring user to about page when About button is clicked (please work)
aboutButton.addEventListener('click', function() {
    window.location.href = "About.html";
})



//Displays the scrolling text
function wait(time) {
return new Promise(resolve => {
setTimeout(resolve, time);
});
}

async function displayText() {
    for (let i=0; i < sentence.length; i++) {
    intro.textContent = intro.textContent + sentence[i]
    await wait(20)
    }
}

async function displayText2() {
    await wait(20 * parseInt(sentence.length))
    await wait(1000)
    for (let i=0; i < sentence2.length; i++) {
    pointer.textContent = pointer.textContent + sentence2[i]
    await wait(20)
    }
}


displayText();
displayText2();