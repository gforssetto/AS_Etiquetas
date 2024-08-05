import { useState } from "react"

export default function BurguerMenu (){

    const [ isClicked , setIsClicked ] = useState(false);

    let isActive = 'displayFalse';

    if(isClicked){
        isActive = 'displayTrue';
    }

    function handlerMenuClick(){

        let click = isClicked

        setIsClicked(!click);
    }

    return <>
    <div id="hamburguer-menu" className={isActive}>
        <div className="burguer-menu" onClick={handlerMenuClick}>
            <div className="burguer-bar"></div>
            <div className="burguer-bar"></div>
            <div className="burguer-bar"></div>
        </div>
        <div id="burguer-nav" >  
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre Nos</a></li>
                <li><a href="#produtos">Nossos produtos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </div>
    </div>
        
    </>

}