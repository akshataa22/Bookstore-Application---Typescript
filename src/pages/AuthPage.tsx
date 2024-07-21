import { Outlet, Link, useLocation } from 'react-router-dom';
import authimage from '../assets/images/AuthImage.jpg';
import '../styles/AuthPage.scss';

function AuthPage() {
    const location = useLocation();
    
    return (
        <div className="auth-page-container">
            <div className="page-image">
                <img src={authimage} alt="Online Book Shopping" />
            </div>
            <div className="auth-page-form">
            <div className="form-container">
                <div className="pages">
                    <Link to="/login" className={`page-link ${location.pathname === '/login' ? 'active' : ''}`}>LOGIN</Link>
                    <Link to="/register" className={`page-link ${location.pathname === '/register' ? 'active' : ''}`}>SIGNUP</Link>
                </div>
                <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
