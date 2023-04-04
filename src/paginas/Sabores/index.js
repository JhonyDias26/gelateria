import React from "react";
import { Link } from "react-router-dom";
import Topo from '../../componentes/Topo';
import footer from '../../componentes/Footer';
import Footer from "../../componentes/Footer";
import './baner-sabores.css';
const Sabores = () => (
    <div>
        <Topo />
        <main>
            <section className="img-principal">
                <h1 className="texto-baner">NOSSOS SABORES</h1>
            </section>
            <h2 className="titulo-box">SABORES DE SORVETE</h2>
            <section className="secao-pag-sabores">
                <div className="box-sabores">
                    <img src="/assets/sabor-oreo.png" />
                    <h3>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor oreo. Uma explosão de sabor.</p>
                </div>
                <div className="box-sabores">
                    <img src="/assets/sabor-pistache.png"></img>
                    <h3>Sorvete de Pistache</h3>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>
                <div className="box-sabores">
                    <img src="/assets/sabor-cookies-avela.png"></img>
                    <h3>Sorvete de Cookies & Avelã</h3>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>
                <div className="box-sabores">
                    <img src="/assets/sabor-kiwi.png"></img>
                    <h3>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>
                <div className="box-sabores">
                    <img src="/assets/sabor-morango.png"></img>
                    <h3>Sorvete de Morango</h3>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
                <div className="box-sabores">
                    <img src="/assets/sabor-limao.png"></img>
                    <h3>Sorvete de Limão</h3>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);
export default Sabores;