export function getImgUrl(file) {//funcion para nico
    // console.log({ file, path: import.meta.url })
    return new URL(`../assets/img/${file}`, import.meta.url).href
}
export function getImgUrlFacha(file) {//funcion para nizzo y ciro
    // console.log({ file, path: import.meta.url })
    return new URL(`.../assets/img/${file}`, import.meta.url).href
}