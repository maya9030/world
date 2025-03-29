import React, {useEffect, useState} from "react";
import './App.css'

function App(){
    const[countries, setCountries] = useState([]);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(()=>{
        fetch(`${baseUrl}/countries`)
        .then(res => res.json())
        .then(data => {
            console.log("取得データ", data);
            setCountries(data);
        })
        .catch(err => console.log("データ取得失敗:",err));
    },[baseUrl]);

    return(
        <div>
            <h1>国一覧(デモ表示)</h1>
            <ul>
                {countries.map((country,i) => (
                    <li key = {i}>
                        <a href={`https://earth.google.com/web/search/${country.国名}`} target="_blank" rel="noopener noreferrer">
                        {country.国名}
                        </a>
                        (人口:{country.人口.toLocaleString()})
                    </li>
                ))}
            </ul>
        </div>
        )
}

export default App;