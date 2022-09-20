import { useEffect, useState } from "react";
import { getImgUrl } from "../utils/getImgUrl";

const images = ["c1.jpg", "c2.jpg", "c3.jpg"]

export function Carousel(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let interval
        if (props.autoplay) {
            interval = setInterval(() => {
                selectNewImage(selectedIndex, images);
            }, 1800);
        }
        return () => clearInterval(interval);
    })

    const selectNewImage = (index, images, next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.lengt - 1
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);
    };


    /* const previous = () => {
        selectNewImage(selectedIndex, props.images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, props.images);
    }; */

    return (
        <>
            <div className="contenedorCarousel">
                <img src={getImgUrl(selectedImage)} alt="no" className={`carousel ${loaded ? "loaded" : ""}`} onLoad={() => setLoaded(true)} height="380" />
                <div className="decorationCs">
                    <h1 className="fontCS">Hace más de 100 años con vos</h1>
                </div>
            </div>
        </>
    )
}