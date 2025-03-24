import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById, getCommentsByRecipeId, addComment } from "../../api"; 
import "./RecipePage.scss";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchRecipeData = async () => {
      const recipeData = await getRecipeById(id);
      setRecipe(recipeData);

      const commentData = await getCommentsByRecipeId(id);
      setComments(commentData);
    };

    fetchRecipeData();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const addedComment = await addComment(id, newComment);
    if (addedComment) {
      setComments([...comments, addedComment]); 
      setNewComment(""); 
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-page-container">
      <div className="recipe-page">
        <h2>{recipe.title}</h2>
        <img src={recipe.image_url} alt={recipe.title} />

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.quantity} {ingredient.name}</li>
          ))}
        </ul>

        <h3>Steps</h3>
        <ul>
          {recipe.instructions.split("\n").map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>

        {/* Comments Section */}
        <div className="comments-section">
          <h3>Comments</h3>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                   {comment.comment}
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}

          {/* Comment Form */}
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment..."
              required
            />
            <button type="submit" >Add Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
