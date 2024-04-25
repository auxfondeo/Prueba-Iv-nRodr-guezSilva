const WeaherExtraCard = ({ iconUrl, min, max, morning, evening, night, type, description, day}) => {
	return (
	  <div>
	  	<h3 className="text-2xl font-bold mb-2 text-start">{day}</h3>
		<div className="card shadow-md rounded-lg overflow-hidden pb-2">
		  <div className="flex items-center">
			  <img src={iconUrl} alt="Weather Icon" className="w-20 h-20 object-cover" />
			  <div className="flex flex-col p-4">
				  <p>{min} {type == "C" ? "°C" : "°F"} - {max} {type == "C" ? "°C" : "°F"}</p>
				  <p className="text-sm font-light">{description}</p>
			  </div>
		  </div>
		  <div className="flex items-center justify-between mx-10">
			<div>
				<img className="extra-card-img" src="../src/assets/morning.png"/>
				<p>{morning} {type == "C" ? "°C" : "°F"}</p>
			</div>
			<div>
				<img className="extra-card-img" src="../src/assets/evening.png"/>
				<p>{evening} {type == "C" ? "°C" : "°F"}</p>
			</div>
			<div>
				<img className="extra-card-img" src="../src/assets/night.png"/>
				<p>{night} {type == "C" ? "°C" : "°F"}</p>
			</div>
		</div>
	  </div>
	  </div>
	);
  };
  
  export default WeaherExtraCard;