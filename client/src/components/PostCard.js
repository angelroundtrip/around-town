import React, { useState, useEffect  } from 'react'
import { Card } from 'semantic-ui-react'
import PostContainer from './PostContainer'

function PostCard({post, user, location, handleDeletePosts, users, locations}) {
  // console.log(post && post.post_content && post.user && post.user.username)
  // console.log(user)
  // console.log(user && user.home_location && weatherData.current && weatherData.current.temp_f)

  // const [users, setUsers] = useState([])
  // // * Renders all users
  // useEffect(()=>{
  //   fetch(`/users`)
  //   .then(r=>r.json())
  //   .then(setUsers)
  // }, [])

  // console.log(users && user.username)
  // console.log(users)
  // console.log(users && user.home_location)
  // console.log(locations)

  const allLocations = locations.map(location => {return location.name})
  // console.log(allLocations)
  // console.log(weatherData)
  // * bring weatherAPI in and substitute location names for each post

  const postLocation = post && post.location && post.location.name
  // * Fetch from the backend
  const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=26d8da2542354788820132449220804&q=${postLocation}&aqi=no`
  // console.log(post && post.location && post.location.name)
  // console.log(weatherAPIUrl)
  const [weatherData, setWeatherData] = useState({});
  
  useEffect(() => {
    getWeatherWithFetch();
  }, [postLocation]);

  const getWeatherWithFetch = async () => {
    const response = await fetch(weatherAPIUrl);
    const jsonData = await response.json();
    setWeatherData(jsonData);
  };

  return (
    <div>

      <p></p>
      <Card style={{border: '1px solid gray', padding: '20px'}}>
        {user ? `${post && post.post_content && post.user && post.user.username} | 
        ${post && post.location && post.location.name} - 
        ${weatherData && weatherData.current && weatherData.current.temp_f} °F -
        ${weatherData && weatherData.current && weatherData.current.condition && weatherData.current.condition.text} | 
        ${post && post.post_content}` : null} 
        <button style={{float: 'right'}} onClick={() => handleDeletePosts(post.id)}>Delete Post</button>
      </Card>


      {/* <h1>{post.post_content}</h1> */}

    </div>
  )
}

export default PostCard