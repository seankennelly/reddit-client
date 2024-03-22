import React, { useEffect } from "react";

function Header({subReddit, setSubReddit, setArticles}) {

  /* PREVIOUS FETCH */
  // useEffect(() => {
  //   fetch("https://www.reddit.com/r/" + props.subReddit + ".json").then(
  //     (response) => {
  //       if (response.status !== 200) {
  //         console.log("RECOGNISABLE ERROR");
  //         return;
  //       }

  //       response.json().then((data) => {
  //         if (data !== null) {
  //           props.setArticles(data.data.children);
  //         }
  //       });
  //     }
  //   );
  // }, [props.subReddit]);

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
  }, [subReddit]);

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
        <img src={require("./reddit_logo.png")} alt="Logo for Reddit.com"/>
      </a>
      <h1>Reddit Micro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={subReddit}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </header>
  );
}

export default Header;
