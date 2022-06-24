import style from "./Nav.module.css";
import CartButton from "./CartButton";

function Nav(props) {
  return (
    <nav className={style.nav}>
      <h1>ReactMeals</h1>
      <CartButton />
    </nav>
  );
}

export default Nav;
