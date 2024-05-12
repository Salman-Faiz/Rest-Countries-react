import './Country.css'
const Country = ({country}) => {
    const { name,flags,population} =country;
    return (
        <div className="countryDiv">
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p><small>Population: {population}</small></p>
        </div>
    );
};

export default Country;