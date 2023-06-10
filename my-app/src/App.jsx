import NavBar from './Pages/NavBar'
import './App.css';
import { ShopContextProvider } from './Context/ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <NavBar/>
      </ShopContextProvider>
     
    </div>
  );
}

export default App;
