import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { future } from 'topojson-client';

function WorldMap(){
    const [countries, setCountries] = useState(null);
    
    useEffect(()=>{
        d3.json('/path/to/countries-50m.json')
        .then((toData)=>{
            const geoData = feature(todoData, topoData.objects.countries);
            setCountries(geoData);
        });
    }, []);

    const projection = d3.geoNaturalEarth1().scale(130).translate([400, 250]);
    const pathGenerator = d3.geoPath().projection(projection);

    return (
        <svg width={800} height={500}>
            {countries && countries.features.map((d, i)=>(
                <path
                    key={i}
                    d={pathGenerator(d)}
                    fill="#ccc"
                    stroke="#333"
                    strokeWidth={0.5}
                    />
            ))}
        </svg>
    );
}

export default WorldMap;