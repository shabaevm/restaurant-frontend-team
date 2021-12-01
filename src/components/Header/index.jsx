import React from 'react';
import img_1 from '../../images/halal-logo.png'
import cl from './header.module.css'
import { useSelector } from 'react-redux';

const Header = () => {
	const loading = useSelector(state => state.tables.loading)
	return (
		<>
			{loading ? <div>Loading...</div> :
				<div className={cl.nav}>
					<div className={cl.wrapLogo}><img src={img_1} alt='' className={cl.logo}/></div>
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
						<li><i className={ `bi bi-box-arrow-in-right ${cl.imgRegistration}`}></i></li>
					</ul>
					
				</div>
			}
		</>
	)
};

export default Header;