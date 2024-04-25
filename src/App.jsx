import './App.css';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import { setLocationData, getWeatherByLatLon } from './logic/functions.js';
import WeatherMainCard from './components/WeatherMainCard';
import WeatherExtraCard from './components/WeatherExtraCard';
import CityList from './components/CityList';
import Overlay from './components/Overlay';

function App() {
	const [latitude, setLatitude] = useState(null);
	const [longitude, setLongitude] = useState(null);
	const [location, setLocation] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [searchText, setSearchText] = useState('');
	const [cities, setCitites] = useState([]);
	const [weather, setWeather] = useState([]);
	const [type, setType] = useState(true); //Por default true para sistema métrico (m/s y grados celsius)
	
	const dayOfWeek = new Date().getDay();
	const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

	useEffect(() => {
		setLocationData(setLatitude, setLongitude, setLocation, setWeather);
	}, []);

	useEffect(() => {
		if (latitude) {
			getWeatherByLatLon(setWeather, setIsLoading, latitude, longitude, type);
		}
	}, [latitude, longitude, type]);

	console.log(weather);

	return (
		<>
			{isLoading && <Overlay />}
				<Header setType={setType} type={type} location={location} searchText={searchText} setSearchText={setSearchText} setIsLoading={setIsLoading} setCitites={setCitites}></Header>
				<section className='flex flex-wrap mt-2'>
					<div className='m-auto w-full md:w-1/2 lg:w-5/12 py-3 px-2 md:order-2'>
						<h3 className='text-3xl font-bold mb-2'>Hoy</h3>
						<WeatherMainCard
							iconUrl={`https://openweathermap.org/img/wn/${weather?.current?.weather[0]?.icon}@2x.png`}
							temp={weather?.current?.temp }
							pressure={weather?.current?.temp }
							humidity={weather?.current?.humidity }
							feelsLike={weather?.current?.feels_like }
							windSpeed={weather?.current?.wind_speed }
							type={type ? "C" : "F"}
							bImg={weather?.current?.weather[0]?.main } 

						/>
					</div>
					<div className='flex flex-col gap-y-3 w-full md:w-1/2 lg:w-3/12 px-2 md:order-1'>
						{weather.length !== 0 && (
							<>
								{[1, 2, 3].map(index => (
									<WeatherExtraCard
										key={index}
										iconUrl={`https://openweathermap.org/img/wn/${weather?.daily[index]?.weather[0]?.icon}@2x.png`}
										description={weather?.daily[index]?.summary ?? 0}
										min={weather?.daily[index]?.temp.min ?? 0}
										max={weather?.daily[index]?.temp.max ?? 0}
										morning={weather?.daily[index]?.temp.morn ?? 0}
										evening={weather?.daily[index]?.temp.eve ?? 0}
										night={weather?.daily[index]?.temp.night ?? 0}
										day={days[(dayOfWeek + index) % 7]}
										type={type ? "C" : "F"}
									/>
								))}
							</>
						)}
					</div>
					<aside className='w-full lg:w-4/12 order-first lg:order-last px-2 overflow-y-auto'>
						<hr style={{ borderColor: '#656565' }} />
						<p className='text-start mt-3'>Resultados de búsqueda</p>
						{cities.length !== 0 ? (
							<CityList setLatitude={setLatitude} setLongitude={setLongitude} setLocation={setLocation} type={type} cities={cities} setWeather={setWeather} setIsLoading={setIsLoading}></CityList>
						) : (
							<p className='mt-5 text-gray-400'>Sin resultados.</p>
						)}
					</aside>
				</section>
			</>
		);
	}

export default App;
