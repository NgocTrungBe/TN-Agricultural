// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer';
import  MainRoutes from './routes/MainRoutes';
import Home from './pages/Home';
import Hero from './components/Hero/Hero';

function App() {

  return (
      <BrowserRouter>
       <Header/>
       <Hero/>
       <div className="main">
         <MainRoutes></MainRoutes>
       </div>
       <Footer/>
      </BrowserRouter>

  );
}

export default App;
