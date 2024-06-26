import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDishContext } from "../../context";
import "./style.css";

export function Menu() {
  const { admin } = useDishContext();
  const navigate = useNavigate();
  
  function exitApp() {
    window.localStorage.removeItem("auth");
    navigate(window.location.pathname.replace("menu", ""));
  }

  return (
    <main className="menu container" style={{ minHeight: window.innerHeight - 240 }}>
      <div className="wrapper">
        <div className="icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.85593 1.61739C5.1902 0.725854 6.75888 0.25 8.3636 0.25H8.36365C10.5154 0.250137 12.5791 1.105 14.1006 2.62655C15.6222 4.14811 16.4771 6.21174 16.4772 8.36355V8.36359C16.4772 9.96831 16.0013 11.537 15.1098 12.8713C14.9533 13.1054 14.7853 13.3305 14.6065 13.5459L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7626 19.8232 18.4697 19.5303L13.5459 14.6065C12.9235 15.1232 12.224 15.5467 11.4685 15.8596C9.98597 16.4737 8.3546 16.6344 6.78071 16.3213C5.20683 16.0082 3.76113 15.2355 2.62642 14.1008C1.49171 12.9661 0.718969 11.5204 0.405904 9.94648C0.0928393 8.37259 0.253515 6.74122 0.867614 5.25866C1.48171 3.77609 2.52165 2.50892 3.85593 1.61739ZM8.36355 1.75C7.05552 1.75001 5.77687 2.13789 4.68928 2.86459C3.60168 3.5913 2.754 4.6242 2.25343 5.83268C1.75287 7.04116 1.6219 8.37093 1.87708 9.65384C2.13227 10.9368 2.76215 12.1152 3.68708 13.0401C4.61201 13.965 5.79044 14.5949 7.07335 14.8501C8.35626 15.1053 9.68604 14.9743 10.8945 14.4738C12.103 13.9732 13.1359 13.1255 13.8626 12.0379C14.5893 10.9503 14.9772 9.67167 14.9772 8.36364M8.3636 1.75C10.1176 1.75012 11.7997 2.44695 13.04 3.68721C14.2802 4.92748 14.9771 6.6096 14.9772 8.36359"
              fill="#C4C4CC"
            />
          </svg>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>
      <section className="search-results"></section>
      {admin && (
        <div className="option">
          <Link to="">Novo prato</Link>
        </div>
      )}
      <div className="option">
        <span onClick={exitApp}>Sair</span>
      </div>
    </main>
  );
}
