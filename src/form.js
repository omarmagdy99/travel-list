
import { useState } from "react";
//start form 
let Form = ({ onAdd }) => {
    //stats Stats

    let [description, setDescription] = useState("");
    let [quantity, setQuantity] = useState(1);
    //end Stats



    // start add function 
    let addHandle = (e) => {
        e.preventDefault();
        e.target.querySelector("input").focus();
        if (!description) return;
        let newItem = { description, quantity, packed: false, id: Number(new Date()) };
        //add function
        onAdd(newItem)
        //add function
        // reset state after add
        setDescription("")
        setQuantity(1)
        // reset state after add
    };
    // end add function 





    // return 
    return (
        <form className="add-form" onSubmit={addHandle}>
            <h3>What do you need for you 🥰</h3>
            <input
                type="text"
                placeholder="type...."
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
            {/* select and option  */}
            <select
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                }}
                value={quantity}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((sum) => {
                    return (
                        <option value={sum} key={sum}>
                            {sum}
                        </option>
                    );
                })}
            </select>
            {/* select and option  */}
            <input type="submit" value="Add" />
        </form>
    );
    // return 
};
// End form 

export default Form;