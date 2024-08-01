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
        <div className="burguer-menu" onClick={handlerMenuClick}>
            <div className="burguer-bar"></div>
            <div className="burguer-bar"></div>
            <div className="burguer-bar"></div>
        </div>
        <div id="burguer-nav" className={isActive}>  
            <ul>
                <li><a href="">Test1</a></li>
                <li><a href="">Test2</a></li>
                <li><a href="">Test3</a></li>
                <li><a href="">Test4</a></li>
            </ul>
        </div>
    </>

}