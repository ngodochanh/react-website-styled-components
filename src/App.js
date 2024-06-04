import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import { Footer } from './components/Footer';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' component={<Services />} />
        <Route path='/products' component={<Products />} />
        <Route path='/sign-up' component={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
