import React from "react";
import { Link } from "react-router-dom";
import './topo.css';
function Topo (){
    return(
        <div className="box-topo">
            <header>
                <figure><Link to='/'><img src="assets/logo.png"/></Link></figure>
                <nav>
                    <Link to='/' className="links">Home</Link>
                    <Link to='/PaginaSabores' className="links">Sabores</Link>
                    <Link to='/PaginaSobre' className="links">Sobre</Link>
                </nav>
            </header>
        </div>
    );
}
export default Topo;