import { useState } from 'react';
import './Country.css'
const Country = ({ country ,handleVisitedCountries }) => {
    const { name, flags, population, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
     
     
        // bank sign use for toggle the button.. !true = false;


    }

   
    return (
        <div className={`countryDiv ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'yellow' : 'black'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p><small>Population: {population}</small></p>
            <p><small>COde: {cca3}</small></p>
            <button onClick={()=>{handleVisitedCountries(country)}}>Mark Visited</button>
            <br /><br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
            {
                // visited && 'visited this country.'
                visited ? ' i have visited this country' : 'i wanna go'
            }
        </div>
    );
    };

    export default Country;