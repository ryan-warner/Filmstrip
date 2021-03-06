import { useRef, useEffect } from "react";

function AlbumItem(props) {
    const imageRef = useRef(null)
    var AR = 1
    var scale = 0

    useEffect(() =>{
        const imageWidth = imageRef.current.clientWidth;
        const imageHeight = imageRef.current.clientHeight;
        AR = props.albumExpanded ? Math.max(imageWidth / imageHeight, imageHeight / imageWidth): 0.9
        imageRef.current.style.transform = `scaleX(${AR}) scaleY(${AR})`
    },[props.albumExpanded])

    return (
        <div className="w-full aspect-square flex items-center justify-center overflow-hidden">
            <div className="w-full h-32 aspect-video shadow-xl bg-gradient-to-r from-purple-400 via-green-500 to-pink-500 rounded-xl duration-200 ease-in" ref={imageRef}></div>
        </div>
    )
}

export default AlbumItem;