import Nav from './Nav';
import Img from './ImgLogo'
import { useState } from 'react';

export default function Header(){

    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <header className="header">
            <button className={`menu-btn ${menuAberto ? 'ativo' : ''}`} onClick={() => setMenuAberto(!menuAberto)}>
            ☰
            </button>
            <div className={`mobile-menu ${menuAberto ? 'ativo' : ''}`}>
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Produtos</a></li>
                </ul>
            </div>
            <Nav menuAberto={menuAberto}/>
            <Img/>
        </header>
    );
}
