import React from "react";
import { Link } from "react-router-dom";
import Topo from "../../componentes/Topo";
import './secao-home.css';
import './secao-sabores.css';
import './secao-eventos.css';
import './secao-sobre.css';
import Footer from "../../componentes/Footer";
const Home = () => (
    <div>
        <Topo />
        <main>
            <section className="secao-banner">
                <div className="texto-banner">
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>
            <section className="secao-sabores">
                <section className="img-sabores">
                    <img src="assets/banner-sabores.jpg" />
                </section>
                <section className="texto-sabores">
                    <h2>NOSSOS SABORES</h2>
                    <h4>Novos e Deliciosos!</h4>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes!</p>
                    <p>Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Tambem temos opções sem lactose e sem açucar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </section>
            </section>
            <section className="secao-eventos">
                <section className="texto-eventos">
                    <h2>NOSSOS EVENTOS</h2>
                    <h4>Delicias com sorvete!</h4>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa!</p>
                    <p>Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </section>
                <section className="img-eventos">
                    <img src="assets/eventos-image.jpg" />
                </section>
            </section>
            <section className="secao-sobre">
                <section className="img-sobre">
                    <img src="assets/sobre-image.jpg" />
                </section>
                <section className="texto-sobre">
                    <h2>SOBRE NÓS</h2>
                    <h4>Alegria em cada casquinha!</h4>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente!</p>
                    <p>Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                    </p>
                </section>
            </section>
        </main>
        <Footer />        
    </div >
);
export default Home;