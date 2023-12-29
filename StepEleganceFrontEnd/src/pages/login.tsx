// import './login.css'
// import Image from '../assets/loginLogo.png'

// function login() {

//     return (
//         <>
//                 <div className="parent">
//                 <div className="WELCOME">
//                     <h2>WELCOME</h2>
//                 </div>
//                 <div className="WELCOME-IMAGE">
//                     {/* Image placed under the WELCOME text */}
//                     <img src={Image} alt="Shoe Image" className="upscaling" />
//                 </div>
//                 </div>
//                 <div className="parent">
//                     <div className='header'>
//                     <h2>Log In</h2>
//                     </div>
//                     <div className='box'>
//                         <div className='boxinside'>
//                         <form>
//                             <div className="userpassword">
//                             <div className='username'>
//                     <label>
//                         Username: 
//                     </label>
//                     <input type="text" name='Username' required />
//                     </div>
//                     <div className='password'>
//                     <label>
//                         Password: 
//                     </label>
//                     <input type="Password" name="Password"  required />
//                     <div className='forget'>
//                     <a href="#">Forget password?</a>
//                     </div>
//                     </div>
//                     </div>
//                     </form>
//                     </div>
//                     <div className='submit'>
//                     <label>
//                         <button type="submit" className="btn"> Login</button>
//                     </label>
//                     </div>
//                     <div className="allbuttons">
//                     <div className='button'>
//                     <label> Don't have an account?  <button> Register</button> </label></div>
//                     </div>
//                     </div>
//                 </div>
//         </>

//     )
// }
// export default login

import './login.css'; // Assuming your CSS file is correctly importing styles

import Image from '../assets/loginLogo.png';

function Login() {
    return (
        <div className="login-container">
            <div className="welcome-section">
                <div className="welcome-text">
                    <h2>WELCOME</h2>
                
                <div className="welcome-image">
                    <img src={Image} alt="Shoe Image" className="upscaling" />
                </div>
                </div>
            </div>
            <div className="login-section">
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
                    <a href="#">Forget password?</a>
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
                    <label> Don't have an account?  <button> Register</button> </label></div>
                    </div>
                    </div>
                
            </div>
        </div>
    );
}

export default Login;
