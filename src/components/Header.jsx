import Nav from './Nav';
import Img from './ImgLogo'
import { useState } from 'react';

export default function Header(){

    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <header className="header" id='home'>
            <button className={`menu-btn ${menuAberto ? 'ativo' : ''}`} onClick={() => setMenuAberto(!menuAberto)}>
            ☰
            </button>
            <div className={`mobile-menu ${menuAberto ? 'ativo' : ''}`}>
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#sobre">Sobre nós</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                </ul>
            </div>
            <Nav menuAberto={menuAberto}/>
            <Img/>
        </header>
    );
}
