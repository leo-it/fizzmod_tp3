const fs = require('fs')


console.log('Inicio del programa')
;(async () => {
    try {
        //Leo un archivo en forma asincrónica
        let datos = await fs.promises.readFile('../datos.txt','utf-8')
        console.log('RD1 ok', datos, datos.length)

        //Escribo un archivo en forma asincrónica
        await fs.promises.writeFile('../datos.txt', new Date().toLocaleString())
        console.log('WR ok')
        
        //Leo un archivo en forma asincrónica
        datos = await fs.promises.readFile('../datos.txt','utf-8')
        console.log('RD2 ok', datos, datos.length)
    }
    catch(error) {
        console.log(`Error en operación asincrónica de fs: ${error}`)
    }
})()
