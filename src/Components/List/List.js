import React, { useState } from "react";
import "./list.css";

const List = ({ suggestion }) => {
	const [value, setValue] = useState("");

	const handleChange = async (event) => {
		setValue(event.target.value);
		try {
			const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${suggestion.place_name
				.split(" ")[0]
				.replace(
					/,/g,
					""
				)}.json?access_token=pk.eyJ1IjoiZ2Vibzk2IiwiYSI6ImNsMWY0NzczZzByZnQzcXFpanBpczBjcXQifQ.0w75NzO1o2vxGyuauC-vRA`;
			const response = await fetch(endpoint);
			const results = await response.json();
			setValue(results.features);
			// console.log(value[0].center);
		} catch (error) {
			console.log("Error fetching data, ", error);
		}
	};

	return (
		<>
			<div>
				<p onClick={handleChange} className='p-3 container list'>
					{suggestion.place_name}
				</p>
			</div>
		</>
	);
};

export default List;
