import './login.css'
function login(){

    return(
       <>
           <head>
               <title>Login Page</title>
               <meta name="viewport" content="width=device-width,initial-scale=1.0" />
           </head>
           <body>
           <div className="SIGN-IN">
               <h2>Log In</h2>
               <label>
                   Username: <input type="text" name="Username" />
               </label>
               <label>
                   Password: <input type="Password" name="Password" />
               </label>
               <button content="width=device-width,initial-scale=1.0">Submit</button>
               <label> Don't have an account?  <button> Register</button> </label>
           </div>
           </body>
       </>

    )
}
export default login