import React from "react";

const Recipe = (props) => {
  return (
    <div className="recipe">
      <h2 className="recipe-title">{props.title}</h2>
      <p>{Math.floor(props.calories)} calories</p>
      <ol>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img src={props.image} alt="" />
    </div>
  );
};

export default Recipe;
