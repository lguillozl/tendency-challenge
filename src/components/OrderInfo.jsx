import React from 'react';
import Swal from 'sweetalert2';

const OrderInfo = ({ order }) => {

    const handleSubmit = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your order has been paid',
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className='column'>
            <div className="card">
                <p className='order'><b>Order</b> #{order.id}</p>
                <div className="attriubte">
                    <p className='mg-btm-sm'>Number: {order.items[0].sku}</p>
                    <p className='mg-btm-sm'>Name: {order.items[0].name}</p>
                    <p className='mg-btm-sm'>Quantity: {order.items[0].quantity}</p>
                    <p className='mg-btm-md'>Price: ${order.items[0].price}</p>
                    <div className='btn-container'>
                        <button className='btn' onClick={handleSubmit}>Complete Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo
