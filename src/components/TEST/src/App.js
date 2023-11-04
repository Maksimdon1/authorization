
import './App.css';
import  Catalog  from './components/katalog';
import {About} from './components/about'
import {User} from './components/user'
import {Home} from './components/home'
import {Header} from './components/header.jsx'
import BottomHeader from './components/BottomHeader'; 
import Product from './components/product';
import {Basket} from './components/basket';
import { Routes, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import DopUserPages from './components/dopUserPages';
import Test from './components/TEST/Test.jsx';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import House from './components/TEST/house';
function App() {

  return (
    <>







<Routes>
       <Route path="/" element = {  <><Header/>  <Home/></>} />
       <Route path="/house" element = {  <><House/></>} />
       <Route path="/test" element = {<Test/>} />
       <Route path="/user" element = {  <User/>} />
       <Route path="/product/:url" element = {   <Product/> } />
       <Route path="/about" element = {   <About/>} />
       <Route path="/catalog" element = {   <Catalog/>} />
       <Route path="/basket" element = {   <Basket/>} />
       <Route path="/user/info" element = {   <DopUserPages/>} />
       <Route path='*' element={ <NotFound/>} />

      
   </Routes>

   <BottomHeader/>
    </>
  );
}

export default App;
