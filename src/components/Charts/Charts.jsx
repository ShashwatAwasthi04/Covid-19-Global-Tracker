import React ,{useState,useEffect} from 'react';
import {getDailyData} from '../../api';

import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'

const Charts= ({data:{confirmed,recovered,deaths} , country}) => {
    const [dailyData,setDailyData]=useState([]);
    useEffect(() => {
        const getAPI = async () => {
            setDailyData(await getDailyData());
        }

        getAPI();
    },[]);



    const barChart = (
      confirmed ? (
        <Bar 
          data = {{
            labels: ['Infected','Recovered','Deaths'],
            datasets: [{
              label: 'People',
              backgroundColor: [
                'rgb(138,43,226)',
                'rgba(0, 255, 0, 0.925)',
                'rgb(148, 5, 5)',
              ],
              data: [confirmed.value,recovered.value,deaths.value]
            }]
          }}
          options={{
            legend: {display:false},
            title: {display:true, text:`Current Condition of ${country}`},
          }}
        /> ) : null
      
    );

    const lineChart = (
        dailyData.length ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label:'Infected Patients',
                borderColor: 'rgb(10, 17, 117)',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths by Covid-19',
                borderColor: 'rgb(148, 5, 5)',
                backgroundColor: 'rgba(256, 0, 0, 0.5)',
                fill: true,
              },
              ],
            }}
          />
        ) : null
      );
    return(
        <div className={styles.container}>
            {country? barChart:lineChart}
        </div>
    )
}

export default Charts;