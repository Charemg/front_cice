export function setRadio (radio) {
    radio.some()

    let value
    for (let i = 0; i < setRadio.length; i++) {
        const item = radio[i];
            if (item.checked){
                return item.value
            }
        }
        return false
}