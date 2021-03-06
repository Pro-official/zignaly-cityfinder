import { useState } from "react";

const Inputs = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	const [suggestions, setSuggestions] = useState([]);

	const handleChange = async (event) => {
		setValue(event.target.value);
		try {
			const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?access_token=pk.eyJ1IjoiZ2Vibzk2IiwiYSI6ImNsMWY0NzczZzByZnQzcXFpanBpczBjcXQifQ.0w75NzO1o2vxGyuauC-vRA&autocomplete=true`;
			const response = await fetch(endpoint);
			const results = await response.json();
			setSuggestions(results?.features);
		} catch (error) {
			console.log("Error fetching data, ", error);
		}
	};

	return {
		value,
		onChange: handleChange,
		setValue,
		suggestions,
		setSuggestions,
	};
};

export default Inputs;
