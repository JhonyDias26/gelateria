import React from "react";
import { Link } from "react-router-dom";
import Topo from '../../componentes/Topo';
import Footer from '../../componentes/Footer';
import './sobre.css';
const Sobre = () => (
    <div>
        <Topo />
        <main>
            <section className="sobre-baner">
                <h1>A GELATERIA</h1>
            </section>
            <section className="sobre-pg-sobre">
                <h2>Sobre Nós</h2>
                <h3>Nós simplesmente amamos sorvete!</h3>
                <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </section>
            <figure className="img-final-sobre">
                <img src="/assets/sobre-image.jpg"></img>
                <img src="/assets/sorveteria.jpg"></img>
            </figure>
        </main>
        <Footer />
    </div>
    );
export default Sobre;