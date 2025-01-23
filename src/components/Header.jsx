import Nav from './Nav';
import HamburguerMenu from './HamburguerMenu'

export default function Header(){
    return (
        <header className="header">
            <Nav/>
            <HamburguerMenu/>
        </header>
    );
}
