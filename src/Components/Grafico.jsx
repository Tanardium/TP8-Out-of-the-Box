import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';

function Grafico() {
  const [weatherData, setWeatherData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const apiKey = 'eegTATJfAibNZCiuVfG1Cr4MVaTPtUoY';
    const latitude = -34.61; // Latitud de Buenos Aires
    const longitude = -58.38; // Longitud de Buenos Aires
    const units = 'metric'; // Unidades métricas, puedes cambiarlas según tu preferencia

    const apiUrl = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&units=${units}&apikey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const temperatures = data.data.timelines[0].intervals.map((interval) => interval.values.temperature);
        setWeatherData(temperatures);
      })
      .catch((error) => {
        console.error('Error al obtener datos meteorológicos:', error);
      });
  }, []);

  useEffect(() => {
    if (weatherData.length > 0) {
      // Destruir el gráfico existente antes de crear uno nuevo
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const ctx = document.getElementById('weatherChart').getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [...Array(weatherData.length).keys()],
          datasets: [
            {
              label: 'Temperatura',
              data: weatherData,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
      });

      // Asignar el objeto de gráfico al ref para su posterior destrucción
      chartRef.current = chart;
    }
  }, [weatherData]);

  return (
    <div className="weather-chart-container">
      <h1>Gráfico del Tiempo para Buenos Aires</h1>
      <h3>El siguiente gráfico nos muestra los cambios de temperatura en grados celsius a través de 120 puntos</h3>
      <canvas id="weatherChart" width="400" height="200"></canvas>
    </div>
  );
}

export default Grafico;
