import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function NewDish() {
  return (
    <main className="new-dish container" style={{ minHeight: window.innerHeight - 191 }}>
      <div className="breadcrumb">
        <Link to="/home" id="return">{"<"} Voltar</Link>
      </div>

      <h1 className="title">Novo prato</h1>

      <form action="PUT">
        <div>
          <label htmlFor="image">Imagem do prato</label>
          <input
            className="admin"
            type="file"
            name="image"
            placeholder="Selecione imagem para alterá-la"
          />
        </div>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            className="admin"
            type="name"
            name="name"
            placeholder="Salada César"
          />
        </div>
        <div>
          <label htmlFor="category">Categoria</label>
          <select name="category">
            <option value="0">Refeição</option>
            <option value="1">Petisco</option>
            <option value="2">Jantar</option>
          </select>
        </div>
        <div>
          <label htmlFor="ingredients">Ingredientes</label>
          <input
            className="admin"
            type="text"
            name="ingredients"
            placeholder="Adicionar +"
          />
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <input
            className="admin"
            type="text"
            name="price"
            placeholder="R$ 40,00"
          />
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <textarea
            className="admin"
            name="price"
            placeholder="A Salada César é uma opção refrescante para o verão."
          />
        </div>
          <button className="primary-light save">Salvar alterações</button>
      </form>
    </main>
  );
}
