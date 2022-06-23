import logo from "./fondo.jpg";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <h1>Collares Unipet</h1>
          <NavBar />
          <img src={logo} className="App-logo" alt="logo" />
          <p>Contacto: collaresunipet@gmail.com</p>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
