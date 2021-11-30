import React from 'react';
import Tables from '../Tables';
import Header from '../Header';
import Products from '../Products';

const HomePage = () => {
	return (
		<div className="bg-dark ">
			<Header />
			<Tables/>
			<Products />
		</div>
	);
};

export default HomePage;