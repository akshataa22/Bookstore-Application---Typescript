import { Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';
import AuthPage from '../pages/AuthPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Layout from '../components/Layout'
import Cart from '../components/Cart'
import BookCard from '../components/BookCard';
import BookDetails from '../components/BookDetails';

const AppRouter = () => {
    return (
        <>
        <Routes>
          <Route path="/" element={<AuthRoute><AuthPage /></AuthRoute>}>
            <Route index element={<AuthRoute><Login /></AuthRoute>} />
            <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
            <Route path="/register" element ={<AuthRoute><Register /></AuthRoute>} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/details" element={<BookDetails/>} />
            <Route path="/card" element={<BookCard/>} />
            <Route path="/cart" element={<Cart/>} />
          </Route>
               
      </Routes>
    </>
  );
};

export default AppRouter;