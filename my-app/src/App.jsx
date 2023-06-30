import NavBarComponent from './Pages/NavBar'
import './App.css';
import { ShopContextProvider } from './Context/ShopContext';
import { Container } from 'react-bootstrap'



function App() {
  return (
    <div className="App">
     
      <Container>
      <ShopContextProvider>
        
        <NavBarComponent/>
        
      </ShopContextProvider>
      </Container>
     
    </div>
  );
}

export default App;
