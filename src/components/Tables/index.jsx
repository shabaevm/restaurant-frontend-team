import React, { useEffect } from 'react';
import cl from './table.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import { loadTables } from '../../redux/features/Table';

const Tables = () => {
	const dispatch = useDispatch();
	const tables = useSelector(state => state.tables.items)

	useEffect(() => {
		dispatch(loadTables())
	}, [dispatch])


	return (

		<div className="container bg-dark " id='bottom'>
		<div className="row justify-content-around ">
			{tables.map((item) => {
				return(
					<Table key={item._id} tableNumber={item.tableNumber} tableCapacity={item.tableCapacity}/>
				)
			})
			}
		</div>


		</div>
	);
};

export default Tables;