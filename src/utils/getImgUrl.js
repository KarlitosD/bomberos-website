export function getImgUrl(file) {
    const url = new URL(import.meta.url)
    return new URL(`/src/assets/img/${file}`, url).href
}