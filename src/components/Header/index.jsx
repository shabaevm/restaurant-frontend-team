import React from 'react';
import Categories from '../Categories';
import cl from './header.module.css'

const Header = () => {
	return (
		<div className={cl.wrap}>
			<Categories />
		</div>
	);
};

export default Header;