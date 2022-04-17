// import React, { useState } from "react";

// // { addPostToState } IS A PROP PASSED DOWN FROM Post PAGE
// function NewPostForm({ addPost }) {
//   // WE NEED TO PASS STATE HERE, BECAUSE NAME, IMAGE, AND PRICE WILL BE UPDATED WHEN NEW Post FORM DATA IS ADDED BY USER
//   const [postContent, setPostContent] = useState('')


//   // THIS IS A FUNCTION
//   const createPost = (e) => {
//     e.preventDefault()
//     // TELLS WHAT TO INCLUDE IN NEW Post CARD
//     const newPost = { postContent }
//     // ADDS NEW Post CARD TO STATE, WHICH UPDATES PAGE
//     addPost( newPost )
//   }

//   return (
//     <div className="new-Post-form">
//       <h2>New Post</h2>
//       {/* ONSUBMIT IS NEEDED FOR FORMS */}
//       <form onSubmit={createPost}>
//         {/* ONCHANGE IS NEEDED TO CHANGE/UPDATE. THIS UPDATES THE NEW DATA FROM NEW Post FORM AND ADDS IT TO PAGE WHEN SUBMITTED */}
//         <input onChange={(e) => setPostContent(e.target.value)} type="text" name="post" placeholder="Post name" />
        
//         <button type="submit">Add Post</button>

//       </form>
//     </div>
//   );
// }

// export default NewPostForm;