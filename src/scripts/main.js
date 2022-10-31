'use strict';
// TASK!!
// Ми маємо масив рядків arr.Потрібно отримати відсортовану копію, але залишити arr незміненим.

// Створіть функцію copySorted(arr), яка повертатиме таку копію.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без змін)

function copySorted(arr) {
    let copyArr = arr.map(item => item.toString());
    
    console.log(arr)
    console.log(copyArr.sort((a, b) => a.localeCompare(b)))
    return copyArr.sort((a, b) => a.localeCompare(b));
}

copySorted([4, 2, -5, 'zz'])