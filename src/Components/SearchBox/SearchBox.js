import React from "react";
import "./searchbox.css";
import Input from "../Inputs";
import List from "../List/List";

const SearchBox = () => {
	const address = Input("");

	return (
		<>
			<div className='search-box'>
				<input type='text' placeholder='Enter city name...' {...address} />
				<svg
					className='fas'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
						clipRule='evenodd'
					></path>
				</svg>
			</div>
			{address.suggestions?.length > 0 && (
				<div className='list-container'>
					{address.suggestions.map((suggestion, index) => {
						return <List suggestion={suggestion} key={index}></List>;
					})}
				</div>
			)}
		</>
	);
};

export default SearchBox;
