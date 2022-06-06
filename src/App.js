import logo from "./fondo.jpg";
import NavBar from "./components/NavBar";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Collares Unipet</h1>
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Contacto: collaresunipet@gmail.com</p>
      </header>
    </div>
  );
}

export default App;
