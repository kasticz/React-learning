import styles from './User.module.css'

function User(props){
    console.log(props.name)
    return(
        <div className={styles.user}>
            {`${props.name} ${props.age})`}
        </div>
    )    

}


export default User