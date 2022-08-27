import './App.css';
import { Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import Home from './components/Home'
function App() {
  return (
    <div>
    <NavBar />
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>

    </div>
  );
}

export default App;
