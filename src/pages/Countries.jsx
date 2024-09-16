import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountries, setLoading, setError } from "../store/countriesSlice";
import { CountrySelection } from "../store/selectedCountriesSlice";
import HeroSection from "../components/HeroSection";
import { Table, TableBody, TableHead, TableHeadCell, Drawer, Button, Flowbite } from "flowbite-react";
import PaginationComponent from "../components/Pagination"
import { Link } from "react-router-dom";
export default function Countries() {
  const { countries, loading, error } = useSelector((state) => state.countries);
  const { selectedCountries } = useSelector((state) => state.selectedCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    async function fetchCountries() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Error Fetched Countries!');
        }
        const fetchedCountries = await response.json();
        dispatch(setCountries(fetchedCountries));
      } catch (error) {
        console.log(error.message);
      } finally {
        dispatch(setLoading(false));
      }
    }

    fetchCountries();
  }, [dispatch]);

  const handleSelect = (country) => {
    dispatch(CountrySelection(country));

  };

  const isCountrySelected = (country) =>
    selectedCountries.some((selected) => selected.cca2 === country.cca2);

  const customTheme = {
    table: {
      row: {
        base: "group/row",
        hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
        striped: "odd:bg-blue-50 even:bg-blue-200 odd:dark:bg-gray-800 even:dark:bg-gray-700",
      },
    },
  };

  return (
    <div>
      <Drawer open={false}>
        <Drawer.Items>Drawer item</Drawer.Items>
      </Drawer>

      <HeroSection />

      <Flowbite theme={{ theme: customTheme }}>
        <div className="max-w-[1140px] mx-auto mt-4">
          <Table striped>
            <TableHead>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Population</TableHeadCell>
              <TableHeadCell>Capital</TableHeadCell>
              <TableHeadCell>Action</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {countries.map((country) => (
                <Table.Row
                  key={country.cca2}
                  className="bg-white dark:border-gray-700 border-blue-500 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white ">
                  <Link to={`/country/${country.cca2}`}>{country.name.common}</Link>
                  </Table.Cell>
                  <Table.Cell>{country.population}</Table.Cell>
                  <Table.Cell>{country.capital}</Table.Cell>
                  <Table.Cell>
                    <Button
                      color={isCountrySelected(country) ? "success" : "gray"}
                      onClick={() => handleSelect(country)}
                    >
                      {isCountrySelected(country) ? "unselect" : "select"}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </TableBody>
          </Table>
        </div>
      </Flowbite>
      <PaginationComponent/>
    </div>
  );
}