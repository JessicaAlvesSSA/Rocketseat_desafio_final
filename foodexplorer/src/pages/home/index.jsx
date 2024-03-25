import { Header, Footer, Card } from "../../components/index";
import fruits from "../../assets/pngegg 2.png";
import "./style.css";

const DATA = [
  {
    nome: "Salada de legumes",
    preco: "R$ 49,97",
  },
  {
    nome: "Salada",
    preco: "R$ 49,97",
  },
  {
    nome: "Salada",
    preco: "R$ 49,97",
  },
  {
    nome: "Salada",
    preco: "R$ 49,97",
  },
  {
    nome: "Salada",
    preco: "R$ 49,97",
  },
  {
    nome: "Salada",
    preco: "R$ 49,97",
  },
  {
    nome: "Salada",
    preco: "R$ 49,97",
  },
];

export function Home() {

  return (
    <main className="home container" style={{ minHeight: window.innerHeight - 191 }}>
      <div className="home-banner">
        <img src={fruits} alt="Frutas espalhadas pelo banner" />
        <div className="banner-text">
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>

      <h2 className="home-section">Refeições</h2>

      <div className="card">
        {DATA.map((item, index) => (
          <Card dish={item} index={index} key={index}/>
        ))}
      </div>

      <h2 className="home-section">Pratos principais</h2>
      <div className="card">
        {DATA.map((item, index) => (
          <Card dish={item} index={index} key={index}/>
        ))}
      </div>

      <h2 className="home-section">Pratos principais</h2>
      <div className="card">
        {DATA.map((item, index) => (
          <Card dish={item} index={index} key={index}/>
        ))}
      </div>
    </main>
  );
}
