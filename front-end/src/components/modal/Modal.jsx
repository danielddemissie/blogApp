import "./modal.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Modal({ modalState }) {
  const [modal, setModal] = useState(modalState ? true : false);
  useEffect(() => {
    setModal(modalState);
  }, [modalState]);
  console.log("modalState", modalState);
  console.log("modal", modal);
  return (
    <div
      className="modal-div"
      style={{ display: modalState & modal ? "block" : "none" }}
    >
      <div className="modal-warpper">
        <div
          className="links"
          onClick={() => {
            setModal(false);
          }}
        >
          <Link to="/profile" className="link">
            profile
          </Link>
          <Link to="/" className="link">
            logout
          </Link>
        </div>
      </div>
    </div>
  );
}
