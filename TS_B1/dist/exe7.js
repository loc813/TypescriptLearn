"use strict";
function guessNumber() {
    let randoomNumber = Math.floor(Math.random() * 10);
    let attempts = 3;
    while (attempts > 0) {
        let userGuess = prompt("Game doan so (ban chi co 3 lan thu):");
        if (userGuess === null) {
            console.log("Game Crash!!!");
            return;
        }
        let guess = Number(userGuess);
        if (guess === randoomNumber) {
            alert("Chuc mung ban da doan dung ban co to chat cua mot con bac !!!!");
            return;
        }
        else if (guess > randoomNumber) {
            alert("Ban doan so hoi cao hay tin vao ong ba va thu lai !!!");
        }
        else {
            alert("Ban doan so qua thap hay tin vao ong ba va thu lai !!!");
        }
        attempts--;
        if (attempts > 0) {
            alert(`Ban con ${attempts} luot hay dat chon niem tin vao ong ba va may man cua ban de thu lai !!!`);
        }
        else {
            alert("Ban da thua. Nhung con bac ma dung lai la that bai nen hay thu lai voi van may cua ban va go lai !!! Good Luck!!!");
        }
    }
}
guessNumber();
