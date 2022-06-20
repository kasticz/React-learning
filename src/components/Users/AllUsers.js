import Card from "../UI/Card"
import styles from './AllUsers.module.css'
import User from './User'

function AllUsers(props){
    let userList;
    if(props.AllUsers){
            userList = props.AllUsers.map((item)=>{
            return <User
            key={item.id}
            name={item.username}
            age={`(${item.userage} years old`}
            />
        }) 
    }

    if(!props.AllUsers.length){
        return;
    } 
     

    return(
        <Card className={styles.usersCard}>
            {userList}
        </Card>
    )
}

export default AllUsers