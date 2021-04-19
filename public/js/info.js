import fs from 'fs'

export async function info(){
    try {
        //Leo un archivo
        let datos = await fs.promises.readFile('./package.json', 'utf-8')
        console.log('RD1 ok', datos)
        let info = {
            /* contenidoStr:JSON.stringify(JSON.parse(datos)) */
            contenidoStr: JSON.stringify(JSON.parse(datos)),
            contenidoObj: JSON.parse(datos),
            size: datos.length
        }
        console.log(info);
        //Escribo un archivo 
        await fs.promises.writeFile('./info.txt', JSON.stringify(info, null, 4))
        console.log('WR ok')
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}