import './login.css'
function login(){

    return(
       <>
           <head>
               <title>Login Page</title>
               <meta name="viewport" content="width=device-width,initial-scale=1.0" />
           </head>
           <body>
           <h2>Sign-In Page</h2>
           <div className="SIGN-IN">
            <div className= "signin-form">

            <label>
                   Username: <input type="text" name="Username" />
               </label>
               </div>
               <div className= "signin-form" >
               <label>
                   Password: <input type="Password" name="Password" />
               </label>
               </div>
              <div className= "signin-form">
              <label> Don't have an account?  <a href ="Registration" > <button> Sign-Up </button> </a></label>
              </div>
            </div >   
           </body>
       </>

    )
}
export default login