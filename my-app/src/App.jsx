import NavBarComponent from './Pages/NavBar'
import './App.css';
import { ShopContextProvider } from './Context/ShopContext';
import { Container } from 'react-bootstrap'
import Headroom from 'react-headroom';

function App() {
  return (
    <div className="App">
     
      <Container>
      <ShopContextProvider>
        <Headroom>
        <NavBarComponent/>
        </Headroom>
      </ShopContextProvider>
      </Container>
     
    </div>
  );
}

export default App;
