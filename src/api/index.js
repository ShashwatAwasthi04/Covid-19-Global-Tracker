import axios from 'axios';

const url =  "https://covid19.mathdro.id/api";

export const getData = async (country) => {
  let urlchange= url;

  if(country){
    urlchange = `${url}/countries/${country}`
  }

    try{
        const {data: { confirmed,recovered,deaths,lastUpdate}} = await axios.get(urlchange);
        const changedData = { confirmed, recovered, deaths, lastUpdate}
        return changedData;
    }
    catch(error){

    }
}

export const getDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
      const modifiedData= data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date:dailyData.reportDate
      }));

      return modifiedData;
    } catch (error) {
     
    }
  };


  export const getCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };
