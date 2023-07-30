let list = [1, 2, 3, 4, 5]

function getList(list) {
    for (item of list) {
        console.log(item)
    }
}

function addList(list, data, callback) {
    setTimeout(() => {
        list.push(data)
        callback(list)
    }, 2000);
}

addList(list, 89, getList);