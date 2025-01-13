
export default function Nav() {
    return (
        <nav className="main-nav" aria-label="Main Navigation">
            <ul className="nav-list">
                <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#sobre" className="nav-link">Sobre Nós</a></li>
                <li className="nav-item"><a href="#produtos" className="nav-link">Nossos Produtos</a></li>
                <li className="nav-item"><a href="#contato" className="nav-link">Contato</a></li>
            </ul>
        </nav>
    );
}
