import { rename } from 'node:fs/promises'
import { join } from 'node:path'
async function  moveFile(from,to) {
    try{
        await rename(from,to)
        console.log(`File moved to:  ${from} to ${to}`)  
    }catch(err){
        console.error(err)
    }
    
}

const fromPath = join ("./archivo.txt")
const destPath = join( "./mjs/archivo.txt")
moveFile(fromPath, destPath)
