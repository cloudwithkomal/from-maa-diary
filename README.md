# From Maa's Diary 

## Overview

**From Maa's Diary** is a tribute to my mother, showcasing her handwritten recipes in a digital format. The website will feature a collection of recipes, a story section sharing her culinary journey, and a comment section where users can share their thoughts and experiences.

### Problem Space

Family recipes often get lost over time, making it difficult to preserve and pass them down through generations. By digitizing these treasured recipes, **From Maa's Diary** ensures that they remain accessible for future generations while fostering a sense of community among those who appreciate home-cooked meals.

### User Profile

- **Primary Users**: Home cooks, food enthusiasts, and individuals looking for authentic, traditional recipes.
- **Usage**: Users can browse recipes, read the backstory behind them, and leave comments to share their experiences.
- **Special Considerations**: The website should have a simple and intuitive user interface, making it accessible for users of all ages.

### Features

- A **home page** introducing the project and my mother's culinary journey.
- A **recipe list** featuring links to individual recipes.
- A **recipe detail page** that displays the full recipe, including ingredients and instructions.
- A **comment section** where users can share their thoughts and feedback on each recipe.
- A **responsive design** ensuring accessibility across all devices.

## Implementation

### Tech Stack

- **Frontend**: React (with React Router for navigation)
- **Styling**: SASS with BEM methodology
- **Backend**: Express.js with Node.js
- **Database**: MySQL for storing recipes and comments
- **Client Libraries**:
  - `axios` for API requests
  - `react-router-dom` for navigation
- **Server Libraries**:
  - `knex` for database queries
  - `express` for backend routing

### APIs

- Custom REST API to fetch recipes and manage comments.

### Sitemap

1. **Home Page**: Introduction and story section
2. **Recipe List**: Displays available recipes
3. **Recipe Detail Page**: Shows the full recipe and comments section

### Mockups

Mockups will be designed using Figma to outline the user interface and experience.

### Data

- **Recipes Table**
  - `id` (Primary Key)
  - `title`
  - `description`
  - `ingredients`
  - `instructions`
  - `created_at`

- **Comments Table**
  - `id` (Primary Key)
  - `recipe_id` (Foreign Key)
  - `comment_text`
  - `created_at`

### Endpoints

#### **GET /recipes**
- Fetch all recipes
- Response:
  ```json
  [
    {
      "id": 1,
      "title": "Aloo Paratha",
      "description": "A delicious stuffed flatbread..."
    }
  ]
  ```

#### **GET /recipes/:id**
- Fetch a single recipe by ID
- Response:
  ```json
  {
    "id": 1,
    "title": "Aloo Paratha",
    "description": "A delicious stuffed flatbread...",
    "ingredients": "Potatoes, Flour, Spices",
    "instructions": "Step 1: Mix dough..."
  }
  ```

#### **POST /recipes/:id/comments**
- Add a comment to a recipe
- Request Body:
  ```json
  {
    "comment_text": "Loved this recipe!"
  }
  ```
- Response:
  ```json
  {
    "message": "Comment added successfully"
  }
  ```

## Roadmap

1. **Setup Project Structure**
   - Initialize React project
   - Set up Express backend
2. **Build UI Components**
   - Home page
   - Recipe list
   - Recipe detail page
   - Comment section
3. **Implement Backend APIs**
   - CRUD operations for recipes
   - Comment functionality
4. **Database Integration**
   - Setup MySQL database and tables
5. **Testing & Deployment**
   - Test API endpoints
   - Ensure responsiveness
   - Deploy to hosting platform

---

## Future Implementations

- **User Authentication**: Allow users to create accounts and save favorite recipes.
- **Recipe Submission**: Let users contribute their own family recipes.
- **Photo Uploads**: Add images to each recipe for a more visual experience.
- **Search & Filters**: Improve navigation with filtering options by ingredients, cuisine, etc.

