import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cl from "./modal.module.css";
import {authUser, createUser} from '../../redux/features/Auth'

const Modals = () => {
	const dispatch = useDispatch()

	const signing = useSelector(state => state.auth.signing)
	const error = useSelector(state=> state.auth.error)
	const token = useSelector(state => state.auth.token)

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
	const [changeModal, setChangeModal] = useState(false)

  const handleChangeLogin = (ev) => {
    setLogin(ev.target.value);
  };

  const handleChangePassword = (ev) => {
    setPassword(ev.target.value);
  };

	const handleSubmit = () => {
		dispatch(createUser(login, password))
		setLogin('')
		setPassword('')
	}

	const handleAuth = () => {
		dispatch(authUser(login, password))
		setLogin('')
		setPassword('')
	}

	const handleChangeModal = () =>{
		setChangeModal(!changeModal)
	}
  return (
		<div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
				{changeModal ? 
				<div className="modal-dialog">
				<div className="modal-content">
					<span>{error}</span>
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Авторизация!
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
					<div className="modal-footer" >
						<button
							type="button"
							className="btn btn-secondary"
							disabled={signing}
							onClick={handleChangeModal}
						>
							Зарегистрироваться
						</button>
						<button type="button" className="btn btn-success " onClick={handleAuth}  data-bs-dismiss={token ? "modal" : ""}>
								Войти
						</button>
					</div >
				</div>
			</div>
			:
			<div className="modal-dialog">
          <div className="modal-content">
						<span>{error}</span>
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
								disabled={signing}
								onClick={handleChangeModal}
              >
                Вы уже зарегистрированы?
              </button>
              <button type="button" className="btn btn-success " onClick={handleSubmit}>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
			}
      </div>
    </div>
	)
};

export default Modals;