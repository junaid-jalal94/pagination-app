import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import getposts from './GetEntries'
import Post from './components/posts/Post.js' 
import { Pagination } from './components/pagination/Pagination.js';

function App() {
  const[loading, setLoading] = useState(true);
  const[posts, setPosts] = useState(null);
  const[error, setError] = useState('');
  useEffect(() => {
      const fetchServerResponse = () => {
        return  getposts();
      }
      fetchServerResponse().then(x => {
        setPosts(x);
        setLoading(false);
      }).catch(err => setError(err));
  },[])
  
  if(loading){
    return null;
  }
  if(error) {
    return <h1>Error!</h1>
  }

  return (
    <div>
      {posts.length > 0 ?
      (<>
        <Pagination data = {posts} RenderComponent = {Post} title = "Posts" pageLimit = {5} dataLimit = {10}/>
      </>)
      : (<h1>No posts to show..</h1>)};
    </div>

  )
    
}

export default App;
