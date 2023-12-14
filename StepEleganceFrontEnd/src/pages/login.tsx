import './login.css'
import Image from '../assets/loginLogo.png'
import React from 'react'

function login() {

    return (
        <>
            <head>
                <title>Login Page</title>
                <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            </head>
            <body>

                <div className="WELCOME">
                    <h2>WELCOME</h2>
                </div>

                <div className="WELCOME-IMAGE">
                    {/* Image placed under the WELCOME text */}
                    <img src={Image} alt="Shoe Image" className="upscaling" />
                </div>

                <div className="signin">
                    <h2>Log In</h2>
                    <div className='bigbox'>
                        <div className='boxinside'>
                        <form>
                            <div className='username'>
                    <label>
                        Username: 
                    </label>
                    <input type="text" name='Username' required />
                    </div>
                    <div className='password'>
                    <label>
                        
                        Password: 
                    </label>
                    </div>
                    <div className='forget'>
                    <input type="Password" name="Password"  required />
                    <a href="#">Forget password?</a>
                    </div>
                    
                    <div className='submit'>
                    <label>
                       
                        <button type="submit" className="btn"> Login</button>
                    </label>
                    </div>
                    <div className='button'>
                    <label> Don't have an account?  <button> Register</button> </label></div>
                    </form>
                    </div>
                </div>
                
                </div>


            </body>
        </>

    )
}
export default login