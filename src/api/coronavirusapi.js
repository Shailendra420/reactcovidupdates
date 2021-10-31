import axios from 'axios';

export const getCountriesData = async (countryName) => {
  try {
    const { data } = await axios.get(`https://api.covid19api.com/countries`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCountriesStatus = async (countryName) => {
  try {
    const { data } = await axios.get(`https://api.covid19api.com/total/dayone/country/${countryName}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};