// IF sobre valores discretos de una sola variable
// if (x>5)
// if (x == 2 && y == 3)

/* let cargo // de tipo string (Gerente, Senior, Junior, Becario) Discreto es que tiene un numero limitado
cargo = 'Gerente'
cargo = 'Senior'
cargo = 'Junior'
cargo = ''
let bonus 



switch (cargo){
    case 'Gerente':// value
        bonus = 10000
        break
    case 'Senior':// value
        bonus = 1000
        break
    default:// value
        bonus = 0
        break      
}

console.log(`Tu bonus es ${bonus} €`) */
/* console.log(`Como eres${cargo} tu bonus es ${bonus} €`) *//*  Es una manera de interpolar más información */

/* let cargo // de tipo string (Gerente, Senior, Junior, Becario) Discreto es que tiene un numero limitado
cargo = 'Gerente' */
/* cargo = 'Senior'
cargo = 'Junior'
cargo = '' */
/* let bonus 

switch (cargo){
    case 'Gerente':// value
        bonus = 10000
        //break
    case 'Senior':// value
        bonus = 1000
       //break
    default:// value
        bonus = 0
        break      
}
console.log(`Tu bonus es ${bonus} €`) */

//Esto sucede al eliminar el break que te da de resultado 0 euros

// En Java, c#
// string name = 'Pepe'
// string nameMay = UpperCase(name) Esto son funciones de sistema


/* let array = []
array.push()

let name = 'Pepe'
name.tolowerCase() */

/* let user = {nombre : 'Pepe', edad: 25}
console.log(user.nombre) Tiene propiedades porque se la hemos creado nosotros/* */

/* let name = 'Pepe'
let nameMin = name.toLowerCase()
let nameMay = name.toUpperCase()
console.log(name, nameMin, nameMay) */

//Nuevo ejercicio


/* let cargo // de tipo string (Gerente, Senior, Junior, Becario) Discreto es que tiene un numero limitado
cargo = 'Gerente' 
cargo = 'Senior'
cargo = 'Junior'
cargo = ''
let bonus

switch (cargo.toLowercase){
    case 'director';
    case 'gerente'
        bonus = 10000
        break
    case 'senior':
        bonus = 1000
       break
    default:
        bonus = 0
        break      
}
console.log(`Tu bonus es ${bonus} €`) */ 

let cargo // de tipo string (Gerente, Senior, Junior, Becario) Discreto es que tiene un numero limitado
cargo = 'Gerente' 
cargo = 'Senior'
cargo = 'Junior'
cargo = ''
let bonus

if (cargo.toLowercase() == 'director' || cargo.toLowerCase() == 'gerente'){
        bonus = 10000
}else if (cargo.toLowerCase() == 'senior'){
    bonus=1000
}else {
    bonus = 0
}
    
}
console.log(`Tu bonus es ${bonus} €`) */