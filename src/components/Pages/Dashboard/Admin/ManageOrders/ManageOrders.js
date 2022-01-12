import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';


const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [status, setStatus] = useState('');

    const handleStatus = e => {
        setStatus(e.target.value)
    }


    useEffect(() => {
        fetch('https://cryptic-mesa-50717.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])
    if (manageOrders.length <= 0) {
        return <div className="w-25 mx-auto text-center"><Spinner className="my-5 " animation="border" variant="success" /></div>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if (proceed) {
            const url = `https://cryptic-mesa-50717.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = manageOrders.filter(order => order._id !== id);
                        setManageOrders(remaining);
                        alert("User's Order Has Been Deleted");
                    }
                })
        }

    }

    const handleUpdate = (id) => {
        fetch(`https://cryptic-mesa-50717.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Status Updated");
                }
            })

    }


    return (
        <div>
            <div className="manageOrders container my-5">
                <h1 className="text-center p-3">Total Orders Placed: {manageOrders.length}</h1>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Serial</th>
                                <th scope="col">Car Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">User Email</th>
                                <th scope="col">User Address</th>
                                <th scope="col">User Phone</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        {manageOrders?.map((orders, index) => (
                            <tbody key={orders?._id}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{orders?.carName}</td>
                                    <td>{orders?.name}</td>
                                    <td>{orders?.email}</td>
                                    <td>{orders?.address}</td>
                                    <td>{orders?.phone}</td>
                                    <td>{orders?.price}$</td>
                                    <td>{orders?.date}</td>
                                    <td> <form onChange={handleStatus}>
                                        <select className="p-2">
                                            <option >{orders?.status}</option>
                                            {orders?.status === "PENDING" ? <option className="bg-success text-light">SHIPPED</option> : <option className="bg-danger text-light">PENDING</option>}
                                        </select>
                                    </form></td>

                                    <td><button className="btn btn-danger p-2" onClick={() => handleDelete(orders?._id)}>Delete</button></td>
                                    <td><button type="submit" onClick={() => handleUpdate(orders?._id)} className="primary-btn px-3 rounded">Update Status</button></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageOrders;