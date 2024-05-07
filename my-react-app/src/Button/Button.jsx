import styles from "./Button.module.css";

// this is module for a component with its own css file

function Button() {
    return (<button className={styles.button}>click me</button>);
}

export default Button