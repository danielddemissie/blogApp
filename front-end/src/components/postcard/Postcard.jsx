//post-card

import React from 'react';
import './postcard.css';
import { LikeTwoTone, CommentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Postcard({ imageUrl, title, desc, time }) {
  const pf = 'https://news-feed-app-me-backend.herokuapp.com/images/';
  let today = new Date(time);
  today = today.toDateString();
  const navigate = useNavigate();
  const toSinglePage = (e) => {
    e.preventDefault();
    navigate('/singlepost', {
      state: {
        imageUrl,
        desc,
        title,
        time,
      },
    });
  };
  return (
    <div className="post-bg">
      <div onClick={toSinglePage}>
        {imageUrl ? (
          <img src={pf + imageUrl} alt="postimage" className="post-image" />
        ) : (
          <img src="images/news3.jpg" alt="postimage" className="post-image" />
        )}
        <span className="date">{today}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <hr />
      </div>
      <div className="reacts">
        <span>300</span>
        <i
          onClick={() => {
            console.log('like cliked');
          }}
        >
          <LikeTwoTone className="icons" />
        </i>
        <span>10</span>
        <i
          onClick={() => {
            console.log('comment cliked');
          }}
        >
          <CommentOutlined className="icons" />
        </i>
      </div>
    </div>
  );
}
