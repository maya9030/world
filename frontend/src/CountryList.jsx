import './App.css'
import React, {useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';

function CountryList(){
    const[countries, setCountries] = useState([]);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const { cont } = useParams();

    useEffect(()=>{
        console.log("アクセス先:", `${baseUrl}/continents/${cont}`);
        fetch(`${baseUrl}/continents/${cont}`)
        .then(res => res.json())
        .then(data => {
            console.log("取得データ", data);
            setCountries(data);
        })
        .catch(err => console.log("データ取得失敗:",err));
    },[baseUrl, cont]);

return(
    <div className="card-container">
        <h1>国一覧</h1>
        <Link to="/">← 大陸一覧に戻る</Link>
        <ul>
            {countries.map((country,i) => (
                <li key = {country.Code}>
                    <Link to={`/continents/${cont}/${country.Code}`}>
                        <div className="country-card">
                            <h3>{country.国名}</h3>
                            <p>(人口:{country.人口.toLocaleString()})</p>
                            <p>(都市数:{country.都市数.toLocaleString()})</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    )
}
export default CountryList;