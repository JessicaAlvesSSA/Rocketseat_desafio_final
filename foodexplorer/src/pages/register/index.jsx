import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../utils/constantes";
import "./style.css";
import { checkName, checkEmail, checkPass } from "../../utils/validate";

export function Register() {
  const [isName, setisName] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const navigate = useNavigate();

  function registerSubmit(event) {
    event.preventDefault();
    const element = event.target;

    if(isValid(element)){
      alert("Cadastro efetuado com sucesso!");
      navigate(window.location.pathname.replace("register", ""));
    }
  }

  function isValid(element) {
    setisName(false);
    setisEmail(false);
    setisPassword(false);

    if (!checkName(element.name.value) ||
      !checkEmail(element.email.value) ||
      !checkPass(element.password.value)
    ) {
      if (!checkName(element.name.value)) {
        setisName(true);
      }
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
    <main className="register container">
      <div className="logo">
        {Logo}
      </div>

      <form action="POST" onSubmit={registerSubmit}>
        <div>
          <label htmlFor="name">Seu nome</label>
          <input
            type="name"
            name="name"
            placeholder="Exemplo: Maria da Silva"
          />
          {isName && <i className={`error`}>Nome precisa ter mais de 3 caracteres!</i>}
        </div>
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
          {isPassword && <i className={`error`}>Senha necessita de 6 digitos ou mais!</i>}
        </div>
        <button className="primary">Criar conta</button>
        <Link to="/" id="submit">Já tenho uma conta</Link>
      </form>
    </main>
  );
}
