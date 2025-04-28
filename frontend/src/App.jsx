import { Route, Routes } from 'react-router-dom';
import ContinentList from './ContinentList';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

function App(){
    return(
        
        <Routes>
            <Route path="/" element = {<ContinentList />} />
            <Route path="/continents/:cont" element = {<CountryList />} />
            <Route path="/continents/:cont/:code" element = {<CountryDetail />} />
        </Routes>
        )
}

export default App;