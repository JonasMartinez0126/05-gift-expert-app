import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";


export const useFetchGifts = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
    }
    // dejar las dependencias vacias [] significa que solo se ejecutara una vez
    // no puede se asincrono el useEffect
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}