'use strict';
// TASK!!
// Ми маємо масив рядків arr.Потрібно отримати відсортовану копію, але залишити arr незміненим.

// Створіть функцію copySorted(arr), яка повертатиме таку копію.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без змін)

function copySorted(arr) {
    let copyArr = [...arr];
    console.log(arr)
    console.log(copyArr)
    return copyArr.sort((a, b) => a - b);
}

copySorted([-5,53,65,-95,94,-1,1,4])