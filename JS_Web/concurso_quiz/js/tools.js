
/**
 * Programa que compruebe si un nombre ha sido usado alguna vez por un rey de España
 */

 /**
  * Function isRey
  * @name : string
  * @return:  boolean 
  */

  function isRey (name) {
    let reyes = [ 'Fernando', 'Isabel', 'Carlos', 'Felipe', 'Luis', 'Jose', 'Amadeo', 'Alfonso', 'Juan Carlos']
        for (let i = 0; i <reyes.length; i++) {
            const rey = reyes[i] //normalmente se le da el mismo nombre que el array pero en singular
            if (rey.toLowerCase() === name.toLowerCase()) {
                return true
            }
        }
        return false
  }

 /**
  * Function mostrar
  * @param name: string
  * @return: void
  */ 

  export function mostrar(name) {
    let i = 1
    let mensajes = [
        ` El nombre ${name} ha sido usado por un rey de España`,
         `Ningún rey de España se ha llamado nunca ${name}`]
         if (isRey(name)) {
             i= 0
         }
        return mensajes[i]
  }


 