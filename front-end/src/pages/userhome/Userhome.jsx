import { useEffect, useState } from 'react';
import axios from 'axios';
import '../home/home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Loader from 'react-loader-spinner';
import Postcard from '../../components/postcard/Postcard';
import { useLocation } from 'react-router-dom';
import { axiosClient } from '../../utils';

export default function Userhome() {
  const userState = useLocation();
  const { data } = userState.state;
  console.log(data);
  const [postData, setPostData] = useState({
    message: '',
    pdata: [],
    success: 0,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const source = axios.CancelToken.source();
    try {
      const getPosts = async () => {
        try {
          const allpost = await axiosClient.get('/news');
          const { message, data, success } = allpost.data;
          setPostData({
            message,
            pdata: data,
            success,
          });

          setIsLoading(false);
        } catch (error) {
          console.log('error');
        }
      };

      getPosts();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('cancel');
      }
    }

    return () => {
      source.cancel();
    };
  }, []);

  const { pdata } = postData;

  return (
    <div>
      <span>{data.username}</span>
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
            pdata.map((post) => (
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
    </div>
  );
}
