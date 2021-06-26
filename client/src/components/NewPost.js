//------------------------------------------------------------------------------------------------------------------- HI i would like to preface this by saying feel free to make any changes you would like or scrap it completely. This is working code That i commented as heavily as i could so its easy to know whats going on. This will work in tandem with another component i will be uploading PostForm I uncluded useEffect and Link; they are not used in the file but can be implemented easily. Let me know if there is anything you want to see changed.. of course this will need to be routed to work properly but i think will be fine to display just no backend until we get it hooked up.                         --------------------------------------------------------------------------------------------------------------------- //

import React, {useEffect, useState} from 'react';
import axios from "axios";
import {navigate, Link} from '@reach/router';
import PostForm from './PostForm';

// may or may not need props depending on what everyone wants to do
const NewPost = () => {
const [errors, setErrors] = useState({}) // uses an object because thats what we are wroking with
// below will be the json in our model
const [newPost, setNewPost] = useState({
    
})
//submit event handler
const submitHandler = (e) =>{
    e.preventDefault();
    // on submit to post this information using axios
    //i am leaving the end of the path blank in case anyone wa
    axios.post('http://localhost:8000/NEW_POST_PATH_HERE', newPost)
    // has to return a promise
        .then((res)=>{
            console.log(res.data);
            navigate('/');
        })
        //my console.logs will save your ass one day!:P
        .catch((err)=> {
            // will show every object within our VALIDATION that failed err.response.data.errors
            setErrors(err.response.data.errors);
            console.log("submitHandler not pathing, in newPost.js")
        })
}

// can add more code here if necessary. 

    return(
        // classnames left blank intentionally
        <div className="">
            <h1 className="">Create a Post</h1>
            <PostForm 
            // passing down from the post form 
                post = {newPost}
                setPost = {setNewPost }
                errors =  { errors }
                submitHandler = { submitHandler }
                buttonLabel={"Add Post"}
            />
        </div>
    )
}

export default NewPost;
