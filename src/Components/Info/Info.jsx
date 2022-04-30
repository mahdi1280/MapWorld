import React from "react";

export default function Info({info,image}){
    return <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap"/>
        {info &&
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Capital: {info.capital}</li>
                <li className="list-group-item">Official languages: {info.officialLanquages}</li>
                <li className="list-group-item">Population: {info.populationEstimate}</li>
            </ul>
        }
    </div>;
}