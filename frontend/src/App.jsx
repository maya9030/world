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
        <div className="card-container">
            <h1>国一覧</h1>
            <ul>
                {countries.map((country,i) => (
                    <li key = {i}>
                        <div className="country-card" key={i}>
                            <h3>{country.国名}
                            <p>(人口:{country.人口.toLocaleString()})</p>
                            </h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        )
}

export default App;