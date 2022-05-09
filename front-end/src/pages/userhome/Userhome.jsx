import axios from "axios";
import { useEffect, useState } from "react";
import "./userhome.css";

export default function Userhome() {
  const pf = "http://localhost:3001/images/";
  const [postData, setPostData] = useState({
    message: "",
    data: [],
    success: 0,
  });

  useEffect(() => {
    const getPosts = async () => {
      try {
        const allpost = await axios.get("/news");
        const { message, data, success } = allpost.data;
        setPostData({
          message,
          data,
          success,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    getPosts();
  }, []);

  const { data } = postData;
  //<img src={pf + values.image} alt="" />
  const posts = data.map((values) => (
    <div key={values._id}>
      <h1>{values.title}</h1>
      <h1>{values.desc}</h1>
      {values.image ? (
        <img src={pf + values.image} alt="" />
      ) : (
        console.log("noppe")
      )}
    </div>
  ));
  return (
    <div className="home">
      <h1>user home</h1>
      <div>{posts}</div>
    </div>
  );
}
