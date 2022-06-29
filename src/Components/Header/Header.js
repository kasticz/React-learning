import styles from "./Header.module.css";
import Card from '../UI/Card'
import img from '../../assets/meals.jpg'
function Header(props) {
  return (
    <header className={styles.header}>
        <div className={styles.image}>
      <img src={img} alt="" />
      </div>
      <Card className={styles.card}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
    </header>
  );
}

export default Header;
