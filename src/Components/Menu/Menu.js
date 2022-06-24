import styles from "./Menu.module.css";
import Card from '../UI/Card'
import MenuItem from "./MenuItem";

function Menu(props) {
  const menuItems = props.menu.map((item)=>{
    return (
      <MenuItem
      key={item.id}
      title={item.name}
      price={item.price}
      descr={item.description}
      cartFlag = {false}
      />
    )
  })
  return (
    <Card className={styles.menu}>
        {menuItems}          
    </Card>
  )
}

export default Menu;
