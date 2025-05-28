export default function Services() {
    return (
        <section className="services" id="produtos">
            <h2>Nossos Produtos</h2>
            <div className="services-container">
                <div className="service-card">
                    <div className="img-wrapper">
                        <img src="/imgs/termica.jpeg" alt="Serviço 1" />
                    </div>
                    <h3>Etiquetas de Balança Térmica</h3>
                    <p>Ideais para supermercados e padarias, garantem impressões nítidas e duradouras.</p>
                </div>
                <div className="service-card">
                    <div className="img-wrapper">
                        <img src="/imgs/lacre2.png" alt="Serviço 2" />
                    </div>
                    
                    <h3>Etiquetas de lacre para Entrega</h3>
                    <p>Etiqueta lacre de segurança para embalagens de entrega, ideal para delivery.</p>
                </div>
                <div className="service-card">
                    <div className="img-wrapper">
                        <img src="/imgs/ribbon.jpeg" alt="Serviço 3" />
                    </div>
                    <h3>Ribbons para Impressão</h3>
                    <p>Alta qualidade para impressoras térmicas, oferecendo durabilidade e acabamento profissional.</p>
                </div>
            </div>
        </section>
    );
}
