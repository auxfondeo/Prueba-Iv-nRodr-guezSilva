import { getWeatherByLatLon } from '../logic/functions.js';

const City = ({ code, address, setLatitude, setLongitude, lat, lon, setIsLoading, setWheater, type, isSelected, onClick }) => {

	const handleClick = () => {
		setIsLoading(true);
		setLatitude(lat);
		setLongitude(lon);
		getWeatherByLatLon(setWheater, setIsLoading, lat, lon, type);
		onClick();
	};

  return (
    <div
      className={`mb-2 text-start city p-4 rounded-md transition-colors duration-300 cursor-pointer ${
        isSelected ? 'bg-slate-900' : 'bg-slate-700 hover:bg-slate-800'
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <span className="font-bold">{code}</span>
        <span>{lat}, {lon}</span>
      </div>
      <p className="text-lg">{address}</p>
    </div>
  );
};

export default City;
