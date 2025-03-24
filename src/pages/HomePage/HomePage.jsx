import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../../api"; 
import "./HomePage.scss";
import Story from "../../components/Story/Story";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home-page">
      <div>
        <Story />
      </div>
      <h2>Delicious Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="recipe-card">
            <img src={recipe.image_url} alt={recipe.title} />
            <p>{recipe.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
