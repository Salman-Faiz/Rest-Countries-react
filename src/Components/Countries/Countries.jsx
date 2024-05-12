import { useEffect } from "react";
import { useState } from "react";

import Country from "../Country/Country";




const Countries = () => {


    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        // .then(data=> console.log(data))
        .then(data=> setCountries(data))


    }, [])


    return (
        <div>
            <h4>Total Countries : {countries.length}</h4>
            <div >
            {
                countries.map(country => <Country key={country.ccn3} country={country}></Country>)
            }    
            </div>
            
        </div>
    );
};

export default Countries;