import React from 'react';
import { Line } from "react-chartjs-2";


const Chart = ({ covidCountryData }) => {
    
    return (
        <Line
            data={{
                labels: covidCountryData.map(({ Date }) => Date),
                datasets: [{
                    label: "Active",
                    data: covidCountryData.map(({ Active }) => Active),
                    lineTension: 0,
                    fill: false,
                    borderColor: "rgb(0, 123, 255)",
                    backgroundColor: "rgba(0, 123, 255, 0.2)"
                },{
                    label: "Confirmed",
                    data: covidCountryData.map(({ Confirmed }) => Confirmed),
                    lineTension: 0,
                    fill: false,
                    borderColor: "rgb(255, 7, 58)",
                    backgroundColor: "rgba(255, 7, 58, 0.2)"
                },{
                    label: "Deaths",
                    data: covidCountryData.map(({ Deaths }) => Deaths),
                    lineTension: 0,
                    fill: false,
                    borderColor: "rgb(108, 117, 125)",
                    backgroundColor: "rgba(108, 117, 125, 0.2)"
                },{
                    label: "Recovered",
                    data: covidCountryData.map(({ Recovered }) => Recovered),
                    lineTension: 0,
                    fill: false,
                    borderColor: "rgb(40, 167, 69)",
                    backgroundColor: "rgba(40, 167, 69, 0.2)"
                }]
            }}
            options={{
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 8,
                            }
                        }
                    }
                }
            }}
        />)
    };

export default Chart;