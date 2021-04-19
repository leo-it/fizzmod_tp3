import express from "express"
const app = express()
import fs from 'fs'
/*  import {} from './public/js/operaciones.js'
 */
import {saludo} from './public/js/raiz.js'
import {random} from './public/js/random.js'

/*------------------- ejercicio 1 ------------------------*/
app.get('/', function (req, res) {
    res.send({
        saludo: saludo()
    })
})

/*---------------------- ejercicio 2 ----------------------*/
app.get('/random', (req, res) => {

    res.send({
        ok: random()
    })
   
})
/*------------------- ejercicio 3 -----------------------*/
console.log('ejercicio 3')
app.get('/info', async (req, res) => {
    res.send({
        ok: "Info"
    })
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
})



/*-------------------- ejercicio 4 -----------------*/

console.log("ejercicio 4");
app.get('/operaciones', (req, res) => {
    let {
        url,
        method
    } = req
     let datos = req.query
    datos.num1 = parseFloat(datos.num1)
    datos.num2 = parseFloat(datos.num2)
    /* error object */
    let err = {
        num1: {
            valor: datos.num1,
            tipo: typeof (datos.num1)
        },
        num2: {
            valor: datos.num2,
            tipo: typeof (datos.num2)
        },
        operacion: {
            valor: datos.operacion,
            tipo: typeof (datos.operacion)
        }
    }
    if (isNaN(datos.num1) || datos.num1 == "null" || isNaN(datos.num2) || datos.num2 == "null") {
        res.json({
            error: err
        })
    } else {
        if (datos.operacion == "suma") {
            let resultado = {
                num1: {
                    valor: datos.num1
                },
                num2: {
                    valor: datos.num2
                },
                operacion: {
                    valor: datos.operacion
                },
                resultado: {
                    valor: datos.num1 + datos.num2
                }
            }
            res.json({
               
                Resultado: resultado
            })

        } else if (datos.operacion == "resta") {
            let resultado = {
                num1: {
                    valor: datos.num1
                },
                num2: {
                    valor: datos.num2
                },
                operacion: {
                    valor: datos.operacion
                },
                resultado: {
                    valor: datos.num1 - datos.num2
                }
            }
            res.json({
                Resultado: resultado
            })
        } else if (datos.operacion == "multiplicacion") {
            let resultado = {
                num1: {
                    valor: datos.num1
                },
                num2: {
                    valor: datos.num2
                },
                operacion: {
                    valor: datos.operacion
                },
                resultado: {
                    valor: datos.num1 * datos.num2
                }
            }
            res.json({
               
                Resultado:resultado
            })
        } else if (datos.operacion == "division") {
            let resultado = {
                num1: {
                    valor: datos.num1
                },
                num2: {
                    valor: datos.num2
                },
                operacion: {
                    valor: datos.operacion
                },
                resultado: {
                    valor: datos.num1 / datos.num2
                }
            }
            res.json({
               
                Resultado: resultado
            })
        } else {
            res.json({
                error: err
            })

        }

    }




})
/* ------------------------------------------ */
app.get('*', (req, res) => {
    let {
        url,
        method
    } = req
    res.send(`<b>Ruta ${url} en método ${method} NO DEFINIDA</b>`)
})
/* ------------------------------------------ */
const PORT = process.env.PORT || 8080
app.set('PUERTO', PORT)

const server = app.listen(app.get('PUERTO'), () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en Servidor: ${error}`))