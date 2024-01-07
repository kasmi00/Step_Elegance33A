import "./login.css";
import shoeimg from "../assets/loginLogo.png";
import logoimg from "../assets/logo-removebg.png";

function Login() {
  return (
    <>
    <div className="login-box">
    <div className="rectangle">
      </div>
    <div className="main-login-box">
      <div className="welcome-part">
        <h2 className="title-heading-welcome">
          WELCOME
        </h2>
        <img src={shoeimg} alt="" className="login-shoe-img" />

      </div>
      <div className="login-form-part">
        <form action="" className="login-info">
          <div className="login-form-info">
            <img src={logoimg} alt="" className="SE-logo"/>
            <div className="user-pass">
            <input type="text" className="user-detail" placeholder="Username" />
            <input type="password" className="user-detail" placeholder="Password"  />
            <button className="login-bttn">LOG-IN</button>
            <a href="/forgot" className="forgetbttn"> Forget Password</a>
            <div className="for-registration">
              <label htmlFor=""> Don't have an account? <button className="signin-bttn">
                SIGN-IN</button></label>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
      

    </>
  );
}

export default Login;
