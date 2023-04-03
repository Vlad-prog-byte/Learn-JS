// 2. # ДЗ - 2

// Создать модуль, который экспортирует функцию `deleteTextNodes`
// Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
// Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.


function deleteTextNodes(container) {
    let nodes = container.childNodes;
    nodes.forEach(node => {
        if (node.nodeType == 3)
            node.remove()
    })
}