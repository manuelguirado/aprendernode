import {join} from 'node:path'
import fs from 'node:fs/promises'; 

async function modifyFile() {
    try {

        const fromPath = join ("./archivo.json")
         let data = await fs.readFile(fromPath, 'utf8')
        if (!data) {
            data = '{}'

        }
        let jsonData;
        try{
            jsonData = JSON.parse(data)
        }catch(err){
            console.warn(err)
            jsonData = {}
        }

        jsonData.hola = 'mundo'
        await fs.writeFile(fromPath, JSON.stringify(jsonData, null, 2),"utf-8")
        console.log(`File modified: ${fromPath}`)
    }catch(err){
        console.error(err)
    }
}
modifyFile()