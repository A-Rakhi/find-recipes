import React, { useState, useEffect } from "react";
import Cart from './Cart/Cart'

const RecipeList = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setRecipe(data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      {loading && <h2 style={{ textAlign: "center" }}>Loading....</h2>}
          <div className="my-5">
          {
          recipe.map((item) => (
          <Cart key={item.idMeal} 
          items= {item} 
          />
          ))}
          </div>

      </div>        
  );
};

export default RecipeList;
