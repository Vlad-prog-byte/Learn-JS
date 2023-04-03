// 3. ДЗ 3 (со звездочкой):
// Создать страничку с текстовым полем.
// После загрузки странички, загрузить список городов при помощи AJAX.
// При вводе текста в тестовое поле, выводить под текстовым полем список тех городов, в названиях которых есть введенный текст.
// Использование промисов обязательно.
// Запрещено использование любых библиотек (включая jQuery) и фреймворков.



let input = document.querySelector('.input');
let button = document.querySelector('.button');
let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
let list;
let container = document.querySelector('.finder');

function download(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', event => resolve(xhr.response));
        xhr.send();
    })
}

function clearElement(element) {
    let child = element.lastElementChild;
    while(child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function findData(text, list) {
    let result = [];
    list.forEach(value => {
        let index = value.toLowerCase().indexOf(text.toLowerCase());
        if (index != -1)
            result.push(value);
    });
    return result;
}

function addElements(element, list) {
    list.forEach(value => {
        let div = document.createElement('div');
        div.innerText = value;
        element.append(div);
    });
}

button.addEventListener('click', (event) => {
    download(url).then( (data) => {
        let result = [];
        data.forEach(value => result.push(value.name));
        list = result;
        input.disabled='';
    })
})

input.addEventListener('input', (event) => {
    // console.log('begin', document.body.children);
    let element = event.target;
    let text = element.value;
    clearElement(container);
    // console.log('after clean', document.body.children);
    let finder = findData(text, list);
    addElements(container, finder);
    // console.log('after add elements', document.body.children);
    console.log();
})



