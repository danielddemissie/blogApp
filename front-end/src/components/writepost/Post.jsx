import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./post.css";

function Post() {
  const navigate = useNavigate();
  const [postState, setPostState] = useState({
    title: "",
    desc: "",
    image: "",
  });

  const [file, setFile] = useState(null);
  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const today = new Date();
      const time = today.setUTCMilliseconds(0);
      const formData = new FormData();

      const filename =
        "image" + time.toString() + "." + file.name.split(".")[1];
      postState.image = filename;
      formData.append("name", filename);
      formData.append("image", file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      try {
        const res = await axios.post("/news/upload", formData, config);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    console.log("no file");

    try {
      const resp = await axios.post("/news/addnews", { ...postState });
      console.log(resp);
      navigate("/adminhome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post">
      <form onSubmit={onFormSubmit}>
        <div className="image">
          {file && <img src={URL.createObjectURL(file)} alt="" />}
        </div>
        <div className="post-form">
          <label className="post-label">Title</label>
          <div className="form-group">
            <input
              className=""
              type="text"
              id="title"
              placeholder="title..."
              onChange={(e) => {
                setPostState({ ...postState, title: e.target.value });
              }}
            />
          </div>
          <label className="post-label" htmlFor="text-desc">
            Description
          </label>
          <div className="form-group">
            <textarea
              name="desc"
              id="text-desc"
              cols="200"
              rows="6"
              placeholder="description..."
              onChange={(e) => {
                setPostState({ ...postState, desc: e.target.value });
              }}
            ></textarea>
          </div>
          <label className="post-label" htmlFor="text-desc">
            Add photo
          </label>
          <div className="form-pho">
            <input
              className="form-control"
              type="file"
              id="photo"
              name="image"
              placeholder="photo"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Post;
