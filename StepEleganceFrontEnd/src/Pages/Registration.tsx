import './Registration.css'

function Registration() {
    // alert(" ");

    return(
        <>
            <head>
                <title >
                    Registration Page
                </title>
                <> name = "viewpoint" content ="width=device-width,initial-scale=1.0"</>
            </head>
            <body>
            <div> <h2>Registration Page</h2>
                <div className={"Registration Form"} >
                    <label>
                        First Name:<input type="text" name="First Name"/>
                    </label>
                    <label>
                        Last Name:<input type="text" name="Last Name"/>
                    </label>
                    <label>
                        Email:<input type="text" name="Email"/>
                    </label>
                    <label>
                        Password:<input type="text" name="Password"/>
                    </label>
                    <label>
                        Repeat Password:<input type="text" name="Repeat Password"/>
                    </label>
                    <label>Gender: </label>
                    <select>
                        <option value="">-- Select --</option>
                        <option value="option1">Male</option>
                        <option value="option2">Female</option>
                    </select>
                    <label>Date.Of.Birth: </label>

                    <input type = "date" />
                    <label> Already have an account?  <button> Sign-In</button> </label>

                </div>


            </div>
            </body>
        </>
)

}
export default Registration;
