import './Registration.css';


function Registration() {
    

    return (
        <>
        <h2>Registration Page</h2>
        <div className='mainbox'>
        <form>
                <div className="container">
                    {/* <img src={Image} alt='shoe bg' /> */}
                    <div className='fecd'>
                    <div className='fname'>
                        <label>First Name:</label>
                        <input type='text' placeholder=' FIRST NAME ' required/>
                    </div>
                    <div className='email'>
                        <label>Email:</label>
                        <input type='text'placeholder=' EMAIL '  required/>
                    </div>
                    <div className='confirmpassword'>
                        <label>Confirm Password:</label>
                        <input type='password' placeholder=' PASSWORD ' required/>
                    </div>
                    <div className='date'>
                        <label>Date Of Birth:</label>
                        <input type='date' required/>
                    </div>
                    </div>
                    <div className='lpg'>
                    <div className='lname'>
                        <label>Last Name:</label>
                        <input type='text' placeholder=' LAST NAME ' required/>
                    </div>
                    <div className='password'>
                        <label>Password:</label>
                        <input type='password' placeholder=' CONFIRM PASSWORD ' required/>
                    </div>
                    <div className='gender'>
                        <label>Gender:</label>
                        <select>
                                        <option value="">-- Select --</option>
                                        <option value="option1">Male</option>
                                        <option value="option2">Female</option>
                                    </select> 
                    </div>
                    </div>               
                </div>
                <div className='cs'>
                    <div className='confirmbttn'>
                        <button>Confirm</button> 
                    </div>
                    <div className='signin'>
                        <label>Already have an account? </label>
                        <div>
                        <button>
                            Sign-In
                        </button>
                        </div>
                    </div>  
                    </div>
                    </form>
                </div>  
        </>
    );
}

export default Registration;
