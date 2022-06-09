import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  function handleClick() {
    console.log("click");
  }
  return (
    <nav>
      <ul>
        <li onClick={handleClick}>Collares P</li>
        <li>Collares S</li>
        <li>Collares M</li>
        <li>Collares G</li>
        <CartWidget />
      </ul>
    </nav>
  );
}
