/* driven by the use of a modern regime */
"use strict";

/**
 * Used for creating ASCII chessboard of size * size characters starting w/ '*'
 *
 * @param {number|string} size - chessboard size
 * @returns {string|null} - resulting chessboard
 */

// using let instead of var, 'cause it's been outdated
let chess = (size) => {
    if (!(size >= 2 && Number.isInteger(+size))) {
        return null;
    }

    let board = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            board += (i + j) % 2 === 0 ? '*' : ' ';
        }
        board += '\n';
    }

    return board;
};
