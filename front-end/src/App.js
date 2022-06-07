import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import AdminHome from './pages/adminhome/Adminhome';
import Header from './components/header/Header';
import UserHome from './pages/userhome/Userhome';
import Post from './components/writepost/Post';
import SinglePost from './pages/postsingle/Postsingle';
import Notfound from './pages/notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adminhome" element={<AdminHome />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/userhome" element={<UserHome />} />
        <Route exact path="/singlepost" element={<SinglePost />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
