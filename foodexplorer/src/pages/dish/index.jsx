import { useState } from "react";
import { Header, Footer } from "../../components/index";
import salada from "../../assets/Mask group.png";
import anyLess from "../../assets/-.png";
import more from "../../assets/+.png";
import cart from "../../assets/cart.png";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDishContext } from "../../context";

export function Dish() {
  const [qtt, setQtt] = useState(1);
  const { dish, admin } = useDishContext();
  const navigate = useNavigate();

  function increment() {
    setQtt(qtt + 1);
  }

  function decrement() {
    if (qtt === 1) {
      return "";
    }
    setQtt(qtt - 1);
  }

  function editDish() {
    navigate(window.location.pathname.replace("dish", "edit"));
  }

  return (
    <main className="dish container" style={{minHeight: window.innerHeight - 191}}>
      <div className="breadcrumb">
        <Link to="/home">{"<"} Voltar</Link>
      </div>
      <img
        className="dish-example"
        src={salada}
        alt="Imagem ilustariva do prato de salada."
      />

      <div className="dish-details">
        <h1>{dish.nome}</h1>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
        </p>

        <div className="ingredients">
          <span>alface</span>
          <span>cebola</span>
          <span>pão naan</span>
          <span>pepino</span>
          <span>rabanete</span>
          <span>tomate</span>
        </div>
      </div>
      { admin ?
        <button className="dish-add-to-cart primary editar" onClick={editDish}>
          <span>Editar prato</span>
        </button>
      :
      <div className="dish-footer">
        <div className="dish-qtt">
          <button type="button" onClick={decrement}>
            <img src={anyLess} alt="botão de menos" />
          </button>
          <input type="text" value={qtt} disabled />
          <button type="button" onClick={increment}>
            <img src={more} alt="botão de mais" />
          </button>
        </div>
        <button className="dish-add-to-cart primary">
          <img src={cart} alt="acessar itens no carrinho" />
          <span>pedir ∙ {dish.preco}</span>
        </button>
      </div>}
    </main>
  );
}
