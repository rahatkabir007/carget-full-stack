import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {

    const { user } = useAuth();
   
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    if (orders.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel your order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                        alert("Your Order Has Been Cancelled");
                    }
                })
        }

    }

    const matched = orders.filter(order => order.email === user.email);


    return (
        <div className='myorders'>
            <div>
                <h2>Your Orders: {matched?.length}</h2>
            </div>
            <div className="orders-section" id="orders">
                <h1 className="text-center">{user?.displayName}'s Orders</h1>
                <hr />
                <div className="container my-orders my-4">
                    <div className="row">
                        {
                            matched.map(order => <div className="col-md-6 col-lg-6 col-xxl-4 service-section mt-3">
                                <div className="card service-card h-100 mx-auto " style={{ width: "22rem" }}>
                                    <img src={order?.image} className="card-img-top " style={{ height: "15rem" }} alt="..." />
                                    <div className="card-body text-center service-text">
                                        <h2 className="card-title">{order?.carName}</h2>
                                        <p className="card-text" id="description">{order?.description}</p>

                                        <p className="card-text" id="price">Price:  {order?.price}$</p>
                                    </div>
                                    <div className="text-center pb-3">
                                        {order?.status === "PENDING" ? <button className="btn btn-danger my-3">{order?.status}</button> : <button className="btn btn-success my-3">{order?.status}</button>}<br />
                                        {order?.status === "SHIPPED" ? <h6>Sorry, Your Car Has Been Shipped, You Can't cancel This Order Anymore!</h6> : <button className="primary-btn rounded" onClick={() => handleDelete(order?._id)}>Cancel Order</button>}


                                    </div>
                                </div>
                            </div>)
                        }
                    </div>

                </div>
            </div>
       </div>
    );
};

export default MyOrder;