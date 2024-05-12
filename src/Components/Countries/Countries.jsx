import { useEffect } from "react";
import { useState } from "react";

import Country from "../Country/Country";

import './Countries.css'




const Countries = () => {


    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(data=> console.log(data))
            .then(data => setCountries(data))


    }, [])

    const handleVisitedCountries = country =>{
            
        console.log('add this to your visited countries');
       const newVisitedCountry = [...visitedCountries,country]

       setVisitedCountries(newVisitedCountry);
    }


    return (
        <div>
            <h4>Total Countries : {countries.length}</h4>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ol>
                    {
                        visitedCountries.map(country => <li>{country.name.common}
                        </li>)
                    }
                </ol>
            </div>
            <div className="countriesDiv">
                {
                    countries.map(country => <Country
                        key={country.ccn3}
                        handleVisitedCountries={handleVisitedCountries}
                        country={country}
                        
                        >
                    </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;