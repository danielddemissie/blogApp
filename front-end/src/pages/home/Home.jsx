import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Loader from 'react-loader-spinner';
import Postcard from '../../components/postcard/Postcard';

export default function Home() {
  const [postData, setPostData] = useState({
    message: '',
    data: [],
    success: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const allpost = await axios.get('/news');
        const { message, data, success } = allpost.data;
        setPostData({
          message,
          data,
          success,
        });

        setIsLoading(false);
      } catch (error) {
        console.log('error');
      }
    };

    getPosts();
  }, []);

  const { data } = postData;

  return (
    <div className="home">
      <div className="post-div">
        {isLoading ? (
          <div style={{ marginTop: '350px', marginLeft: '90%' }}>
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={70}
              width={70}
              timeout={3000} //3 secs
            />
          </div>
        ) : (
          data.map((post) => (
            <Postcard
              key={post._id}
              imageUrl={post.image}
              title={post.title}
              desc={post.desc}
              time={post.updatedAt}
            />
          ))
        )}
      </div>
      <aside className="sidebar">
        <Sidebar />
      </aside>
    </div>
  );
}
