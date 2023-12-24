/**
 * 
 * Introduction
You find a strange mirror that always shows a hand that is moving. The hand appears to be alive, and after a lot of questions of "yes" and "no" answer, you know that the hand is trying to teach you a program that is written in HPL (Hand Programming Language).

This language works with a memory of an indefinite size of bytes, with all values initialized to 0. This language haves 7 instructions:

👉 : moves the memory pointer to the next cell

👈 : moves the memory pointer to the previous cell

👆 : increment the memory cell at the current position

👇 : decreases the memory cell at the current position.

🤜 : if the memory cell at the current position is 0, jump just after the corresponding 🤛

🤛 : if the memory cell at the current position is not 0, jump just after the corresponding 🤜

👊 : Display the current character represented by the ASCII code defined by the current position.

Notes:
As memory cells are bytes, from 0 to 255 value, if you decrease 0 you'll get 255, if you increment 255 you'll get 0.
Loops of 🤜 and 🤛 can be nested.
Tests
The hand shows you two small programs and their outputs:

This program display "Hello"
👇🤜👇👇👇👇👇👇👇👉👆👈🤛👉👇👊👇🤜👇👉👆👆👆👆👆👈🤛👉👆👆👊👆👆👆👆👆👆👆👊👊👆👆👆👊

This program (with nested loops) display "Hello World!"
👉👆👆👆👆👆👆👆👆🤜👇👈👆👆👆👆👆👆👆👆👆👉🤛👈👊👉👉👆👉👇🤜👆🤛👆👆👉👆👆👉👆👆👆🤜👉🤜👇👉👆👆👆👈👈👆👆👆👉🤛👈👈🤛👉👇👇👇👇👇👊👉👇👉👆👆👆👊👊👆👆👆👊👉👇👊👈👈👆🤜👉🤜👆👉👆🤛👉👉🤛👈👇👇👇👇👇👇👇👇👇👇👇👇👇👇👊👉👉👊👆👆👆👊👇👇👇👇👇👇👊👇👇👇👇👇👇👇👇👊👉👆👊👉👆👊

Challenge
The file "input.hand" is the code of the program

Good luck!
 */

const MIN_CELL = 0;
const MAX_CELL = 255;

const clamp = (value, min, max) => {
    if (value < min) {
        return max;
    }
    if (value > max) {
        return min;
    }
    return value;
}

function translate(input) {
    const memory = [0]

    let pointer = 0;
    let index = 0;
    let output = '';

    const arrayFromInput = Array.from(input);

    const actions = {
        '👉': () => pointer++,
        '👈': () => pointer--,
        '👆': () => {
            memory[pointer] = memory[pointer] === MAX_CELL ? MIN_CELL : memory[pointer] + 1;
        },
        '👇': () => {
            memory[pointer] = memory[pointer] === MIN_CELL ? MAX_CELL : memory[pointer] - 1;
        },
        '🤜': () => {
            if (memory[pointer] === MIN_CELL) {
                let count = 1;
                let i = index + 1;
                while (arrayFromInput.length > i) {
                    const action = arrayFromInput[i];
                    if (action === '🤜') {
                        count++;
                    } else if (action === '🤛') {
                        count--;
                    }
                    if (count === 0) {
                        index = i;
                        break;
                    }
                    i++;
                }

            }
        },
        '🤛': () => {
            if (memory[pointer] !== MIN_CELL) {
                let count = 1;
                let i = index - 1;
                while (i >= 0) {
                    const action = arrayFromInput[i];
                    if (action === '🤜') {
                        count--;
                    } else if (action === '🤛') {
                        count++;
                    }
                    if (count === 0) {
                        index = i;
                        break;
                    }
                    i--;
                };
            }
        },
        '👊': () => {

            output += String.fromCharCode(memory[pointer]);
        }
    }

    while (index < arrayFromInput.length) {
        const action = arrayFromInput[index];
        actions[action]();
        index++;
    }

    console.log("output:", output)
    return output;
}

export {
    translate
};

