const express = require('express')
const app = express()

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

/* Servidor de recursos estáticos de express */
//app.use(express.static('public'))

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

app.get('/info', (req, res) => {
    res.json({
        ok: "info"
    })
})


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


const PORT = process.env.PORT || 8080
app.set('PUERTO', PORT)

const server = app.listen(app.get('PUERTO'), () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en Servidor: ${error}`))