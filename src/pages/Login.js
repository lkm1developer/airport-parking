import React, { useState } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';


const Login = () => {


    return (
        <div className='container'>
            <div className="content">
                <div className="" style={{ padding: '10rem' }}>

                    <h1 style={{ marginBottom: '3rem' }}>
                        Login Demo Page
                    </h1>
                    <Link to="/">
                        <h3>
                            Back to Home Page
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;