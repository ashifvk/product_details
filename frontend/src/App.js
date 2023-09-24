import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sighnup from './Sighnup';
import Nav from './Nav';
import Home from './Home';
import Addproduct from './Addproduct';
import View from './View';
import EditProduct from './EditProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sighnup' element={<Sighnup/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/view' element={<View/>}/>
      <Route path='/edit/:productId' element={<EditProduct/>}/>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
