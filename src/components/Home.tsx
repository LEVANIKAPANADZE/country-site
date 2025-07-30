import data from "../../data.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const navigate = useNavigate();

  const continents: string[] = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  function handleClick(continent: string) {
    if (continent === filter) {
      setFilter("");
    } else {
      setFilter(continent);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmittedSearch(searchTerm);
  }

  const filteredCountries = data.filter((country) => {
    const matchesRegion = filter ? country.region === filter : true;
    const matchesSearch = country.name
      .toLowerCase()
      .includes(submittedSearch.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>

      <div>
        <span>Filter by Region</span>
        <button onClick={() => setClicked(!clicked)}>Drop Down</button>
      </div>

      {clicked && (
        <div>
          {continents.map(function (continent) {
            return (
              <span key={continent} onClick={() => handleClick(continent)}>
                {continent}
              </span>
            );
          })}
        </div>
      )}

      <div>
        {filteredCountries.map(function (country) {
          return (
            <div
              key={country.alpha3Code}
              onClick={() => navigate(`/${country.name}`)}
            >
              <img src={country.flags.svg} alt={country.name} />
              <h1>{country.name}</h1>
              <p>{country.population}</p>
              <p>{country.region}</p>
              <p>{country.capital}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
