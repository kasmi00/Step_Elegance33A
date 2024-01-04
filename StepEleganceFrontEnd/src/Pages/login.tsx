import "./login.css";

function Login() {
  return (
    <>
      <div className="login-body">
        <div className="container">
          <div className="left-side">
            <h1>WELCOME</h1>
          </div>
          <div className="right-side">
            <div className="title">
              <h2>LOG IN</h2>
            </div>
            <div className="forum">
              <form action="">
                <div className="username">
                  <input type="text" placeholder="Username" />
                </div>
                <div className="password">
                  <input type="text" placeholder="Password" />
                </div>
                <div className="submit">
                  <button>Submit</button>
                </div>
                <a href="/forgot">forgot password?</a>
              </form>
              <div className="register-ref">
                <button>SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
