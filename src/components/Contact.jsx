export default function Contact() {
    return (
        <section className="contact">
            <h2>Entre em Contato</h2>
            <form className="contact-form">
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="E-mail" required />
                <textarea placeholder="Sua mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}
