import React from 'react';

import {Cards, Charts,CountryPicker } from './components';
import styles from'./App.module.css';
import {getData} from "./api";

class App extends React.Component{
  state ={
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData=await getData();
    this.setState({data:fetchedData});
  }
  
  countryChange = async (country) => {
    const data = await getData(country);

    this.setState({ data : data, country: country});
  }

  render() {
    const {data , country} = this.state;

    return(
      
      <div className={styles.container}>
        <h1 style={{color: "red"}}>Choose the Country Below to Display Data</h1>
        <CountryPicker countryChange={this.countryChange} />
        <Cards data={data}/>
        <Charts  data={data} country={country}/>
      </div>
    )

 }
}

export default App;
