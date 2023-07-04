import { useState } from "react";
import Logo from "./logo"
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./stats";


function App() {
  // check is local storage is null or no 
  if (localStorage.getItem("items") == undefined || localStorage.getItem("items") === "") {
    localStorage.setItem("items", JSON.stringify([]))
  }
  if (localStorage.getItem("sort") == undefined) {
    localStorage.setItem("sort", "input")
  }
  // check is local storage is null or no 



  // item state and local storage
  //Item
  let [items, setItem] = useState(JSON.parse(localStorage.getItem("items")));
  localStorage.setItem("items", JSON.stringify(items));

  //Sort
  let [sort, setSort] = useState(localStorage.getItem("sort"));
  localStorage.setItem("sort", sort)

  // item state and local storage



  // start add to state function
  let handleAddState = (item) => {

    setItem((items) => [...items, item]);
  }
  // end  add to state function


  // start delete function 
  let onDeleteItem = (id) => {
    setItem(items => items.filter((item) => item.id != id))
    document.querySelector("form input").focus();
  }
  // end delete function 



  // start update function 
  let onUpdateItem = (id) => {
    setItem(items.map((item) => { return (item.id === id ? { ...item, packed: !item.packed } : item) }))
  }
  // end update function 

  // Start Clear List Function
  let clearList = () => {
    setItem([]);
    setSort("input");
  }
  // End Clear List Function

  // return app
  return (
    <div className="App">
      <Logo />
      <Form onAdd={handleAddState} />
      <PackingList items={items} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} sort={sort} setSort={setSort} clearList={clearList} />
      <Stats items={items} />
    </div>
  );
  // return app
}
// end app function 












export default App;
