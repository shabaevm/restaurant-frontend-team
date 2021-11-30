import React, { useEffect } from 'react';
import cl from './product.module.css'
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/features/Product';

const Products = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.productsList);
	console.log(products)

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	return (
		<div className="container">
			<div className="row justify-content-around">
				{products.map((product) => {
				return (
					<Product
						key={product._id}
						img={product.img}
						name={product.name}
						price={product.price}
					/>

				);
			})}
			</div>
		</div>
	);
};

export default Products;