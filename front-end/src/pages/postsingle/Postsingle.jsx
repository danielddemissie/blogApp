//post-card

import React from "react";
import "./postsingle.css";
import { LikeTwoTone, CommentOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import Comments from "../../components/comment/Comments";

export default function Postsingle() {
  const { state } = useLocation();
  const { imageUrl, title, desc, time } = state;
  const pf = "http://localhost:3001/images/";
  let today = new Date(time);
  today = today.toDateString();

  console.log(state);
  return (
    <div id="post-bg">
      {imageUrl ? (
        <img src={pf + imageUrl} alt="postimage" className="post-image" />
      ) : (
        <img src="images/news3.jpg" alt="postimage" className="post-image" />
      )}
      <span className="date">{today}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
      <hr />
      <div className="reacts">
        <span>
          <i
            onClick={() => {
              console.log("like cliked");
            }}
          >
            <LikeTwoTone />
          </i>
          <i
            onClick={() => {
              console.log("comment cliked");
            }}
          >
            <CommentOutlined />
          </i>
        </span>
      </div>
      <Comments />
    </div>
  );
}
