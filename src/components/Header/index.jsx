import React from 'react';
import img_1 from '../../images/halal-logo.png'
import cl from './header.module.css'
import { useSelector } from 'react-redux';

const Header = () => {
	const loading = useSelector(state => state.tables.loading)
	return (
		<>
			{loading ? <div>Loading...</div> :
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
							<i className={ `bi bi-box-arrow-in-right ${cl.imgRegistration}`}></i>
						</div>
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
				</div>
			}
		</>
	)
};

export default Header;