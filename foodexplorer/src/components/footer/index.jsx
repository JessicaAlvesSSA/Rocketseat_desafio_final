import logoFooter from "../../assets/logo-footer.svg";
import "./style.css"

export function Footer() {
    return (
        <footer>
            <img src={logoFooter}  alt="logo food explorer" />
            <p>© 2023 - Todos os direitos reservados.</p>
        </footer>
    );
}