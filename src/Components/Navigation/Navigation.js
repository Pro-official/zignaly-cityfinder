import React from "react";
import "./Navigation.css";
import logo from "../../images/rocket-logo.svg";

const Navigation = () => {
	return (
		<div>
			<nav className='navbar navbar-light mt-2'>
				<div className='container d-flex align-items-center'>
					<a
						href='/'
						className='navbar-brand d-flex align-items-center fw-bold'
					>
						<img
							src={logo}
							alt=''
							width='50'
							height='34'
							className='d-inline-block align-text-top'
						/>
						Zignaly
					</a>
					<a className='text-decoration-none text-black signup' href='/signup'>
						<button className='bg-transparent px-3 py-2 rounded-3 border border-3 border-dark fw-bold'>
							SIGN UP
						</button>
					</a>
				</div>
			</nav>
			<hr className='container border border-3' />
		</div>
	);
};

export default Navigation;
