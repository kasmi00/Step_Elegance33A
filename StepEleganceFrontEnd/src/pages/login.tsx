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
               <h2>Sign-In Page</h2>
               <label>
                   Username: <input type="text" name="Username" />
               </label>
               <label>
                   Password: <input type="Password" name="Password" />
               </label>
               <label> Don't have an account?  <a href ="Registration" > <button> Sign-Up </button> </a></label>
           </div>
           </body>
       </>

    )
}
export default login