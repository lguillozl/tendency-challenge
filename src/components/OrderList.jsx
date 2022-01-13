import React from 'react'
import OrderInfo from './OrderInfo'

const OrderList = ({ order }) => {
    return (
        <>
            <h2 className='order-list__title'>Orders</h2>
            <div className='order-list container'>
                {
                    order.orders?.map((order) => (
                        <OrderInfo order={order} key={order.items.id} />
                    ))
                }
            </div>
        </>
    )
}

export default OrderList
