import React from 'react';
import './Home.css';
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Categorias from "../Categorias/Categorias";
import BannerPublicidad from "../BannerPublicitario/BannerPublicitario";
import Brands from "../Brands/Brands";


function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="hero">
                <h2>Categorías</h2>
                <Categorias/>
                <Brands/>
            </div>
            <Products/>
            <BannerPublicidad/>
        </div>
        
    );
}

export default Home;
