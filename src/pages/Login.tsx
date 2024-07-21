import {useState} from "react";
import "../styles/Login.scss";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
  return (
    <form className="auth-form">
      <label>Email Id</label>
      <input type="email" />
      <label>Password</label>
      <div className="password-container">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                />
                <button
                    type="button"
                    className="password-toggle"
                    onClick={handleShowPassword}
                >
                    {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                </button>
            </div>
      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>
      <button type="submit" className="login">
        Login
      </button>
      <div className="alternative-login">
        <span>OR</span>
        <div className="options">
          <button className="left-button">Facebook</button>
          <button className="right-button">Google</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
