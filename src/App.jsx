import NavBarComponent from './Pages/NavBar'
import './App.css';
import { ShopContextProvider } from './Context/ShopContext';
import { UserContextProvider } from "./Context/UserContext";



function App() {
  return (
    <div className="App">
     
    <UserContextProvider>
      <ShopContextProvider>
        <NavBarComponent/>
      </ShopContextProvider>
      </UserContextProvider>
    
     
    </div>
  );
}

export default App;
