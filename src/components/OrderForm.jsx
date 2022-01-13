import React, { useState } from 'react';
import '../css/OrderForm.css';

const OrderForm = ({ addOrder }) => {

    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const order = {
            sku,
            name,
            quantity,
            price
        };
        console.log(order);
        addOrder(order);
    };

    return (
        <>
            <h2 className='mg-btm-mb'>Create an order</h2>
            <form onSubmit={submit} className="products-form mg-btm-mb">
                <div className="input-container">
                    <label htmlFor="product-number">Number</label>
                    <input
                        type="number"
                        id="product-number"
                        onChange={(e) => setSku(e.target.value)}
                        value={sku}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="product-name">Name</label>
                    <input
                        type="text"
                        id="product-name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="product-quantity">Quantity</label>
                    <input
                        type="number"
                        id="product-quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="product-price">Price</label>
                    <input
                        type="number"
                        id="product-price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        required
                    />
                </div>

                <button className="submit-button">Submit</button>
            </form>
        </>
    )
}

export default OrderForm;
