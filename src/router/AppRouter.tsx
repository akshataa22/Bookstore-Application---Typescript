import { Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import AuthPage from '../pages/AuthPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from '../components/Layout'
import Cart from '../components/Cart'
import BookDetails from '../components/BookDetails';
import Dashboard from '../pages/Dashboard';
import Wishlist from '../components/Wishlist';

const AppRouter = () => {
    return (
        <>
        <Routes>
          <Route path="/" element={<AuthRoute><AuthPage /></AuthRoute>}>
            <Route index element={<AuthRoute><Login /></AuthRoute>} />
            <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
            <Route path="/register" element ={<AuthRoute><Register /></AuthRoute>} />
          </Route>
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/home" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/details/:id" element={<ProtectedRoute><BookDetails/></ProtectedRoute>} />
            <Route path='/wishlist' element={<ProtectedRoute><Wishlist /></ProtectedRoute>}/>
            <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
          </Route>
               
      </Routes>
    </>
  );
};

export default AppRouter;