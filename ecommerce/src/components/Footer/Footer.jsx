import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>       
        <section className="da">
		<footer className="footer-prin">
            <div className="categorias-footer">
                <h1 className="title-fprin">ECOMMERCE</h1>
                <h1 className="title-secundario">Contacto:</h1>
                <a className="categorias-contacto">503 2624 2023</a>
                <h1 className="title-secundario">Correo Electrónico:</h1>
                <a className="categorias-contacto">ecommerce@ecommerce.com</a>
                <div className="icon-bar">
                    <a href="#" target="_blank" className="selected">
                        <i className="bi bi-facebook"></i>
                    </a>
                
                    <a href="#" className="selected">
                        <i className="bi bi-instagram"></i>
                    </a>
                
                </div>
            </div>
            
            <div className="categorias-footer">
                <h1 className="title-fprin">INFORMACIÓN</h1>
                <a href="#" className="categorias-info">Acerca de nosotros</a>     
                <a href="#" className="categorias-info">Nuestras tiendas</a>
                <a href="#" className="categorias-info">Preguntas frecuente</a> 
            </div>
    
            <div className="categorias-footer">
                <h1 className="title-fprin">CATEGORÍAS</h1>
                <a href="shoeswomen.html" className="categorias-info">Mujer</a>             
                <a href="manshoes.html" className="categorias-info">Hombre</a>
                <a href="kidsshoes.html" className="categorias-info">Niños/as</a>
            </div>
            
            <div className="categorias-footer">
                <h1 className="title-fprin">AYUDA</h1>
                <a href="#" className="categorias-info">Condiciones de uso</a>
                <a href="#" className="categorias-info">Políticas de Privacidad</a>
                <a href="#" className="categorias-info">Garantías y cambios</a>
            </div>
    
        </footer>
        </section>

        <section className="da"> 
                <footer className="footer">
                    <div className="footer-info">
                        <h4 className="creditos">&copy; 2023 ECOMMERCE. Todos los derechos reservados | Desarrollado por Miguelina Villatoro</h4>
                    </div>
                </footer>
        </section>
        </div>
    );
}

export default Footer;
