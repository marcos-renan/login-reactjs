import React from "react";
import {FaUser, FaLock} from "react-icons/fa"

const Login = () => {
  return (
    <div className="flex flex-col">
      <div className="container">
        <form action="">
          <h1>Acessar conta</h1>

          <div className="">
            <input type="email" placeholder="E-mail" />
            <FaUser className="icon" />
          </div>

          <div className="senha">
            <input type="password" placeholder="Senha" />
            <FaLock className="icon" />
          </div>

          <button className="">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
