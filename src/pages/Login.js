import React, { useState, useContext } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
import DemoContext from '../DemoContext';


const Login = () => {
    const {setUser}=useContext(DemoContext)

    const fakeApiCall =()=>{
        setUser({
            name:'fakeUser',
            email:'lkm@mail.com'
        })
    }

    return (
        <div className='container'>
            <div className="content">
                <div className="" style={{ padding: '10rem' }}>

                    <h1 style={{ marginBottom: '3rem' }}>
                        Login Demo Page
                    </h1>
                    <button onClick={fakeApiCall}>Set User</button>
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