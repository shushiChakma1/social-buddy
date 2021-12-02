import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import About from "./component/About/About";
import Home from './component/Home/Home';
import PostDetails from "./component/postDetails/PostDetails";

function App() {
  return (
    <div >
      <BrowserRouter>
      <div>
        <ul>
          <li><Link to="about">about</Link></li>
          <li><Link to="home">home</Link></li>
        </ul>
      </div>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/post/:postId" element={<PostDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
