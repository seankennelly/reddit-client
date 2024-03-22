import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Article from "./components/Article";

function App() {
  const [subReddit, setSubReddit] = useState("storyofseasons");
  const [articles, setArticles] = useState([]);
  
  return (
    <div className="App">
      <Header subReddit={subReddit} setSubReddit={setSubReddit} articles={articles} setArticles={setArticles}/>
      <section className="articles">
        {articles != null
          ? articles.map((article, index) => (
              <Article key={index} article={article.data} className="article"/>
            ))
          : ""}
      </section>
    </div>
  );
}

export default App;
