const cache = new Map()

function blobToDataUrl(blob) {
    return new Promise((res) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            res(reader.result);
        }
        reader.readAsDataURL(blob) 
    })
}

export function getImgUrl(fileName) {
    if(cache.has(fileName)) return cache.get(fileName)
    const imageUrl = new URL(`/src/assets/img/${fileName}`, import.meta.url).href
    // const imageBlob = await fetch(imageUrl).then(res => res.blob())
    // const dataUrl = await blobToDataUrl(imageBlob)
    // cache.set(fileName, dataUrl)
    // return null
    cache.set(fileName, "data:")
    fetch(imageUrl)
        .then(res => res.blob())
        .then(blobToDataUrl)
        .then(dataUrl => cache.set(fileName, dataUrl))
    return "data:"
}