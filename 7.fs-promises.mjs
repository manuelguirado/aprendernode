import {readFile} from 'node:fs/promises';
Promise.all([
    readFile('archivo.txt', 'utf8'),
]).then(([data]) => {
    console.log(data)
}).catch((err) => {
    console.error(err)
})