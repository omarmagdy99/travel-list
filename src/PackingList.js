import Item from "./item";
// PackingList
let PackingList = ({ items, onDeleteItem, onUpdateItem, sort, setSort, clearList }) => {

  let sortItems;
  console.log(items.sort((a, b) => a.description - b.description))
  sort == "input" ? sortItems = items : sort == "description" ? sortItems = items.slice().sort((a, b) => a.description.localeCompare(b.description)) : sortItems = items.slice().sort((a, b) => a.packed - b.packed)
  return (
    <div className="list">
      <ul>
        {sortItems.map((item) => {
          if (item.description !== "") return <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />



        })}
      </ul>
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="input">sort by input</option>
        <option value="description">sort by description</option>
        <option value="packed">sort by packed</option>
      </select>
      <button onClick={clearList}>Clear List</button>
    </div>
  );
};
// PackingList


export default PackingList;