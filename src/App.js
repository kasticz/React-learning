import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import React, { useContext } from "react";
import Backdrop from "./Components/Modal/Backdrop";
import Modal from "./Components/Modal/Modal";
import ReactDOM from "react-dom";
import CartContext from "./store/cartContext";

function App() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <Nav />
      <Header />
      <main>
        <Menu menu={DUMMY_MEALS} />
      </main>
      {ctx.checkIfInCart ? (
        <React.Fragment>
          {ReactDOM.createPortal(
            <Backdrop onClick={ctx.toggleModal} />,
            document.getElementById("overlays")
          )}
          {ReactDOM.createPortal(
            <Modal />,
            document.getElementById("overlays")
          )}
        </React.Fragment>
      ) : (
        ``
      )}
    </React.Fragment>
  );
}

export default App;
