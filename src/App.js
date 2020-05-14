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
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const {data} = this.state;

    return(
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker countryChange={this.countryChange} />
        <Charts />
      </div>
    )

 }
}

export default App;
