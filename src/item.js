

// Item
let Item = ({ item, onDeleteItem, onUpdateItem }) => {
    return (
        <li>
            <input type="checkbox" checked={item.packed && "checked"} onChange={() => onUpdateItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)} >❌</button>
        </li>
    );
};
// Item

export default Item