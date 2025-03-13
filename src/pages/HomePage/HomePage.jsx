import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import AlooParathaImage from "../../assets/aloo-paratha.jpg";


const recipes = [
  { id: 1, title: "Aloo Paratha", image: AlooParathaImage },
];

function HomePage() {
  return (
    <div className="home-page">
      <h2>Delicious Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
