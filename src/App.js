import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Map from "./Components/Map";
import Info from './Components/Info';
import Summery from "./Components/Summery";
import wiki from 'wikijs';


export default function App() {
    const [countryName, setCountryName] = useState('iran');
    const [summery, setSummery] = useState();
    const [info,setInfo] = useState();
    const [image,setImage] = useState();
    useEffect(() => {
        const fetch = async () => {
            const page = await wiki().page(countryName);
            const [summerys,infos,images]= await Promise.all([
                page.summary(),
                page.info(),
                page.images()
            ])
            const flag=infos.imageFlag.replace(/\s/g,'_');
            images.some(image=>{
                if(image.includes(flag)){
                    setImage(image);
                    return true;
                }
                return false;
            })
            setSummery(summerys);
            setInfo(infos);
        }
        fetch();
    }, [countryName])

    function handlerClick(name) {
        setCountryName(name);
    }
    

    return <div className="container mt-3">
        <div className="row">
            <div className="col col-md-9">
                <Map handlerClick={handlerClick}/>
            </div>
            <div className="col-12 col-md-3">
                <Info info={info}  image={image}/>
            </div>
        </div>
        <div className="row mt-3">
            <div className="mx-2">
                <Summery summery={summery}/>
            </div>
        </div>
    </div>;
}
