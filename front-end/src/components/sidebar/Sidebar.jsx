import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="images/news3.jpg" alt="" />
      <h3>find entersting news</h3>{" "}
      <div className="sidebar-item">
        <hr />
        <h3>categories</h3>
        <ul>
          <li>
            <a href="/">music</a>
          </li>
          <li>
            <a href="/">science</a>
          </li>
          <li>
            <a href="/">football</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-item">
        <hr />
        <h3>tags</h3>
        <ul>
          <li>
            <a href="/">#music</a>
          </li>
          <li>
            <a href="/">#science</a>
          </li>
          <li>
            <a href="/">#football</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
