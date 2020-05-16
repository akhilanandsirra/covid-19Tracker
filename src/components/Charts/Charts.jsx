import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Charts.module.css';


const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);
  
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(255,7,58,.6)', 'rgba(40,167,69, 0.6)', 'rgba(108,117,125, 0.6)'],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
            responsive: true,
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
            scales: {
                yAxes: [{ticks: {fontSize: 12, fontFamily: "'Roboto Condensed', sans-serif", fontColor: '#000', fontStyle: '500'}}],
                xAxes: [{ticks: {fontSize: 12, fontFamily: "'Roboto Condensed', sans-serif", fontColor: '#000', fontStyle: '500'}, gridLines: {
                    display: false,
                    drawBorder: false
                }}]
                },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: 'rgba(255,7,58)',
            fill: false,
            backgroundColor: 'rgba(255,7,58)',
            hoverRadius: 5,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'rgba(108,117,125)',
            fill: false,
            backgroundColor: 'rgba(108,117,125)',
            hoverRadius: 5,
          },
          ],
        }}
        options={{
            responsive: true,
            legend: { display: true },
            scales: {
                yAxes: [{ticks: {fontSize: 12, fontFamily: "'Roboto Condensed', sans-serif", fontColor: '#000', fontStyle: '500'}}],
                xAxes: [{ticks: {fontSize: 12, fontFamily: "'Roboto Condensed', sans-serif", fontColor: '#000', fontStyle: '500'},gridLines: {
                    display: false,
                    drawBorder: false,
                }}]
                },
        }}
      />
    ) : null
  );


  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Charts;