export function getImgUrl(file) {//funcion para nico
    return new URL(`/src/assets/img/${file}`, import.meta.url).href
}
