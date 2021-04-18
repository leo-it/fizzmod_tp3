const express = require('express')
const app = express()
const fs = require('fs')


/* app.use(express.urlencoded({
    extended: true
}))
app.use(express.json()) */

/* Servidor de recursos estáticos de express */
//app.use(express.static('public'))

/* ejercicio 1 */
app.get('/', function (req, res) {
    //console.log("ruta raiz");
    let hora = parseInt(new Date().toLocaleTimeString())
    //console.log(hora);
    if (hora >= 6 && hora <= 12) {
        res.json({
            saludo: 'buenois dias'
        })
    } else if (hora >= 13 && hora <= 19) {
        res.json({
            saludo: "buenois tardes"
        })
    } else {
        res.json({
            saludo: "buenois noches"
        })
    }
})



/* ejercicio 2 */
app.get('/random', (req, res) => {
    let array_elements = []
    let arr = [];
    let contador = 0;
    for (let i = 0; i < 1000; i++) {
        let random = Math.round(Math.random() * (20 - 1)) + 1;
        /*    res.json({random})*/
        array_elements.push(random)
    }
    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                arr.push({
                    number: current,
                    times: cnt
                })
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        arr.push({
            number: current,
            times: cnt
        })
    }
    res.send({
        ok: "random"
    })

    return console.log(arr);
})
/* ejercicio 3 */
console.log('ejercicio 3')
app.get('/info', async (req, res) => {
    res.send({
        ok: "Info"
    })
        try {
            //Leo un archivo
            let datos = await fs.promises.readFile('./package.json','utf-8')
            console.log('RD1 ok', datos)
    let info ={
        /* contenidoStr:JSON.stringify(JSON.parse(datos)) */
        contenidoStr: JSON.stringify(JSON.parse(datos)),
        contenidoObj: JSON.parse(datos),
        size: datos.length
    }
    console.log(info);
            //Escribo un archivo 
            await  fs.promises.writeFile('./info.txt', JSON.stringify(info,null,4)) 
            console.log('WR ok')
            }
        catch(error) {
            console.log(`Error: ${error}`)
        }
    }
    )



/* ejercicio 4 */

console.log("ejercicio 4");
app.get('/operaciones',  (req, res) => {
       let {url, method} = req 
    let datos = req.query
    
    
    console.log(datos)
    datos.num1=parseFloat(datos.num1)
    datos.num2=parseFloat(datos.num2)
    console.log(typeof(datos.num1));
    if( datos.num1==='number'){

     if(datos.operacion=="suma"){
            let result= parseFloat(datos.num1)+parseFloat(datos.num2)
            console.log(result);
            res.json({info:`Ruta ${method}`,url, method, datos, Resultado:`primer numero: ${datos.num1}, segundo numero: ${datos.num2} operacion:  ${datos.operacion}, resultado final: ${result}` })
    
        }else if(datos.operacion=="resta"){
            let result= parseFloat(datos.num1)-parseFloat(datos.num2)
            console.log(result);
            res.json({info:`Ruta ${method}`,url, method, datos, Resultado:`primer numero: ${datos.num1}, segundo numero: ${datos.num2} operacion:  ${datos.operacion}, resultado final: ${result}` })
        }else if(datos.operacion=="multiplicacion"){
            let result= parseFloat(datos.num1)*parseFloat(datos.num2)
            console.log(result);
            res.json({info:`Ruta ${method}`,url, method, datos, Resultado:`primer numero: ${datos.num1}, segundo numero: ${datos.num2} operacion:  ${datos.operacion}, resultado final: ${result}` })
        }else if(datos.operacion=="division"){
            let result= parseFloat(datos.num1)/parseFloat(datos.num2)
            console.log(result);
            res.json({info:`Ruta ${method}`,url, method, datos, Resultado:`primer numero: ${datos.num1}, segundo numero: ${datos.num2} operacion:  ${datos.operacion}, resultado final: ${result}` })
        }   /* else if(datos){
        res.json({info:`Ruta ${method}`,url, method, datos})
    } */
    }else{
        error: {
            num1:{datos.num1, typeof(datos.num1) }
            num1:{datos.num1, typeof(datos.num1) }
            operacion:{datos.operacion, typeof(datos.operacion)}
            }
    }

}
)
/* ------------------------------------------ */
app.get('*', (req,res) => {
    let { url, method } = req
    res.send(`<b>Ruta ${url} en método ${method} NO DEFINIDA</b>`)
})
/* ------------------------------------------ */
const PORT = process.env.PORT || 8080
app.set('PUERTO', PORT)

const server = app.listen(app.get('PUERTO'), () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en Servidor: ${error}`))