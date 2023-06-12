import NavBarComponent from './Pages/NavBar'
import './App.css';
import { ShopContextProvider } from './Context/ShopContext';
import { container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <container>
      <ShopContextProvider>
        <NavBarComponent/>
      </ShopContextProvider>
      </container>
     
    </div>
  );
}

export default App;
