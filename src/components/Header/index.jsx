import React from 'react';
import img_1 from '../../images/halal.png'
import img_2 from '../../images/regisrt-photo.png'
import cl from './header.module.css'

const Header = () => {
	return (
		<div className={cl.header}>
			<div className={cl.container}>
				<div className={cl.nav}>
					<img src={img_1} alt='' className={cl.logo}/>
					<ul className={cl.menu}>
						<li>
							<a className={cl.elementMenu} href='#'>
								О ресторане
							</a>
						</li>
						<li>
							<a className={cl.elementMenu} href="#">
								Контакты
							</a>
						</li>
					</ul>
				<img className={cl.elementMenu} id={cl.imgRegistration} src={img_2}/>
			</div>
				<div className={cl.offer}>
					<h1>
						WELCOME
					</h1>
					<p>Halal - ощущения, за которыми стоит охотиться!</p>
					<li>
					<a href="#" className={cl.btn}>Забронировать</a>
					<span>⬇ ⬇ ⬇</span>
					</li>
				</div>
			</div>
		</div>
	);
};

export default Header;