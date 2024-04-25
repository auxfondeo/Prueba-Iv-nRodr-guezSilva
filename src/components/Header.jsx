import React, { useState } from 'react';

import { getCitiesByName } from '../logic/functions.js';
import Switch from '../components/Switch'

const Header = ({setType, type, location, searchText, setSearchText, setIsLoading, setCitites}) => {
	const [isValid, setIsValid] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault(); 
		if (isValid) {
			setIsLoading(true); 
			getCitiesByName(searchText, setCitites, setIsLoading)
		}	
	};
	const handleInputChange = (event) => {
		const { value } = event.target;
		setSearchText(value)
		setIsValid(value.length >= 3);

	};


	return (
		<header className="sm:flex items-center justify-around">
        	<Switch setType={setType} type={type}></Switch>
			<div className="lg:flex items-center gap-4 w-2/3">
				<div className="flex items-center">
					<h1 className="font-bold text-4xl">WheaterApp</h1>
					<img src="https://openweathermap.org/img/wn/10d@2x.png"></img>
				</div>
				<div>
					<p className="text-left">Tu ubicación</p>
					<h2 className="text-lg font-bold text-left max-w-md break-words">{location}</h2>
				</div>
			</div>
			<div className="md:w-1/3 my-3 md:my-0">
				<p className="text-left mb-2">Buscar por ciudad</p>
				<form className='flex gap-2' onSubmit={handleSubmit}>
					<input
						type="text"
						value={searchText}
						onChange={handleInputChange}
						placeholder="Monterrey, Nuevo León..."
						className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
					/>
					<button type="submit" className="px-4 py-2 border border-slate-500 bg-slate-700 p-4 rounded-md transition-colors duration-300 hover:bg-slate-800 cursor-pointer">Buscar</button>
				</form>
				{!isValid && (
					<p className='text-start text-sm mt-1 text-red-200'>Debe contener al menos 3 caracteres</p>
				)}
			</div>
		</header>
			
	)
}

export default Header;