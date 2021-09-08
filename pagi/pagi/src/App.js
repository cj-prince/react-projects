import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Posts from './components/Posts'
import Pagination from './components/Pagination'


const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  useEffect(()=>{
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPost()
  },[])

  // get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <h1 className='text-primary mb-3'>App pagination </h1>
      <Posts posts={currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPage = {posts.length}
       paginate={paginate} />
    </div>
  )
}

export default App
