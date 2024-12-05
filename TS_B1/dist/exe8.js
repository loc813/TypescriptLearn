"use strict";
const color = ["red", "blue", "green", "yellow", "orange", "violet", "white", "black", "pink", "purple"];
function randomColor() {
    const randomIndex = Math.floor(Math.random() * color.length);
    return color[randomIndex];
}
function colorTrace(msg) {
    const colors = randomColor();
    console.log("%c" + msg, "color:" + colors + ";font-weight:bold;");
}
colorTrace("Test Me");
colorTrace("Hello World");
colorTrace("I feelling good!!!");
