// Пользователь вводит строку кириллицей разного регистра.
// Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].


const str = 'КаЖдЫй ОхОтНиК';

function changeRegister (str) { 
    let result = [];
    let arr = str.split('');
    arr.forEach(element => {
        let up = element.toUpperCase();
        let low = element.toLowerCase();
        if (element == up)
            result.push(low)
        else
            result.push(up);       
    });
    return result;
}

console.log(changeRegister(str));