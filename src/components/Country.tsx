import data from "../../data.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Country() {
  const countryName = useParams();
  console.log(countryName);
  const info = data.find((country) => country.name === countryName.Country);

  return (
    <section>
      <Link to={"/"}>Back</Link>

      <img src={info?.flag} alt="Flag" />

      <h1>{info?.name}</h1>

      <div>
        <p>Native Name: {info?.nativeName}</p>
        <p>Population: {info?.population}</p>
        <p>Region: {info?.region}</p>
        <p>Sub Region: {info?.subregion}</p>
        <p>Capital: {info?.capital}</p>
      </div>

      <div>
        <p>Top Level Domain: {info?.topLevelDomain}</p>
        <p>Currencies: {info?.currencies?.map((currency) => currency.name)}</p>
      </div>

      <div>
        <h1>Border Countries</h1>

        <div>
          {info?.borders?.map((borderC) => {
            return (
              <div>
                {" "}
                <Link key={borderC} to={`/${borderC}`}>
                  {borderC}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
