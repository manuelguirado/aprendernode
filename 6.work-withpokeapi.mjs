import {join} from 'node:path';
import fs from 'node:fs/promises';
async function addApiToJson() {
    try{

        const fromPath = join ("./pokeapi.json")
         let data = await fs.readFile(fromPath, 'utf8')
        if (!data) {
            data = '{}'

        }else{
            console.log("File exists or ")
        }
        let jsonData;
        try{
            jsonData = JSON.parse(data)
        }catch(err){
            console.warn(err)
            jsonData = {}
        }
        const callApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
        const dataApi = await callApi.json()
        jsonData.pokemons = dataApi.results
    
        await fs.writeFile(fromPath, JSON.stringify(jsonData, null, 2),"utf-8")
        console.log(`File modified: ${fromPath}`)
    }catch(err){
        console.error(err) 
    }
}
addApiToJson()