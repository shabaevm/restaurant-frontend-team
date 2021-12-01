import React, { useState } from "react";
import cl from "./modal.module.css";
const Modals = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const handleChangeLogin = (ev) => {
    setLogin(ev.target.value);
  };

  const handleChangePassword = (ev) => {
    setPassword(ev.target.value);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Регистрация!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Логин:
                  </label>
                  <input
                    type="text"
                    className="form-control rounded  border-2"
                    id="recipient-name"
                    value={login}
                    onChange={handleChangeLogin}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label ">
                    Пароль:
                  </label>
                  <input
                    type="password"
                    className="form-control rounded border-2"
                    id="recipient-name"
                    value={password}
                    onChange={handleChangePassword}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Отмена
              </button>
              <button type="button" className="btn btn-success ">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;