import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Article from "./components/Article";
import Article_page from "./pages/Article_page";
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";
import Mercato_news from "./pages/Mercato_news";
import News from "./pages/News";
import Recent_news from "./pages/Recent_news";
import Highlights_page from "./pages/Highlights_page";
import Live_page from "./pages/Live_page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/live" element={<Live_page />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/news/popularity" element={<News />} />
        <Route path="/news/:article" element={<Article_page />} />
        <Route path="/news/recent" element={<Recent_news />} />
        <Route path="/news/mercato" element={<Mercato_news />} />
        <Route path="/highlights" element={<Highlights_page />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
