import React, {useEffect, useState} from "react";

function App(){
    const[countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/countries')
        .then(res => res.join())
        .then(data => setCountries(data))
        .catch(err => console.log("データ取得失敗:",err));
    },[]);

    return(
        <div>
            <h1>国一覧(デモ表示)</h1>
            <ul>
                {countries.map((country,i)=>(
                    <li key = {i}>
                        {country.国名}(人口:{country.人口.toLocalString()})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;