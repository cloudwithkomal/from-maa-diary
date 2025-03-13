import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Link
import HomePage from "./pages/HomePage/HomePage";
import RecipePage from "./pages/RecipePage/RecipePage";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Link to="/"> 
            <img src="./assets/logo.jpg" alt="Logo" />
          </Link>
          <h1>From Maa's Diary</h1>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2025 From Maa's Diary</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
