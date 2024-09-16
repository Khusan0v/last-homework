import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../components/lineChart/Dashbord";

export default function SingleCountry() {
  const { code } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState(null); 

  const fetchCountry = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      if (!response.ok) {
        throw new Error("Error fetching country data!");
      }
      const [data] = await response.json();
      setCountry(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [code]);

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="flex max-w-[1140px] gap-10 bg-gray-200 mx-auto p-9 px-4 rounded-md mb-2">
      <div className="max-w-[1140px] flex flex-col gap-4 justify-between items-start bg-gray-200">
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        <p>Population: {country.population} people</p>
        <p>Capital: {country.capital?.[0]}</p>
      </div>
      <div className="w-96">
        <Dashboard />
      </div>
    </div>
  );
}
