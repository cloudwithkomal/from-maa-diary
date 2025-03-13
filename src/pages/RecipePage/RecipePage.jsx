import React from "react";
import { useParams } from "react-router-dom";
import "./RecipePage.scss";
import AlooParathaImage from "../../assets/aloo-paratha.jpg";

const recipes = {
    1: {
      title: "Aloo Paratha",
      ingredients: [
        "Whole wheat flour",
        "Potatoes",
        "Salt",
        "Red chili powder",
        "Turmeric powder",
        "Garam masala",
        "Coriander",
        "Ginger",
        "Ghee or butter"
      ],
      steps: [
        "Knead a soft dough with whole wheat flour and water. Let it rest for 15 minutes.",
        "Mix mashed potatoes with salt, chili powder, turmeric, garam masala, coriander, and ginger.",
        "Divide dough into small balls and roll them out.",
        "Place a spoonful of the potato mixture in the center and fold the dough around it.",
        "Roll out again gently and cook on a hot tawa with ghee until golden brown.",
        "Serve hot with butter, curd, or pickle."
      ],
      image: AlooParathaImage
    },
  };  

function RecipePage() {
  const { id } = useParams();
  const recipe = recipes[id];

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="recipe-page">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
        <h3>Steps</h3>
<ul>
  {recipe.steps.map((step, index) => (
    <li key={index}>{step}</li>
  ))}
</ul>
    </div>
  );
}

export default RecipePage;
