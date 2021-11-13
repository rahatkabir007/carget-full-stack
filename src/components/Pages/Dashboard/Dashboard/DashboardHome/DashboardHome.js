import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="d-lg-flex justify-content-center align-items-center">
                <h1 className="my-4" style={{width: "40%",textAlign: 'left',fontSize: '50px'}}>Welcome to CARGET's<br/> Dashboard {user?.displayName}!</h1>
                <img className="w-75 mx-auto" src="https://image.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg" alt="" srcset="" />
           </div>
        </div>
    );
};

export default DashboardHome;