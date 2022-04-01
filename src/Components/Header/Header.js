import React from "react";
import image from "../../images/location.svg";
import "./Header.css";

const Header = () => {
	return (
		<div className='header-container'>
			{/* <SearchBox /> */}

			<div className='header-image'>
				<img src={image} alt='' />
			</div>
		</div>
	);
};

export default Header;
