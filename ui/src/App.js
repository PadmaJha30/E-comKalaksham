import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Categories from './component/Categories';
import Register from './component/Register';
import CustomerLogin from './component/CustomerLogin';
import SellerLogin from './component/SellerLogin';
import Blog from './component/Blog';
import CustomerRegistration from './component/CustomerRegistration';
import SellerRegistration from './component/SellerRegistration';
import Wishlist from './component/Wishlist';
import AddProduct from './component/AddProduct';
import SellerDashboard from './component/SellerDashboard';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import CustomerDashboard from './component/CustomerDashboard';
import { CartProvider } from './component/CartContext';
import ProductDetail from './component/ProductDetail'; 
import CartPage from './component/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeroSection from "./component/HeroSection";
import CheckoutPage from './component/CheckoutPage';
import Navigation from "./component/Navigation";

console.log(ProductDetail); // should not be undefined


function App() {
  return (

   <BrowserRouter>
   <CartProvider> 
    {/* <Navigation/>  */}
        
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/categories' element={<Categories/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login-customer' element={<CustomerLogin/>}></Route>
    <Route path='/login-seller' element={<SellerLogin/>}></Route>
    <Route path='/register-customer' element={<CustomerRegistration/>}></Route>
    <Route path='/register-seller' element={<SellerRegistration/>}></Route>
    <Route path='/blogs' element={<Blog/>}></Route>
    <Route path="/seller-dashboard" element={<SellerDashboard />} ></Route>
    <Route path='/add-product' element={<AddProduct/>}></Route>
    <Route path='/wishlist' element={<Wishlist/>}></Route>
    <Route path='/customer-dashboard' element={<CustomerDashboard/>}></Route>
    <Route path="/candles" element={<Categories category="Candles" />} />
<Route path="/bags" element={<Categories category="Handcrafted Bags" />} />
<Route path="/jewelry" element={<Categories category="Handcrafted Jewelry" />} />
<Route path="/painting" element={<Categories category="Painting" />} />
<Route path="/product/:pid" element={<ProductDetail />} />
<Route path="/cart" element={<CartPage />} />
<Route path="/checkout" element={<CheckoutPage />} />
{/* <Route path="/category/:category" component={Categories} />  */}
 <Route path="/category/:category" element={<Categories />} />
<Route path="/product/:pid" component={ProductDetail} /> {/* Product detail */}
   


   </Routes>
    </CartProvider>
   </BrowserRouter>
  );
}

export default App;
