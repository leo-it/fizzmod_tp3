export async function operaciones(req, res) {
    let {
        url,
        method
    } = req
    let datos = req.query
    datos.num1 = parseFloat(datos.num1)
    datos.num2 = parseFloat(datos.num2)
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

                Resultado: resultado
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

}