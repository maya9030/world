import './App.css'
import React, { useEffect, useState }　from "react";
import { Link, useParams } from 'react-router-dom';

function CountryDetail(){
    const[cities, setCities] = useState([]);
    const baseUrl = process.env.REACT_APP_API_BASE_URL
    const { id } = useParams();
    const { code } = useParams();

    useEffect(()=>{
        console.log("アクセス先:", `${baseUrl}/continents/${id}/${code}`);

        fetch(`${baseUrl}/continents/${id}/${code}`)
        .then(res => res.json())
        .then(data => {
            console.log("取得データ", data);
            setCities(data);
        })
        .catch(err => console.log("データ取得失敗:",err));
    },[baseUrl, id, code]);


    return(
        <ul>
            <div className="card-container">
                <h2>{code}</h2>
                <Link to="/">←← 大陸一覧に戻る</Link>
                <Link to={`/continents/${id}`}>← 国一覧に戻る</Link>
                {cities.map((city,　i) => (
                    <li key = {i}>
                        <div className="city-card">
                            <h3>{city.都市名}</h3>
                            <p>(都市人口:{city.都市人口.toLocaleString()})</p>
                        </div>
                    </li>
                ))}
            </div>
        </ul>
    )
}
export default CountryDetail;