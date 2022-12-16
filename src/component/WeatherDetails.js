
export default function WeatherDetails ({weatherData}) {
    return (
    <div>
        <div>{weatherData.location?.name}</div>
        <div>Latitude: {weatherData.location?.lat}</div>
        <div>Longitude: {weatherData.location?.lon}</div>
        <div>Temp C {weatherData.currentConditions?.temp_c}</div>
        <div>Temp F {weatherData.currentConditions?.temp_f}</div>
    </div>
    );

}