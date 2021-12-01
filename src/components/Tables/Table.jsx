import React, { useState } from "react";
import cl from "./table.module.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modals from "../Modals/index";
const Table = ({ tableNumber, tableCapacity }) => {
  return (
    <div className="card col-sm-5 m-2 shadow p-3 mb-5 bg-body rounded ">
      <img
        src="http://dekormyhome.ru/wp-content/uploads/2018/03/table__5.jpg"
        className="card-img-top rounded-3"
        alt="tablePicture"
      />
      <div className="card-body">
        <h4 className="card-title fst-italic fs-5">
          Номер столика: {tableNumber}
        </h4>
        <h4 className="card-title  fst-italic fs-5">
          Стульев: {tableCapacity}
        </h4>
        <button
          href="#"
          className="btn btn-outline-danger w-100"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@getbootstrap"
        >
          ЗАБРОНИРОВАТЬ
        </button>
      </div>
      <Modals />
    </div>
  );
};

export default Table;