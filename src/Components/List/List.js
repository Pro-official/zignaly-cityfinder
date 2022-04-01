import React from "react";
import Input from "../Inputs";
import "./list.css";

const List = ({ suggestion }) => {
	const address = Input("");
	return (
		<>
			<div>
				<p
					className='p-3 container list'
					onClick={() => {
						address.setValue(suggestion.place_name);
						address.setSuggestions([]);
					}}
				>
					{suggestion.place_name}
				</p>
			</div>
		</>
	);
};

export default List;
