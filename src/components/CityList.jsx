import City from './City'; // Importa el componente de la card de clima aquí
import { useState } from 'react';

const CityList = ({ cities, setWheater, setIsLoading, type, setLatitude, setLongitude }) => {
	const [selectedCityIndex, setSelectedCityIndex] = useState(null);

	return (
		<div className="city-list">
			{cities.map(city => (
				<City
					key={city.place_id}
					code={city.address_components[0].short_name ?? ""}
					address={city.formatted_address}
					lat={city.geometry.location.lat}
					lon={city.geometry.location.lng}
					setWheater={setWheater}
					setIsLoading={setIsLoading}
					type={type}
					isSelected={selectedCityIndex === city.place_id}
					onClick={() => setSelectedCityIndex(city.place_id)}
					setLatitude={setLatitude}
					setLongitude={setLongitude}
				/>
			))}
		</div>
	);
}

export default CityList;