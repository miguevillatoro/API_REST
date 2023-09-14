/* import React from "react";

const Home = () => {
    return (
        <div>Home</div>
    )
}

export default Home; */

import React from 'react';
import './Home.css';
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Categorias from "../Categorias/Categorias";
function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="hero">
                <h2>Categorías</h2>
                <Categorias/>
            </div>
            <Products/>
        </div>
        
    );
}

export default Home;
