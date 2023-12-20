
import './login.css'
import Image from '../assets/loginLogo.png'

function login() {

    return (
        <>
                <div className="parent">
                <div className="WELCOME">
                    <h2>WELCOME</h2>
                </div>
                <div className="WELCOME-IMAGE">
                    {/* Image placed under the WELCOME text */}
                    <img src={Image} alt="Shoe Image" className="upscaling" />
                </div>
                    <div className='header'>
                    <h2>Log In</h2>
                    </div>
                    <div className='box'>
                        <div className='boxinside'>
                        <form>
                            <div className="userpassword">
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
                    <input type="Password" name="Password"  required />
                    <div className='forget'>   
                    <a href="/forgot">Forgot password?</a>
                    </div>
                    </div>
                    </div>
                    </form>
                    </div>
                    <div className='submit'>
                    <label>
                        <button type="submit" className="btn"> Login</button>
                    </label>
                    </div>
                    <div className="allbuttons">
                    <div className='button'>
                    <label> Don't have an account? <a href='/registration'> <button> Register</button>  </a> </label></div>
                    </div>
                    </div>
                </div>
        </>

    )
}
export default login
