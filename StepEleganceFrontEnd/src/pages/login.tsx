import './login.css'
function login(){

    return(
       <>
           <head>
               <title>Login Page</title>
               <meta name="viewport" content="width=device-width,initial-scale=1.0" />
           </head>
           <body>

           <div className="WELCOME">
               <h2>WELCOME</h2>
               <label>
                   image
               </label>

           </div>

           <div className="SIGN-IN">
               <h2>Sign-In Page</h2>
               <label>
                   Username: <input type="text" name="Username" />
               </label>
               <label>
                   Password: <input type="Password" name="Password" />
               </label>
               <a href="#">Forget password?</a>
               <label>
                   <button type="submit" class="btn"> Login</button>
               </label>
               <label> Don't have an account?  <button> Register</button> </label>
           </div>


           </body>
       </>

    )
}
export default login