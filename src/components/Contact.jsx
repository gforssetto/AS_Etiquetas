export default function Contact() {
    return (
        <section className="contact">
            <h2>Entre em Contato</h2>
            <form
                className="contact-form"
                action="https://formspree.io/f/movdwapz" 
                method="POST"
            >
                <input type="text" name="name" placeholder="Nome" required />
                <input type="email" name="email" placeholder="E-mail" required />
                <textarea name="message" placeholder="Sua mensagem" required></textarea>
                <button type="submit">Enviar</button>
                </form>
        </section>
    );
}
