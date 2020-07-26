import React, { useState, useEffect } from "react";
import "./App.css";
import "./recipe";
import Recipe from "./recipe";
import { Footer } from "./Footer";
const App = () => {
  const APP_ID = "8c9617a0";
  const APP_KEY = "85a5a4d11f6eb16d123e432c48f3596a";

  const [recipes, setRecipes] = useState([]);
  const [change, setChange] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const handleChange = (e) => {
    setChange(e.target.value);
    console.log(change);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(change);
    setChange("");
  };

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getQuery}>
        <input
          type="text"
          className="search-bar"
          value={change}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={recipe.recipe.label}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
