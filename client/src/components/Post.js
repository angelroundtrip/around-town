import React, { useState, useEffect } from 'react'
import PostList from './PostList'
import { Input } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import NewPostForm from './NewPostForm'


function PostForm({user, location, handleDeletePosts, weatherData}) {

  const [postContent, setPostContent] = useState("")
  const [posts, setPosts] = useState([])
  // console.log(posts)
  
  const addNewPosts = newObj => {
    fetch(`/posts`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newObj)
    })
    .then(r => r.json())
    .then(post => {setPosts([post, ...posts])
    })
  }

  const submitNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      post_content: postContent,
      user_id: user.id,
      location_id: location.id
    }
    addNewPosts(newPost)
    setPostContent("")
    // console.log(newPost)
  }

  // * Renders all posts
  useEffect(()=>{
    fetch(`/posts`)
    .then(r=>r.json())
    .then(setPosts)
  }, [])

   // * Search function by location
   const [locationData, setLocationData] = useState([])
   const [search, setSearch] = useState('')

   useEffect(() => {
     fetch('/posts')
       .then(response => response.json())
       .then(setLocationData)
   }, [])

   const addPost = (post) => setPosts([post, ...posts])
  const changeSearch = (e) => setSearch(e.target.value)
 
   const filteredSearch = locationData.filter(locationObj => {
     const search1 = locationObj.user.home_location.toLowerCase()
     const search2 = search.toLowerCase()
     return search1.includes(search2)
   })
  //  console.log(filteredSearch)
  //  console.log(posts) 
// * testing below, comment out above if something breaks
  // const [posts, setPosts] = useState([])
  // const [searchValue, setSearchValue] = useState('')

  // // FETCHES Post OBJECT DATA
  // useEffect(() => {
  //   fetch(`/posts`)
  //     .then( r => r.json() )
  //     .then( setPosts )
  // }, [])

  // // ADDS NEW Post CARD TO THE TOP OF THE ARRAY (IN THE Post LIST)
  // const addPostToState = (post) => setPosts( [post, ...posts] )
  // // GRABS SEARCH INPUT IN THE SEARCH PostS FIELD
  // const changeSearchValue = (e) => setSearchValue(e.target.value )
  
  // // FILTERS SEARCHED Post(S)
  // const searchedPosts = posts.filter(postObj => {
  //   const lowerName = postObj.post_content.toLowerCase()
  //   const lowerSearch = searchValue.toLowerCase()
  //   return lowerName.includes( lowerSearch )
  // }) 
  return(
//     <div>
//       {/* <form onSubmit={submitNewPost}> */}

//       <SearchBar changeSearchValue={changeSearchValue} />

//       <NewPostForm addPostToState={addPostToState} /> 
    
//       <PostList posts={searchedPosts} />
//       {/* </form> */}
//     </div>
//   )
// }
    <div>

      <form onSubmit={submitNewPost}> 

      {/* <SearchBar changeSearch={changeSearch} /> */}

      {/* <NewPostForm addPost={addPost} user={user} />  */}

      <p></p> 

      
      <input 
        onChange={(e)=>setPostContent(e.target.value)} 
        style={{width: '80%'}}
        type="text" 
        name="postContent" 
        placeholder="A cool event this weekend? Had a great meal at a restaurant? Traveling somewhere? Share what's happening around town!"
        value={postContent}
      />
      <button type="submit" style={{width: '10%'}}> Add Post </button>
   
      <PostList 
      // * currently breaks either search or posts (without manual refresh)
        posts={posts} 
        // posts={filteredSearch}
        user={user} 
        handleDeletePosts={handleDeletePosts} 
        weatherData={weatherData}
        filteredSearch={filteredSearch}
      />

      {/* <h1> NEW POST </h1> */}
    
      </form>
    </div>
  )
}

export default PostForm
