const WeatherMainCard = ({ iconUrl, temp, pressure, humidity, feelsLike, windSpeed, type, bImg = "default" }) => {
  return (
    <div className="card main-card shadow-md rounded-lg overflow-hidden">
		<div className="flex items-center">
			<img src={iconUrl} alt="Weather Icon" className="w-20 h-20 object-cover" />
			<div className="flex flex-col p-4">
				<span className="text-4xl font-bold">{temp} {type == "C" ? "°C" : "°F"}</span>
			</div>
		</div>
		<div className="info text-start p-4">
			<p>Sensación térmica: {feelsLike} {type == "C" ? "°C" : "°F"}</p>
			<p>Humedad: {humidity} %</p>
			<p>Viento: {windSpeed} {type == "C" ? "m/s" : "mph"}</p>
			<p>Presión atomosférica: {pressure} hPa</p>
		</div>
		<div className={`image-background ${bImg}`}></div>
    </div>
  );
};

export default WeatherMainCard;