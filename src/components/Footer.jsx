export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
            <ul>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Termos de Serviço</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </footer>
    );
}
