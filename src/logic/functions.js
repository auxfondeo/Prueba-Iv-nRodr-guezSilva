import { GEOCODE_API_KEY, WHEATER_API_KEY } from '../constants';

export const getLocationByLatLon = async (lat, lon) => {
	try {
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&languaje=es&key=${GEOCODE_API_KEY}`
		);
		const jsonData = await response.json();
		return jsonData;
	} catch (error) {
		console.error('Error al obtener datos de la API:', error);
		throw error;
	}
};

export const setLocationData = async (setLatitude, setLongitude, setLocation) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(async (position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
			try {
				const locationData = await getLocationByLatLon(position.coords.latitude, position.coords.longitude);
				if (locationData.status) {
					setLocation(locationData.results[0].formatted_address);
				}
			} catch (error) {
				console.error('Error al obtener la ubicación:', error);
			}
		}, (error) => {
			console.error('Error al obtener las coordenadas:', error);
		});
	} else {
		console.error('La geolocalización no es soportada por este navegador.');
	}
};

export const getCitiesByName = async (city, setCities, setIsLoading) => {
	try {
		const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${GEOCODE_API_KEY}`);
		const data = await response.json();
		setCities(data.results);
	} catch (error) {
		console.error('Error:', error);
	} finally {
		setIsLoading(false);
	}
}

export const getWeatherByLatLon = async (setWheater, setIsLoading, lat, lon, type) => {
	const units = type ? "metric" : "imperial";
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&lang=es&appid=${WHEATER_API_KEY}`
		);
		const jsonData = await response.json();
		setWheater(jsonData);
	} catch (error) {
		console.error('Error al obtener datos de la API:', error);
	} finally {
		setIsLoading(false);
	}
};