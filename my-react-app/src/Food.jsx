
function Food() {

    const food1 = "sphagetti"
    const food2 = "steak"

    return (
        <ul>
            <li>Food:</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food