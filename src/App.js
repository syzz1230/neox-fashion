import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import DashBoard from './pages/DashBoard/DashBoard'
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';

const reducer = (state, action) => {
    if (action.type === 'ADD_TO_CART') {
        const newCart = [...state.cart, action.payload];
        return {
            ...state,
            cart: newCart,
        };
    }
    throw new Error('NO matching Action type');
};

const defaultState = {
    cart: [],
};

function App() {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const addToCart = (payload) => {
        // here payload is noting but the details of the product
        console.log(state.cart.length)
        dispatch({ type: 'ADD_TO_CART', payload: payload });
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home addToCart={addToCart} cartSize={state.cart.length} />} />
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<AdminLogin />} />
                <Route path='/admin/dashboard' element={<DashBoard/>}/>
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<Cart cart={state.cart}/>} />

                <Route path='/:productId' element={<Product cartSize={state.cart.length} addToCart={addToCart}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
