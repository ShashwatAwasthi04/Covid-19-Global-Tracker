import React ,{useState,useEffect} from 'react';
import {getDailyData} from '../../api';

import {Line,Bar} from 'react-chartjs-2';
import styles from './Charts.module.css'

const Charts= () => {
    const [dailyData,setDailyData]=useState([]);
    useEffect(() => {
        const getAPI = async () => {
            setDailyData(await getDailyData());
        }

        getAPI();
    });

    const lineChart = (
        dailyData.length ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => date),
              datasets: [{
                data: dailyData.map((data) => data.confirmed),
                label:'Infected Patients',
                borderColor: 'rgb(138,43,226)',
                fill: true,
              }, {
                data: dailyData.map((data) => data.deaths),
                label: 'Deaths by Covid-19',
                borderColor: 'red',
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
            {lineChart}
        </div>
    )
}

export default Charts;