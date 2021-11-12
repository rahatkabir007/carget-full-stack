import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading) {
        return <div className="w-25 mx-auto text-center">
            <Spinner className="my-5 " animation="border" variant="success" />
        </div>
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user?.email && admin ? children :
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    >

                    </Redirect>

                }
            >

            </Route>

        </div>
    );
};

export default AdminRoute;