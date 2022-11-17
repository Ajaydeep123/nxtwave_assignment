import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';
const Homepage = () => {
    const[posts, setPosts] = useState([]);
    const[loading, setLoading]= useState(false);
    const[currentPage,setCurrentPage]= useState(1);
    const[postsPerPage]= useState(6);
//get data from api
useEffect(()=>{
    // we can't do async operation on useEffect so we'll create a function to fetch data from api
    const fetchPosts = async() =>{
        setLoading(true);
        const res= await axios.get("https://media-content.ccbp.in/website/react-assignment/resources.json")
        setPosts(res.data);
        setLoading(false);
    }
// call the function
    fetchPosts();
},[]);   //[] to mimic componentDidMount i.e : only run when we mount the component

//get current page's posts

const indexofLastPost = currentPage * postsPerPage;
const indexofFirstPost =  indexofLastPost -postsPerPage;
const currentPosts = posts.slice(indexofFirstPost, indexofLastPost)

// pagination 
const paginate =(pageNumber)=> setCurrentPage(pageNumber)



console.log(posts);
  return (
    <div>
     
   
    {/* <Options /> */}
    
    <div className='container-fluid mt-5'>
 
       <Posts posts={currentPosts} loading={loading} />
    </div>
    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default Homepage;