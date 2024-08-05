import BurguerMenu from './BurguerMenu';
import Nav from './Nav';

export default function Header(){
    return <header>
            <section>
            <BurguerMenu />
            <Nav />
            </section>
            <img src="/imgs/as_logo_nb.png" alt="logo" />
    </header>
}