import './App.css'
import React from "react";
import { useParams } from 'react-router-dom';

function CountryDetail(){
    const { name } = useParams();

    return(
        <div className="detail-table-container">
            <h2>{name}</h2>
        </div>
    )
}
export default CountryDetail;