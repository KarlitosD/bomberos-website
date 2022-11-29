export function getImgUrl(fileName) {
    const imageUrl = new URL(`/src/assets/img/${fileName}`, import.meta.url).href
    return imageUrl
}