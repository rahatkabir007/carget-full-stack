import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://carget.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    if (orders.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel your order?');
        if (proceed) {
            const url = `https://carget.onrender.com/orders/${id}`;
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
            <div className="orders-section" id="orders">{
                matched?.length === 0 ? <div className="d-flex flex-column">
                    <h1 className="text-center mb-5">Hello! {user?.displayName}, You Haven't Ordered Anything!</h1>
                    <img className="w-75 mx-auto" src="https://image.freepik.com/free-vector/add-cart-concept-illustration_114360-1435.jpg" alt="" srcset="" />
                </div>
                    : matched?.length === 1 ? <h1 className="text-center">Hello! {user?.displayName}, You Have Ordered {matched?.length} Item!</h1> :
                        <h1 className="text-center">Hello! {user?.displayName}, You Have Ordered {matched?.length} Items!</h1>
            }

                <hr />
                <div className="container my-orders my-4">
                    <div className="row">
                        {
                            matched.map(order => <div className="col-md-6 col-lg-6 col-xxl-4 mt-3">
                                <div className="card product-card h-100 mx-auto " style={{ width: "22rem" }}>
                                    <img src={order?.image} className="card-img-top " style={{ height: "15rem" }} alt="..." />
                                    <div className="card-body text-center product-text">
                                        <h2 className="card-title">{order?.carName}</h2>
                                        <p className="card-text" id="description">{order?.description}</p>
                                        <p className="card-text" id="price">Price:  {order?.price}$</p>
                                    </div>
                                    <div className="text-center pb-3">
                                        {order?.status === "PENDING" ? <button className="btn btn-danger my-3">{order?.status}</button> : <button className="btn btn-success my-3">{order?.status}</button>}<br />
                                        {order?.status === "SHIPPED" ? <h6>Sorry, Your Car Has Been Shipped, You Can't Cancel This Order Anymore!</h6> : <button className="secondary-btn" onClick={() => handleDelete(order?._id)}>Cancel Order</button>}


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