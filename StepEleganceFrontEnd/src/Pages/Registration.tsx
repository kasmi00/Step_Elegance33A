import './Registration.css';

function Registration() {
    return (
        <>
            
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
                        <label> Already have an account? <a  href ="login"> <button> Sign-In</button> </a > </label>

                </div>
                </div>
            </div>
        </>
    );
}
export default Registration;
