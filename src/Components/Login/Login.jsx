import React from "react";
import {FaUser, FaLock} from "react-icons/fa"

const Login = () => {
  return (
    <div >
      <div className="container">
        <form action="">
          <h1>Acessar conta</h1>

          <div className="email">
            <input type="email" placeholder="E-mail" />
            <FaUser className="icon" />
          </div>

          <div className="senha">
            <input type="password" placeholder="Senha" />
            <FaLock className="icon" />
          </div>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
