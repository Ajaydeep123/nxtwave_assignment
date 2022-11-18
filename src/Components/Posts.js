import React from 'react'
import { useState } from 'react';
import "./posts.css"
const Posts = ({posts, loading}) => {
    const [searchTitle, setSearchTitle] = useState('');
    const [items, setItems]= useState(posts)
    
    if(loading){
        return <h2>loading...</h2>
    }
    
    const filterMenu = (tag) => {
        const updatedItems = posts.filter((curElem) => {
            return curElem.tag === tag;
        });

        setItems(updatedItems);
    }
  return (
    <div>
    <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-center m-4">
                    <button  className="btn text-bg-light px-2 " onClick={() => setItems(posts)}>Resources</button>
                    <button className="btn text-bg-light px-2" onClick={() => filterMenu('request')} >Requests</button>
                     <button className="btn text-bg-light px-2 " onClick={() => filterMenu('user')} >Users </button>
                </div>
    </div>
        <input
        className='dabba '
        style={{paddingBottom:"-2rem"}}
        type="text"
        placeholder=''
        onChange={(e)=>setSearchTitle(e.target.value)}

        />
    < div class="posts-list">
        {items.filter((value)=>{
            if(searchTitle===''|| value.title.toLowerCase().includes(searchTitle.toLowerCase())){
                return value;
            }else{
                //
            }
        }).map(post=>(
            // <div key={post.id} >
            //     <img src={post.icon_url} alt="dabba"  className="card-img-top banner-img"></img>
            // </div>
            <div key={post.id} class="card card-body postsboxes">
                <div class="d-flex justify-content-start px-1">
                <img src={post.icon_url} alt="dabba" className='rounded border-white'  style={{ height: "5vh",width:"5vw" }}></img>
                <div className='px-2'>
                <h5 class="card-title">{post.title}</h5> 
                <h6 class="card-subtitle mb-2 text-muted">{post.category}</h6>
                </div>
                </div>
                
                <a href={post.link} class="card-link ">{post.link}</a>
               

                <h6 class="card-subtitle  py-2 text-black-50">{post.description}</h6>
            </div>
        ))}

    </div>
    </div>
  );
}

export default Posts