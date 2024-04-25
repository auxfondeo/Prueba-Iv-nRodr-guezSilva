
const Switch = ({type, setType}) => {

	const handleChange = () => {
		setType(!type);
	};

	return (
		<div className="flex items-center mx-2">
			<input type="checkbox" id="toggle" className="hidden" onChange={handleChange} checked={type} />
			<label htmlFor="toggle" className="flex items-center cursor-pointer">
				<div className="mr-2 font-medium">°F</div>
				<div className={`bg-gray-300 w-14 h-7 rounded-full p-1 ${type ? 'bg-green-500' : 'bg-gray-300'}`}>
					<div className={`toggle-dot bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${type ? 'translate-x-7' : 'translate-x-0'}`}></div>
				</div>
				<div className="ml-2 font-medium">°C</div>
			</label>
		</div>
  	);
};

export default Switch;