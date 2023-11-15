const getTemperature = async () => {
    const apiKey = '8e8dc329825596280b1ab6282c5ed095';
    const city = 'Manaus';
  
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      const data = await response.json();
      

      const temperatureInKelvin = data?.main?.temp || 'N/A';
      const temperatureInCelsius = temperatureInKelvin - 273.15;
  
      return temperatureInCelsius.toFixed(2); 
    } catch (error) {
      console.error('Erro ao obter temperatura:', error);
      return 'N/A';
    }
  };
  
  export default getTemperature;