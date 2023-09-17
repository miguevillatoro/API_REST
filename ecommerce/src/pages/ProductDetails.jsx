import React, { useState, useRef, useEffect } from 'react';
import './ProductDetails.css';

function ProductDetails() {
        const [quantity, setQuantity] = useState(1);

        const handleQuantityChange = (event) => {
            // Aquí puedes agregar validación si es necesario para asegurarte de que la cantidad sea un número válido.
            setQuantity(event.target.value);
        };

        const [imgId, setImgId] = useState(1);
        const [displayWidth, setDisplayWidth] = useState(0);
        const imgShowcaseRef = useRef(null);

        const updateDisplayWidth = () => {
            if (imgShowcaseRef.current) {
            const newDisplayWidth = imgShowcaseRef.current.clientWidth;
            setDisplayWidth(newDisplayWidth);
            }
        };

        const handleImageClick = (event, id) => {
            event.preventDefault();
            setImgId(id);
        };

        const slideImage = () => {
            if (imgShowcaseRef.current) {
            imgShowcaseRef.current.style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
            }
        };

        useEffect(() => {
        updateDisplayWidth();
        window.addEventListener('resize', updateDisplayWidth);

        return () => {
        window.removeEventListener('resize', updateDisplayWidth);
        };
    }, []);

    useEffect(() => {
        slideImage();
    }, [imgId, displayWidth]);

    return (
        <div>
            <div className = "card-wrapper">
                <div className = "card">
                    <div className="product-imgs">
                        <div className="img-display">
                        <div className="img-showcase" ref={imgShowcaseRef}>
                            <img src="src/img/Product-1.jpg" alt="shoe image" />
                            <img src="src/img/Product-2.jpg" alt="shoe image" />
                            <img src="src/img/Product-3.jpg" alt="shoe image" />
                            <img src="src/img/Product-4.jpg" alt="shoe image" />
                        </div>
                        </div>
                        <div className="img-select">
                        <div className="img-item">
                            <a href="#" data-id="1" onClick={(event) => handleImageClick(event, 1)}>
                            <img src="src/img/Product-1.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id="2" onClick={(event) => handleImageClick(event, 2)}>
                            <img src="src/img/Product-2.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id="3" onClick={(event) => handleImageClick(event, 3)}>
                            <img src="src/img/Product-3.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div className="img-item">
                            <a href="#" data-id="4" onClick={(event) => handleImageClick(event, 4)}>
                            <img src="src/img/Product-4.jpg" alt="shoe image" />
                            </a>
                        </div>
                    </div>
                </div>      
                <div className = "product-content">
                    <h2 className = "details-title">Sueter</h2>
                    <a href = "#" className = "product-link">Otros productos</a>
                    <div className = "product-rating">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                        <span>4.7(20)</span>
                    </div>
                    <div className = "product-price">
                        <p className = "last-price">Precio: <span>$25.00</span></p>
                        <p className = "new-price">Oferta: <span>$20.00</span></p>
                    </div>
                    <div className = "product-detail">
                        <h2>Detalles: </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                        <ul>
                        <li>Color: <span>Negro, amarillo y blaco</span></li>
                        <li>Disponible: <span>en stock</span></li>
                        <li>Categoría: <span>Mujeres</span></li>
                        <li>Zona de envío: <span>Todo el mundo</span></li>
                        <li>Gastos de envío: <span>Gratis</span></li>
                        </ul>
                    </div>
                    <div className="purchase-info">
                        <input
                        type="number"
                        min="0"
                        onChange={handleQuantityChange}
                        value={quantity}
                        />
                        <button type="button" className="btn">
                        Agregar al carrito <i className="bi bi-cart2"></i>
                        </button>
                    </div>
                    <div className = "social-links">
                        <p>Compartir en: </p>
                        <a href = "#">
                        <i className="bi bi-facebook"></i>
                        </a>
                        <a href = "#">
                        <i className="bi bi-twitter"></i>
                        </a>
                        <a href = "#">
                        <i className="bi bi-instagram"></i>
                        </a>
                        <a href = "#">
                        <i className="bi bi-whatsapp"></i>
                        </a>
                        <a href = "#">
                        <i className="bi bi-pinterest"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    );
}

export default ProductDetails;