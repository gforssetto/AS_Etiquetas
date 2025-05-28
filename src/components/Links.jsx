import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



export default function Links() {
  return (
    <section className="contact-links">
      <ul>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Email:</p>
          <a href="mailto:asetiquetas@hotmail.com">asetiquetas@hotmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} />
          <p>WhatsApp:</p>
          <a href="https://wa.me/5511947863363" target="_blank" rel="noreferrer">
            +55 11 94786-3363
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
          <p>Instagram:</p>
          <a href="https://instagram.com/as_etiquetas" target="_blank" rel="noreferrer">
            @as_etiquetas
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <p>Telefone:</p>
          <a href="tel:+5511947863363">+55 11 94786-3363</a>
        </li>
      </ul>
    </section>
  );
}

