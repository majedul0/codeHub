import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <main className="login-page">
      <div className="login-shell">
        <div className="login-branding">
          <div className="login-logo-wrap">
            <img src="/logov1.png" alt="CodeHub logo" className="login-logo" />
          </div>
          <div className="login-title-wrap">
            <h1 className="login-title">Welcome back</h1>
            <p className="login-subtitle">Log in to your CodeHub account</p>
          </div>
        </div>

        <div className="login-card">
          <form className="login-form">
            <div className="login-field">
              <label className="login-label" htmlFor="login-email">Email</label>
              <input
                id="login-email"
                className="login-input"
                placeholder="Enter your email"
                type="email"
              />
            </div>

            <div className="login-field">
              <div className="login-label-row">
                <label className="login-label" htmlFor="login-password">Password</label>
                <a className="login-link" href="#">
                  Forgot password?
                </a>
              </div>
              <input
                id="login-password"
                className="login-input"
                placeholder="Enter your password"
                type="password"
              />
            </div>

            <button className="login-submit" type="submit">
              Sign In
            </button>
          </form>

          <div className="login-divider">
            <div className="login-divider-line" />
            <div className="login-divider-text-wrap">
              <span className="login-divider-text">Or continue with</span>
            </div>
          </div>

          <div className="login-social-grid">
            <button className="login-social-btn">
              GitHub
            </button>
            <button className="login-social-btn">
              Google
            </button>
          </div>
        </div>

        <p className="login-footer-text">
          Don&apos;t have an account? <Link className="login-link" to="/signup">Sign Up</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
