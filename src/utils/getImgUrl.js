export function getImgUrl(file) {
    // console.log({ file, path: import.meta.url })
    return new URL(`../assets/img/${file}`, import.meta.url).href
}