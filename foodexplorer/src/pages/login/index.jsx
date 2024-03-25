import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../utils/constantes";
import { checkEmail, checkPass } from "../../utils/validate";
import "./style.css";

export function Login() {
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const navigate = useNavigate();


  function loginSubmit(event) {
    event.preventDefault();
    const element = event.target;

    if(isValid(element)){
      window.localStorage.setItem("auth", "true");
      navigate(location.pathname.replace("/", "/home"))
    }
  }

  function isValid(element) {
    setisEmail(false);
    setisPassword(false);

    if (
      !checkEmail(element.email.value) ||
      !checkPass(element.password.value)
    ) {
      if (!checkEmail(element.email.value)) {
        setisEmail(true);
      }
      if (!checkPass(element.password.value)) {
        setisPassword(true);
      }
      return false;
    }

    return true;
  }

  return (
    <main className="login container">
      <div className="logo">{Logo}</div>

      <form action="GET" onSubmit={loginSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          {isEmail && <i className={`error`}>Email incorreto!</i>}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            placeholder="No mínimo 6 caracteres"
          />
          {isPassword && <i className={`error`}>Senha incorreta!</i>}
        </div>
        <button className="primary" tipe="submit">
          Entrar
        </button>
        <Link to="/register" id="submit">
          Criar uma conta
        </Link>
      </form>
    </main>
  );
}
