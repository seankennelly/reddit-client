import React, { useState, useEffect } from "react";

function Header(props) {
  const [responseData, setResponseData] = useState(null);

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

  // CHAT GPT

  useEffect(() => {
    const fetchData = async () => {
      if (props.subReddit) {
        try {
          const response = await fetch(
            "https://www.reddit.com/r/" + props.subReddit + ".json"
          );
          const data = await response.json();
          props.setArticles(data.data.children);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [props.subReddit]);

  const handleChange = (e) => {
    props.setSubReddit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here if needed
    props.setSubReddit(e.target.value);
  };

  // END CHAT GPT

  return (
    <header>
      <a href="https://reddit.com">
        <img src={require("./reddit_logo.png")} />
      </a>
      <h1>Reddit Micro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={props.subReddit}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </header>
  );
}

export default Header;
