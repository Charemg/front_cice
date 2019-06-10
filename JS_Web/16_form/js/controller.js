export function controller () {
console.log('Controller cargado')

let formData = {}


let form_curso = document.querySelector('#form_curso')

form_curso.addEventListener('submit', onSubmit)


function onSubmit() {
 console.log('Formulario enviado')
 ev.preventDefault()


 let aControles = document.querySelectorAll(`[type="text"], 
                                            [type="email"], 
                                            [ type="password"],
                                            textarea`)

  aControles.forEach(
      item =>{formData[item.id] = item.value}
  )     

let aChecks = document.querySelector('check')
aChecks.forEach(item=>formData[item.id] = item.checked)

let aradioSede = document.querySelectorAll('[name = "sede"]')
getRadio
console.log(aRadioSede)

console.log(formData)

}



}

function getRadio(radio, data) {
    radio.forEach(
        item => {
            if (item.checked) {
                data[item.name] = {id:id.id, value: item.value}
                return
            }
        }
    )
}