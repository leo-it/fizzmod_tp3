import { json } from "express";

export function saludo(){
    let hora = parseInt(new Date().toLocaleTimeString())

if (hora >= 6 && hora <= 12) {
    
        return "buenos dias"

} else if (hora >= 13 && hora <= 19) {

  console.log("buenois tardes"); 
       return "buenas tardes"
} else {
    return "buenas noches"
}
}