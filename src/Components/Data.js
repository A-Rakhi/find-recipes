import React, { useState, useEffect } from "react";
import Cart from './Cart/Cart'

const Header = () => {
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

      
      <div>
        {recipe.map((item) => (
          <Cart key={item.idMeal} 
          items= {item} 
          />
        ))}
      </div>

      {/* { 
            recipe.map((val) =>(
                 <li>name : {val.strMeal}</li>
                 ))
            } */}
            
    </div>
  );
};

export default Header;
