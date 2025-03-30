import './App.css'
import React, { useEffect, useState }　from "react";
import { Link, useParams } from 'react-router-dom';

function CountryDetail(){
    const[cities, setCities] = useState([]);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const { code } = useParams();

    useEffect(()=>{
        fetch(`${baseUrl}/countries/${code}`)
        .then(res => res.json())
        .then(data => {
            console.log("取得データ", data);
            setCities(data);
        })
        .catch(err => console.log("データ取得失敗:",err));
    },[baseUrl, code]);


    return(
        <ul>
            <div className="card-container">
                {cities.map((city,i) => (
                    <li key = {city.Code}>
                        <div className="city-card">
                            <h3>{city.都市名}</h3>
                            <p>(都市人口:{city.都市人口.toLocaleString()})</p>
                        </div>
                    </li>
                ))}

                <Link to="/">← 国一覧に戻る</Link>
            </div>
        </ul>
    )
}
export default CountryDetail;