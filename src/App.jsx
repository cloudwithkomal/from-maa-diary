import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/HomePage/HomePage";
import RecipePage from "./pages/RecipePage/RecipePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Story from "./components/Story/Story";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Story /> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
