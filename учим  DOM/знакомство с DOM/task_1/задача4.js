// 4. # ДЗ - 4 (со звездочкой)

// Создать модуль, который экспортирует функцию `scanDOM`.
// `scanDOM` должна перебирать все узлы на странице и выводить в консоль статистику по элементам и классам на странице. Например:
// Тэгов div: 10
// Тэгов a: 5
// Тэгов span: 10
// Текстовых узлов: 100
// Элементов с классом c1: 10
// Элементов с классом c2: 20

// Количеств и название классов/тегов заранее неизвестно. Функция сама должна определить количество и название тегов/классов.



function findTextNodes(container) {
    let nodes = container.childNodes;
    nodes.forEach(node => {
        if (node.nodeType == 3)
            node.remove()
    })
    nodes.forEach(element => {
        if (element.nodeType == 1 && element.childNodes.length != 1)
            deleteTextNodes(element);
    })
}

function scanDOM() {
    let begin = document.dody;
    let countTextNode = 0;


    countTextNode = findTextNodes(begin);
    function findTextNodes(container) {
        let nodes = container.childNodes;
        nodes.forEach(node => {
            if (node.nodeType == 3)
                countTextNode++;
        })
        nodes.forEach(element => {
            if (element.nodeType == 1 && element.childNodes.length != 1)
                findTextNodes(element);
        })
    }
    
    console.log('Текстовых узлов: ', countTextNode);
}

scanDOM();