import { Link } from "react-router-dom";
import "./sigup.css";

const Singup = () => {
  return (
    <main className="signup-page">
      <div className="signup-shell">
        <header className="signup-header">
          <div className="signup-brand">
            <div className="signup-logo-wrap">
              <img src="/logov1.png" alt="CodeHub logo" className="signup-logo" />
            </div>
            <h2 className="signup-brand-title">CodeHub</h2>
          </div>
          <div className="signup-header-right">
            <span className="signup-header-text">Already have an account?</span>
            <Link className="signup-link" to="/login">Sign In</Link>
          </div>
        </header>

        <div className="signup-main">
          <div className="signup-content">
            <div className="signup-title-wrap">
              <h1 className="signup-title">Create your account</h1>
              <p className="signup-subtitle">Join the CodeHub community today</p>
            </div>

            <form className="signup-form">
              <div className="signup-field">
                <label className="signup-label" htmlFor="signup-username">Username</label>
                <input id="signup-username" className="signup-input" placeholder="Enter your username" type="text" />
              </div>

              <div className="signup-field">
                <label className="signup-label" htmlFor="signup-email">Email address</label>
                <input id="signup-email" className="signup-input" placeholder="Enter your email" type="email" />
              </div>

              <div className="signup-field">
                <label className="signup-label" htmlFor="signup-password">Password</label>
                <input id="signup-password" className="signup-input" placeholder="Create your password" type="password" />
                <p className="signup-hint">Must be at least 8 characters long.</p>
              </div>

              <button className="signup-submit" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Singup;
