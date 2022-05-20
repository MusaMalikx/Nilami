import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Search from './components/search/Search';
import Auction from './components/autions/Auctions';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';
import CardItemDetails from './components/card/CardItemDetails';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/auctions" element={<Auction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card/:id" element={<CardItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
