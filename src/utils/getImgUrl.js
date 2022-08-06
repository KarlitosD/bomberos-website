export function getImgUrl(file) {//funcion para nico
    const url = new URL(import.meta.url)
    return new URL(`/src/assets/img/${file}`, url).href
}
// export function getImgUrlFacha(file) {//funcion para nizzo y ciro
//     // console.log({ file, path: import.meta.url })
//     return new URL(`../../assets/img/${file}`, import.meta.url).href
// }