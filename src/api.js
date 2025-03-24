import axios from "axios";

const API_URL = "http://localhost:5050/api"; 

// Fetch all recipes
export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

// Fetch a single recipe by ID (including ingredients)
export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
};

// Fetch all ingredients
export const getIngredients = async () => {
  try {
    const response = await axios.get(`${API_URL}/ingredients`);
    return response.data;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};

// Fetch comments for a specific recipe
export const getCommentsByRecipeId = async (recipeId) => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${recipeId}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

// Add a new comment to a recipe
export const addComment = async (recipeId, comment) => {
  try {
    const response = await axios.post(`${API_URL}/recipes/${recipeId}/comments`, {
        id: "2",
        recipeId: recipeId,
        comment: comment
    });
    return response.data;
  } catch (error) {
    console.error("Error adding comment:", error);
    return null;
  }
};
