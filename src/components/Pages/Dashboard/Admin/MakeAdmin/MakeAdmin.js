import { Alert, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = (e) => {
        const user = { email }
        const proceed = window.confirm('Are You Sure You Want To Assign Admin Role To This Email')
        if (proceed) {
            fetch('https://cryptic-mesa-50717.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setSuccess(true);
                    }
                })

        }

        e.preventDefault();
    }

    return (
        <div>
            <h2>Assign New Admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField onBlur={handleOnBlur} id="standard-basic" type="email" label="Email" variant="standard" sx={{ width: "50%", mt: 10 }} /><br />
                <button className="mt-2 btn btn-secondary">Make Admin</button><br />
                {success && <Alert severity="success" sx={{ mt: 4 }}>Assigned Admin Role Succesfully!</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;