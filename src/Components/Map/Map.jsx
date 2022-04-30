import React from "react";
import ImageMapper from 'react-image-mapper';
import image from './imageWorld.png'
import map from './map_data.json';

export default function Map({handlerClick}){
    return <ImageMapper
        onClick={(e)=>handlerClick(e.name.split(" ")[0])}
        src={image}
        map={map}
        imgWidth={1000}
        width={800}/>
}