import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx'
import About from './pages/About/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/Shop/ProductDetail';
import WishList from './pages/WishList/WishList';
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";
import Basket from './pages/Basket/Basket';
import Blog from './pages/Blog/Blog.jsx';
import SingleBlog from './pages/SingleBlog/SingleBlog.jsx';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import Error from './pages/Error/Error';

function App() {
  
  return (
    <div className="App">
         <WishlistProvider>
          <CartProvider>

<Header/>
<Routes>
        {/* <Route path="/" element={<Home />}> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />

          <Route path="/" element={<Home/>} />

          <Route path="shop" element={<Shop/>} />
          <Route path="wishlist" element={<WishList/>} />
          <Route path="basket" element={<Basket/>} />
          {/* <Route path="/proddetail/:id/:name/:brand/:category" element={<ProductDetail />} /> */}

          <Route path='/singleblog/:id' element={<SingleBlog/>}/>
          <Route path="*" element={<Error />} />
      </Routes>
<Footer/>
</CartProvider>
</WishlistProvider>

    </div>
  );
}

export default App;
