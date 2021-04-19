import express from "express"
const app = express()
import {
    saludo
} from './public/js/raiz.js'
import {
    random
} from './public/js/random.js'
import {
    info
} from './public/js/info.js'
import {
    operaciones
} from './public/js/operaciones.js'

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
app.get('/info', async (req, res) => {

    res.send({
        ok: info()
    })

})

/*-------------------- ejercicio 4 -----------------*/
app.get('/operaciones', (req, res) => {
    operaciones(req, res)
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