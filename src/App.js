import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import React, { useContext, useEffect, useState } from "react";
import Backdrop from "./Components/Modal/Backdrop";
import Modal from "./Components/Modal/Modal";
import ReactDOM from "react-dom";
import CartContext from "./store/cartContext";

function App() {
  const [dummyMeals,setDummyMeals] = useState([])

  useEffect(()=>{
    async function fetchMeals(){
      const response =  (await fetch(`https://react-72706-default-rtdb.europe-west1.firebasedatabase.app/Meals.json`))
      let data = await response.json()
      let newMeals = []
      for(let key in data){
        newMeals.push(data[key])
      }
      setDummyMeals(newMeals)
    }
    fetchMeals()
  },[])
   
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <Nav />
      <Header />
      <main>
        <Menu menu={dummyMeals} />
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
