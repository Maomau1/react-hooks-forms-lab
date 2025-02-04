import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
//basic form 
  /*const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")


  function handleItemChange (event){
    setItemName(event.target.value)
  }

  function handleCategoryChange(event){
    setItemCategory(event.target.value)
  }*/

  //form abstraction:
 const [formData, setFormData] = useState({
    itemName:"",
    itemCategory:"Produce"
  })
   

  function handleItemChange(event){
    //console.log(event)
    const name = event.target.name;
    let value = event.target.value;
    //console.log([name,value]);
  

  setFormData ({...formData,[name]:value});
 /// console.log(formData)
  }
  
  function handleSubmit (event){
    event.preventDefault();
    

    const newItem ={
      id: uuid(),
      name:formData.itemName,
      category: formData.itemCategory,
    };
    onItemFormSubmit(newItem)

    setFormData ({...formData,
      itemName:"",
      itemCategory:"Produce"
      })
    }
    
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="itemName" value={formData.itemName} onChange={handleItemChange}/>
      </label>

      <label>
        Category:
        <select name="itemCategory" value={formData.itemCategory} onChange={handleItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
    

  );
}

export default ItemForm;
