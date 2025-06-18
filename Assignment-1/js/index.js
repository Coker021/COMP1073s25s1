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
