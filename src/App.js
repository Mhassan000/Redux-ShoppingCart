import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './components/Navbar';
import store from './store/store';

const App= ()=> {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
