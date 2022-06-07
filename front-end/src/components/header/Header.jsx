//create header componet
import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import Modal from '../modal/Modal';

export default function Header(props) {
  const [modal, setModal] = useState(false);
  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <h1 className="name">News</h1>
        </Link>
      </div>
      <div className="right">
        <div className="menus">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/post">post</Link>
            </li>
            <li>
              <Link to="/signin">singin</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>

            <div
              className="profile"
              onClick={() => {
                setModal(!modal);
              }}
            >
              <img src="images/avt2.png" alt="" />
            </div>
          </ul>
        </div>
      </div>
      <div>
        <Modal modalState={modal} />
      </div>
    </div>
  );
}
