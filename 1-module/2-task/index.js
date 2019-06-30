'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

function isValid (name) {
    if (name === null || name === undefined)  {
        return false
    }
    else if (typeof name === "string") {
        if (name.length<4 ||  name.indexOf(" ")!==-1 )  {
            return false
        } else return true
    } else {
        return true
    }
}
function sayHello () {
    let userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
        print('Welcome back, ' + userName + '!');
    } else {
        print('Некорректное имя');
    }
}


