import React, { Component } from 'react';
import './Dashboard.css';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        products: [],
        newProduct: { title: '', description: '', price: '' },
        editingProduct: null,
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
        newProduct: {
            ...prevState.newProduct,
            [name]: value,
        },
        }));
    };

    handleAddProduct = () => {
        this.setState((prevState) => ({
        products: [...prevState.products, prevState.newProduct],
        newProduct: { title: '', description: '', price: '' },
        }));
    };

    handleEditProduct = (product) => {
        this.setState({ editingProduct: product });
    };

    handleSaveProduct = () => {
        const { products, editingProduct } = this.state;
        const editedProducts = products.map((product) =>
        product === editingProduct ? { ...editingProduct } : product
        );
        this.setState({ products: editedProducts, editingProduct: null });
    };

    handleDeleteProduct = (product) => {
        if (window.confirm('¿Seguro que desea eliminar este producto?')) {
        this.setState((prevState) => ({
            products: prevState.products.filter((p) => p !== product),
        }));
        }
    };

    render() {
        const { products, newProduct, editingProduct } = this.state;

        return (
        <div className="admin-dashboard">
            <h1 className='title-dash'>Dashboard de Administrador</h1>

            <div className="product-form">
            <h2>Agregar Producto</h2>
            <input
                type="text"
                name="title"
                placeholder="Título"
                value={newProduct.title}
                onChange={this.handleInputChange}
                className='iput-dash'
            />
            <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={newProduct.description}
                onChange={this.handleInputChange}
                className='iput-dash'
            />
            <input
                type="text"
                name="price"
                placeholder="Precio"
                value={newProduct.price}
                onChange={this.handleInputChange}
                className='iput-dash'
            />
            <button className='btndash' onClick={this.handleAddProduct}>Agregar</button>
            </div>

            <div className="product-list">
            <h2>Lista de Productos</h2>
            <table>
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>
                        {editingProduct === product ? (
                        <>
                            <button className='btndash' onClick={this.handleSaveProduct}>Guardar</button>
                            <button className='btndash' onClick={() => this.setState({ editingProduct: null })}>Cancelar</button>
                        </>
                        ) : (
                        <>
                            <button className='btndash' onClick={() => this.handleEditProduct(product)}>Editar</button>
                            <button className='btndash' onClick={() => this.handleDeleteProduct(product)}>Eliminar</button>
                        </>
                        )}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        );
    }
}

export default AdminDashboard;
