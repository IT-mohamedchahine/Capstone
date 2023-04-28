import './App.css';
import About from './components/About';
import Footer from './components/Footer';

import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/styles.css';
import './pages/styles.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './components/Highlights';
import Order from './pages/Order';
import Reservations from './pages/Reservations';
import BookingConfirmation from './pages/BookingComfirmation';
import ResersationList from './pages/ResersationList';

function App() {
  return (
    <BrowserRouter>
     <header>
      <Navbar/>
    </header>

    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/menu' element={<Menu/>}/>
   <Route path='/order' element={<Order/>}/>
   <Route path='/reservations' element={<Reservations/>}/>
   <Route path='/reservationList' element={<ResersationList/>}/>
   <Route path='/booking-confirmation' element={<BookingConfirmation/>}/>

    </Routes>
   <Footer/>
  
    </main>
    </BrowserRouter>
  );
}

export default App;
