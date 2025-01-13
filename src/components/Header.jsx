
import Nav from './Nav';

export default function Header(){
    return (
        <header className="header">
            <section className="header-section">
                <Nav />
            </section>
            <img src="/imgs/as_logo_nb.png" alt="Company Logo" className="header-logo" />
        </header>
    );
}
