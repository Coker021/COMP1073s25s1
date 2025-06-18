/* STEP 1: Initialize an array to hold the selected words */
/* Words already set in HTML */
let selectedWords = [null, null, null, null, null];

/*STEP 2: Select all word elements grouped by their respective column */
const columns = [
    document.querySelectorAll('.noun div p'),
    document.querySelectorAll('.adverb div p'),
    document.querySelectorAll('.phrase div p'),
    document.querySelectorAll('.animals div p'),
    document.querySelectorAll('.phrase1 div p')
];

/* STEP 3: Add references for the buttons and story display */
const buttons = document.querySelectorAll('.buttons > div > button');
const surpriseBtn = document.getElementById('surprise-button');
const playbackBtn = document.getElementById('playback-button');
const storyDisplay = document.getElementById('story');

let currentIndexes = [0, 0, 0, 0, 0]; /* To track the current index of each column */

/* STEP 4: Function to handle word selection */
/* Ensures only one word per column can be selected at a time */
function clearHighlights(columnIndex){
    columns[columnIndex].forEach(word => {
        word.classList.remove('highlight');
    });
}

/* STEP 5: Function to handle word selection */
/* Uses currentIndexes[columnIndex] to determine the current selection */
function selectWord(columnIndex){
    clearHighlights(columnIndex);
    const words = columns[columnIndex];
    const currentIndex = currentIndexes[columnIndex] % words.length; /* Cycles back to the top if the end of this list is reached */
    const word = words[currentIndex];
    word.classList.add('highlight');
    selectedWords[columnIndex] = word.textContent;
    currentIndexes[columnIndex]++;
}

/* STEP 6: Add event listeners to each of the 5 column buttons */
buttons.forEach((btn,i) =>{
    if(i < buttons.length) {
        btn.addEventListener('click', () => {
            selectWord(i);
        });
    }
});
