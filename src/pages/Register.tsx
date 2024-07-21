import {useState,FormEvent, ChangeEvent} from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import base_url from '../api/baseapi';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Register.scss';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface RegisterState {
    fullName: string;
    email: string;
    password: string;
    phone: string;
}

function Register() {
    const [formData,setFormData] = useState<RegisterState>({
        fullName: "",
        email: "",
        password: "",
        phone: "",
    })
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const validatePassword = (password: string) => {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;
        setFormData({...formData,[name]:value});
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const {fullName, email, password, phone} = formData;

        try {
          if (fullName.trim() === '') {
            toast.error('Please enter your full name.', { position: 'top-center' });
            return;
          }
          if (!validateEmail(email)) {
            toast.error('Please enter a valid email address.', { position: 'top-center' });
            return;
          }
          if (!validatePassword(password)) {
            toast.error('Please enter a valid password (Minimum 8 characters with a mix of letters, numbers & symbols).', { position: 'top-center' });
            return;
          }
          if (phone.trim() === '') {
            toast.error('Please enter a valid phone number.', { position: 'top-center' });
            return;
          }
          console.log("formData",formData);
          const response = await axios.post(`${base_url}/bookstore_user/registration`, formData);
          console.log("token",response);
          toast.success("User  Registered!", { position: "top-center" });
        } catch (error: any) {
          console.error("Error:", error.message);
          toast.error(error.message, { position: 'top-center' });
        }
    }

    return (
            <form className="register-form" >
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                <label>Email Id</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                <label>Password</label>
                <div className="password-container">
                <input type={showPassword ? 'text' : 'password'} name="password" onChange={handleChange} value={formData.password} required  />
                <button
                    type="button"
                    className="password-toggle"
                    onClick={handleShowPassword}
                >
                    {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                </button>
            </div>
                <label>Mobile Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                <button onClick={handleSubmit} type="submit" className="register">Signup</button>
            </form>
    );
};

export default Register;
