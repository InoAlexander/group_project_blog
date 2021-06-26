/* 
************************************************************************************************************************

Everything here is a proposal not really set in stone, routes were intentionally left blank i can add them in if youd like but since its a group project i wanted to make sure everyone has their area to shine in. with that said; THIS IS AN EXTREMELY BASIC set of instructions. This will display all posts by mapping through them similar to how Kevin Udink showed us in MERN. I tried to leave decent comments so my heiroglyphics can be deciphered. 

************************************************************************************************************************
*/

import React, {useState} from 'react';
import axios from "axios";
import {Link} from '@reach/router';

// props isnt explicitly used but  i passed it in just in case it'd to use it later
const AllPosts = (props) => {

// setting allPosts into state.
    const [allPosts, setAllPosts] = useState([]);

// method for axios call/fetch getting all posts will want to pull this from a route
    const getAllPosts = () =>{
        // axios is allowing us to access our database, we need a route 
        axios.get('http://localhost:8000/api/ROUTE_GOES_HERE')
        // has to return a promise
            .then((res)=>{
                console.log(res.data);
                setAllPosts(res.data);
                console.log("Promise in getAllPosts successful")
            })
            .catch((err) => {
                console.log(err, 'error in getAllPosts in allPosts.js')
            })
    }

    // more code here if needed

    return(
        //loops through posts using map
        //classnames are intentionally left blank
        <div>
            <h1 className=""> TITLE GOES HERE </h1>

        {/* button to get all posts using onClick events */}
            <button className=" " onClick={ (e) => getAllPosts(e)}> TEXT_HERE </button>

        {/* this will call from the routes to create a new post */}
            <Link to="" >
                <button className=""> ADD_POST_BUTON </button>
            </Link>

        {/* mapping through to display all entries */}
            {
                allPosts.map((post, index) => (
                    <div className="all" key={ index} >
                    <Link to={`/ROUTE/${post._id}`}>
                        <h3>{ post.MODEL_HERE } <br/>
                        {/* this will display the date added or updated depending on how you wire it */}
                        <p>added on: { (new Date(post.FROM_MODELS)).toLocaleDateString("en-us")}</p> </h3>
                    </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllPosts;
