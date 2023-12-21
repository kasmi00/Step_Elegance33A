import "./forgotPassword.css";
import lock from "../assets/lock2.png";
import email from "../assets/email-removebg-preview.png"

function forgotPassword() {
  return (
    <>
      <div className="parent">
        <div className="centerbox">
          <div className="lock">
            <img src={lock} />
          </div>
          <div className="text">
            <h2>Forgot Password</h2>
            <p>Enter your email and we will send you an OTP to reset your password.</p>
          </div>
          <div className="email">
            <img src={email} />
            <input placeholder="email" required/>
          </div>
          <div className="submit">
            <button type="button">Submit</button>
          </div>
          <div className="back">
            <a href="/login">&lt;back to login</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default forgotPassword;
