import React, { useEffect } from "react";

function Header({ subReddit, setSubReddit, setArticles }) {
  useEffect(() => {
    const fetchData = async () => {
      if (subReddit) {
        try {
          const response = await fetch(
            "https://www.reddit.com/r/" + subReddit + ".json"
          );
          const data = await response.json();
          setArticles(data.data.children);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [subReddit, setArticles]);

  const handleChange = (e) => {
    setSubReddit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubReddit(e.target.value);
  };

  return (
    <header>
      <a href="https://reddit.com">
        <img
          src={require("./reddit_logo.png")}
          alt="Logo for Reddit.com"
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
      <h1>Reddit Micro</h1>
      <input
        type="text"
        className="input"
        value={subReddit}
        onChange={handleChange}
      />
    </header>
  );
}

export default Header;
