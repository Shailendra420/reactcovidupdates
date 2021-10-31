
import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { getCountriesData, getCountriesStatus } from "./api/coronavirusapi";

import Header from "./components/Header/Header";
import FilterCountryControl from "./components/FilterCountryControl/FilterCountryControl";
import Chart from "./components/Chart/Chart";
import TableComponent from "./components/TableComponent/TableComponent";


const App = (props) => {
  const [countryName, setCountryName] = useState('south-africa');
  const [country, setCountry] = useState([]);
  const [covidCountryData, setCovidCountryData] = useState([]);
  useEffect(() => {
    let modifiedCountryString = countryName.trim().toLowerCase().split(" ").join("-");
    getCountriesData()
      .then((data) => {
        // console.log(data);
        setCountry(data);
      })
      getCountriesStatus(modifiedCountryString)
        .then((data) => {
          // console.log(data);
          setCovidCountryData(data);
          console.log("covidCountryData", covidCountryData);
        })
  }, [countryName]);

  return (
    <>
      <CssBaseline />
      <Header/>
      <Grid container spacing={0} style={{ width: "100%" }}>
        <Grid item xs={12}>
          <Box m={2} pt={3}>
            <FilterCountryControl 
              setCountryName={setCountryName}
              country={country}
            />
          </Box>
          <Box m={2} pt={3}>
            <Chart 
              covidCountryData={covidCountryData}
            />
          </Box>
          <Box m={2} pt={3}>
            <TableComponent
              covidCountryData={covidCountryData}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
