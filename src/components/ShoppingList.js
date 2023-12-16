import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedName, setSelectedName] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event){
    console.log(event.target.value)
    setSelectedName(event.target.value)
  }
  
  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  if (onSearchChange) { itemsToDisplay = ( items.filter((item) => item.name.includes(selectedName)))
  }
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
