import React from "react";

function Article(props) {
  return (
    <article className="article">
      <a
        href={"https://reddit.com" + props.article.permalink}
        target="_blank"
        rel="noopener"
      >
        <h3>{props.article.title}</h3>
      </a>
    </article>
  );
}

export default Article;
