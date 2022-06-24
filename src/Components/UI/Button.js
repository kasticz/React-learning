import styles from './Button.module.css'

function Button(props){
    return (
        <button className={`${styles.button} ${props.className ? props.className : ``}`} type={props.type} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button