function List(props){

    //const fruits!

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // Ordem alfabética
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // Ordem alfabética invertida
    //fruits.sort((a, b)=> a.calories - b.calories); // Ordem crescente
    //fruits.sort((a, b) => b.calories - a.calories); // Ordem decrescente

    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;
                    <b>{item.calories}</b></li>);

    return(
    <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
    </>    
    );
}

export default List