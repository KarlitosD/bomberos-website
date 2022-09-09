export function getImgUrl(file) {
    return new URL(`/src/assets/img/${file}`, import.meta.url).href
}