import { useEffect } from "react";
import { useState } from "react";

import Country from "../Country/Country";

import './Countries.css'




const Countries = () => {


    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);

    const [favFlags,setFavFlags] = useState([]);
  


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

    const handleFavFlags = flag =>{
        // console.log('flag added');
        const newFavFlag = [...favFlags,flag]
        setFavFlags(newFavFlag);
    }


    return (
        <div>
            <h4 style={{paddingLeft: '50px'}}>Total Countries : {countries.length}</h4>
            <div>
                <h4 style={{paddingLeft: '50px'}}>Favourite Flags : {favFlags.length}</h4>
                {
                    favFlags.map(favFlag => <img className="favFlag" src={favFlag}  /> ) 
                }
            </div>
            <div>
                <h4 style={{paddingLeft: '50px'}}>Visited Countries: {visitedCountries.length}</h4>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>
                        {country.name.common}
                        </li>)
                    }
                </ol>
            </div>
           
            <div className="countriesDiv">
                {
                    countries.map(country => <Country
                        key={country.ccn3}
                        handleVisitedCountries={handleVisitedCountries}
                        handleFavFlags={handleFavFlags}
                        country={country}
                        
                        >
                    </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;