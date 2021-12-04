import React, { useState } from "react";
import bagIcon from './cart.svg'
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartBody from "./CartBody";

const Cart = () => {
  const cart = useSelector((state) => state.tables.cart)
  const [opened, setOpened] = useState(false);
  const bookedTable = useSelector((state) => state.tables.bookedTable)
  const token = useSelector((state) => state.auth.token);
  const tables = useSelector((state) => state.tables.items)
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpened(!opened);
  };

  const handleDeleteBookedTable = (id) => {
    dispatch({ type: "DELETE_BOOKED_TABLE", payload: id });
  };

  return (
    <div className={styles.cartDivo}>
      {token && (<div className={styles.cartButton} onClick={handleOpen}>
        <img src={bagIcon} alt="" />
        {(cart.cartItems.length !== 0 || bookedTable.length !== 0) && <span>{bookedTable.length}-{cart.cartItems.length}</span>}
      </div>)}
      {opened && (
        <div className={styles.wrapper}>
          <span onClick={handleOpen} className={styles.closeButton}>
            закрыть
          </span>
          <span className={styles.labels}>Номера бронируемых столов:</span><br/>
          <div className={styles.bookedTables}>
            {bookedTable.length === 0 ? (
                <div className={styles.red}>Выберите стол(-ы)</div>
              ) : (

              bookedTable.map((bTable) => {
              const tbl = tables.find((table) => table._id === bTable)
              return <button onClick={() => handleDeleteBookedTable(bTable)} className='btn btn-sm btn-outline-info'>{tbl.tableNumber}</button>
            }))}
          </div>
          <br/>
          <span className={styles.labels}>Блюда:</span><br/>
          {cart.cartItems.length === 0 ? (
            <div className={styles.red}>Выберите желаемые блюда</div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th> </th>
                  <th>Блюдо</th>
                  <th>Кол-во</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <CartBody />
              </tbody>
            </table>
          )}

          {cart.cartItems.length !== 0 && bookedTable.length !== 0 &&
          (<div className={styles.nextWrapper}>
            <button className='btn btn-primary'>Далее</button>
          </div>)}
        </div>
      )}
    </div>
  );
};

export default Cart;
