import React from 'react';
import './Registration.css';

function Registration() {
    const backgroundStyle: React.CSSProperties = {
        background: "url('../assets/registrationbg.jpg')", // Fix the background image path
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <>
                <div>
                    <h2>Registration Page</h2>
                </div>
                <div className="container">
                    <div className='title'>Registration</div>
                    <form action='#'>
                        <div className='userbox'>
                            <div className='user-details'>
                                <div id = "fnln">
                                <div className='input-box' >
                                    <span className='details'>First Name: </span>
                                    <input type='text' placeholder='Enter your first name' required />
                                </div>
                                <div className='input-box'>
                                    <span className='details'>Last Name: </span>
                                    <input type='text' placeholder='Enter your last name' required />
                                </div>
                                </div>
                                <div id = "useremail">
                                <div className='input-box'>
                                    <span className='details'>Username: </span>
                                    <input type='email' placeholder='Enter your username' required />
                                </div>
                                <div className='input-box'>
                                    <span className='details'> Email: </span>
                                    <input type='text' placeholder='Enter your email' required />
                                </div>
                                </div>
                                <div id = 'password'>
                                <div className='input-box'>
                                    <span className='details'>Password: </span>
                                    <input type='password' placeholder='Enter your password' required />
                                </div>
                                <div className='input-box'>
                                    <span className='details'>Confirm Password: </span>
                                    <input type='password' placeholder='Re-Enter your password' required />
                                </div>
                                </div>
                                <div id= 'gender'>
                                <div className='gender'>
                                    <span className='gender-title'>Gender: </span>
                                    <select>
                                        <option value="">-- Select --</option>
                                        <option value="option1">Male</option>
                                        <option value="option2">Female</option>
                                    </select>
                                </div>
                                </div>
                                <div className='confirm'>
                                    <button>Confirm</button>
                                </div>
                                <div className='loginbttn'>
                                <label>
                                    Already have an account? <a href="login"> <button>Sign-In</button> </a>
                                </label>
                                </div>
                               
                            </div>
                        </div>
                    </form>
                </div>
        </>
    );
}

export default Registration;
