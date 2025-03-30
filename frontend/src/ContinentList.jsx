import './App.css'
import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

function ContinentList(){
    const[continents, setContinents] = useState([]);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(()=>{
        console.log("アクセス先:", `${baseUrl}/continents`);
        
        fetch(`${baseUrl}/continents`)
        .then(res => res.json())
        .then(data => {
            console.log("取得データ", data);
            setContinents(data);
        })
        .catch(err => console.log("データ取得失敗:",err));
    },[baseUrl]);

return(
    <div className="card-container">
        <h1>大陸一覧</h1>
        <ul>
            {continents.map((continent, i) => (
                <li key = {continent.大陸}>
                    <Link to={`/continents/${continent.大陸id}`}>
                        <div className="country-card">
                            <h3>{continent.大陸}</h3>
                            <p>(国数:{continent.国数.toLocaleString()})</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
    )
}
export default ContinentList;