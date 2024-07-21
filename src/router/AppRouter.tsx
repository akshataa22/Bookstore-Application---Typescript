import { Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import AuthPage from '../pages/AuthPage';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRouter = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<AuthRoute><AuthPage /></AuthRoute>}>
            <Route index element={<AuthRoute><Login /></AuthRoute>} />
            <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
            <Route path="/register" element ={<AuthRoute><Register /></AuthRoute>} />
          </Route>
      </Routes>
    </>
  );
};

export default AppRouter;