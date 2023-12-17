import React, { useState } from "react";
//import {v4 as uuid} from "uuid" 
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedName, setSelectedName] = useState("");
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    //console.log(event.target.value)
    setSelectedName(event.target.value)
  }
  
  
   const itemsToDisplay= items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => item.name.includes(selectedName))

  

  /*function onFormCategoryChange(event){
    setItemCategory(event.target.value)
    console.log(event.target.value)
  }

  function onNameChange(event){
    console.log(event.target.value)
    setNewName(event.target.value)
  }
*/
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search = {selectedName} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
