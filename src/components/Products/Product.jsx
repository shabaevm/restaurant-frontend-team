import React from "react";

const Product = ({ name, img, price }) => {


  return (
      <div className="card col-md-3 col-sm-5 m-2 shadow-lg">
        <img src={img} className="card-img-top h-100 mt-2" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text fw-bold">{price}₽</p>
          <a href="#" className="btn btn-warning w-100">
            Заказать
          </a>
        </div>
    </div>
  );
};

export default Product;
