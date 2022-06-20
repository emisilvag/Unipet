import logo from "./fondo.jpg";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Collares Unipet</h1>
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Contacto: collaresunipet@gmail.com</p>
        <ItemListContainer greeting="Bienvenido" />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
