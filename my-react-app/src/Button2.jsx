// inline styling
// can become less maintainable and harder to read as the component grows
// not used for complex styling

function Button2() {
    const styles = {
        backgroundColor: "hsl(214, 100%, 63%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }
    return (<button className={styles}>click me</button>);
}

export default Button2