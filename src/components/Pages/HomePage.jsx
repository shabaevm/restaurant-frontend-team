import React from 'react';
import Tables from '../Tables';
import Header from '../Header';
import Products from '../Products';
import Footer from '../Footer';
import cl from '../Header/header.module.css'

const HomePage = () => {
	return (
		<div className="bg-dark ">
			<div className={cl.homePageImage}>
				<Header />
				<div className={cl.offer}>
					<h1>
						WELCOME
					</h1>
					<p>Halal - ощущения, за которыми стоит охотиться!</p>
					<li>
						<a href="#bottom" className={cl.btn}>Забронировать</a>
						<div className={cl.arrow}></div>
					</li>
				</div>
			</div>
			<Tables/>
			<Products />
			<Footer />
		</div>
	);
};

export default HomePage;