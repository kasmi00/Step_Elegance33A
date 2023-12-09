import './Registration.css';

function Registration() {
    return (
        <>
            <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Registration Page</title>
                <link ref ="stylesheet" href="Registration.css"/>
            </head>
            <body>
            <div>
                <h2>Registration Page</h2>
                <div className="Registration_Form">
                    <div className="form-group">
                        <label>
                            First Name: <input type="text" name="First Name"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Last Name: <input type="text" name="Last Name"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email:     <input type="text" name="Email"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Password: <input type="password" name="Password"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Repeat Password: <input type="password" name="Repeat Password"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Gender: <select>
                            <option value="">-- Select --</option>
                            <option value="option1">Male</option>
                            <option value="option2">Female</option>
                        </select> </label>
                    </div>
                    <div className="form-group">
                        <label>Date.Of.Birth: <input type = "date" /> </label>
                    </div>
                    <div id ="confirm " className="form-group">
                        <button> Confirm </button>
                    </div>
                    <div id = "signin" className="form-group">
                        <label> Already have an account?  <button> Sign-In</button> </label>
                            <a  href ="login.tsx"> <button> Sign-In</button> </a >
                </div>
                </div>
            </div>
            </body>
            </html>
        </>
    );
}
export default Registration;