import { Route, Routes } from 'react-router-dom';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';

function App(){
    return(
        <Routes>
            <Route path="/" element = {<CountryList />} />
            <Route path="/country/:code" element = {<CountryDetail />} />
        </Routes>
        )
}

export default App;