import './App.css';
import Navbar from './navbar';
import Usuarios from './paginas/usuarios';
import Prueba from './paginas/prueba';


const App = () => (
  
    <div className="App">
      <Navbar/>
      <Usuarios/>
      <Prueba/>
  
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
    </div>
);

export default App;