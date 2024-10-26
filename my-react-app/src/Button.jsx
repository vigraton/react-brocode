// Inline example

function Button(){

    const styles = {
        backgroundColor: "rgb(58, 0, 232)",
        color: "white",
        padding: "10px 20px",
        border: none,
        borderRadius: "5px",
        cursor: pointer,
    }
    return(<button style={styles}>Click me</button>)
}

export default Button