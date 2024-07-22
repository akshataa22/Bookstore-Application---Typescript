import {useState, ChangeEvent, FormEvent} from "react";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";
import base_url from "../api/baseapi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Login.scss";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface LoginData {
  email: string;
  password: string;
}

function Login() {
  const [loginData,setLoginData] = useState<LoginData>({
    email: "",
    password: ""
})
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      const { name , value} = e.target;
      setLoginData({...loginData, [name]:value});
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${base_url}/bookstore_user/login`, loginData);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.result.accessToken);
        // localStorage.setItem('fullName', response.data.fullName);
        toast.success("User logged Successfully!", { position: 'top-center' })
        navigate('/home');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Invalid Credentials. Please try again later', { position: 'top-center' });
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>Email Id</label>
      <input type="email" name="email" value={loginData.email} onChange={handleChange}/>
      <label>Password</label>
      <div className="password-container">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    name="password"
          value={loginData.password}
          onChange={handleChange}
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
