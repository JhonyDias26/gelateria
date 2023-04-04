import React from "react";
import './footer.css';
const Footer = () => (
    <footer>
        <div className="footer">
            <figure className="box-footer">
                <img src="assets/logo.png" className="img-footer" />
            </figure>
            <div className="box-footer">
                <h4>ENDEREÇO</h4>
                <p>Av. Bernardino de Campos, 98
                    <p>São Paulo, SP 12345-678</p>
                </p>
            </div>
            <div className="box-footer">
                <h4>CONTATO</h4>
                <p>info@meusite.com Tel: (11) 3456-7890</p>
            </div>
            <div className="box-footer">
                <h4>HORÁRIOS</h4>
                <p>ABERTO TODOS OS DIAS 10:00 - 22:00</p>
            </div>
        </div>
        <p className="rodape-footer">Gelateria. Desenvolvido por  <a href="https://www.linkedin.com/in/jhony-dias/" target='_blank'>Jhony Dias</a></p>
    </footer>
);
export default Footer;