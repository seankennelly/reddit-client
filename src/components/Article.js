import React from "react";
import formatTimeDifference from "../utilities/FormatTimeDifference";

function Article(props) {
  const utcPosted = props.article.created_utc;

  const preview = props.article.url_overridden_by_dest;
  let previewImage = "";
  if (preview && !preview.includes("gallery")) {
    previewImage = preview;
  }

  return (
    <article className="article">
      <a
        href={"https://reddit.com" + props.article.permalink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{props.article.title}</h3>
        <p>{props.article.author}</p>
        <p>Posted {formatTimeDifference(utcPosted)} ago</p>
        {/* Generates image element only if Reddit post has thumbnail */}
        {props.article.thumbnail !== "self" ? <img src={previewImage} /> : ""}
        {/* Image code end */}
        <p>{props.article.num_comments} comments</p>
      </a>
    </article>
  );
}

export default Article;
