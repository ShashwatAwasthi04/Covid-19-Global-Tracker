import React ,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {getCountries} from '../../api';


const CountryPicker= ({countryChange}) => {
    const[countryVal,setcountryVal]=useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
          setcountryVal(await getCountries());
        };
    
        fetchAPI();
      }, [setcountryVal]);

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => countryChange(e.target.value)} >
                <option value="Whole World">Whole World</option>
                {countryVal.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;