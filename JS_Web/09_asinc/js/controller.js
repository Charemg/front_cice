export function controller (){
    
    console.log('Cargado el controller')
    
    setTimeout(saludar,1000) //esto dice 1 segundos en ese momento se ejecutara la funcion saludar

function saludar(){
    console.log('Hola amigo')
}
//setTimeout(()=>console.log('Item 3'), 2000)
}

