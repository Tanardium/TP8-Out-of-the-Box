import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Grafico = () => {
  const [temperatureData, setTemperatureData] = useState(null);

  useEffect(() => {
    const apiKey = 'eegTATJfAibNZCiuVfG1Cr4MVaTPtUoY';
    const apiUrl =
      'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=' +
      apiKey;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extrae la serie de tiempo de temperatura de la respuesta JSON
        const temperatureTimeline = data.data.timelines.temperature;

        // Crea un array de objetos con las marcas de tiempo y valores de temperatura
        const temperatureChartData = temperatureTimeline.map((entry) => ({
          time: entry.startTime, // Marca de tiempo
          value: entry.intervals[0].value, // Valor de temperatura en grados Celsius
        }));

        // Divide los datos en marcas de tiempo y valores
        const timeLabels = temperatureChartData.map((entry) => entry.time);
        const temperatureValues = temperatureChartData.map((entry) => entry.value);

        // Actualiza el estado con los datos de temperatura
        setTemperatureData({
          time: timeLabels,
          values: temperatureValues,
        });
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div>
      {temperatureData && (
        <Line
          data={{
            labels: temperatureData.time,
            datasets: [
              {
                label: 'Temperatura (°C)',
                data: temperatureData.values,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                fill: false,
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'hour', // Puedes ajustar la unidad de tiempo según tus datos
                },
                title: {
                  display: true,
                  text: 'Tiempo',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Temperatura (°C)',
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Grafico;