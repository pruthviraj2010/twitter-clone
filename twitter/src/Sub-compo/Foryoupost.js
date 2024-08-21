import React, { useState } from 'react';
import amdtax from '../img/amdtax.jpg';
import clients1 from '../img/clients1.jpg';
import clients2 from '../img/clients2.jpg';
import buildings3 from '../img/buildings3.jpg';
import buildings2 from '../img/buildings2.jpg';
import InfiniteScroll from 'react-infinite-scroll-component';

const Foryoupost = () => {
  // Initial state for posts
  const [posts, setPosts] = useState([
    {
      name: "John Doe",
      userimage: clients1,
      username: "@johndoe",
      date: "1d",
      description: "As the stock market continues to soar while Trump’s stock continues to sink (from a high of $79 a share), is anyone at some point going to ask him why his stock keeps dropping month after month? Is that an unfair question?",
      img: buildings3,
      repost: "13",
      like: "100",
      comments: "200",
      analysics: "48"

    },
    {
      name: "Jane Smith",
      userimage: clients2,
      username: "@janesmith",
      date: "20min",
      description: "Loving the weather today.",
      img: buildings2,
      repost: "13",
      like: "100",
      comments: "200",
      analysics: "48"
    },
    {
      name: "Alice Johnson",
      userimage: amdtax,
      username: "@alicejohnson",
      date: "2hr",
      description: "Just finished a great book.",
      img: amdtax,
      repost: "13",
      like: "100",
      comments: "200",
      analysics: "48"
    }
  ]);

  const [likecount, setLikeCount] = useState(posts.like);
  const handleLikeClick = (index) => {
    const newPosts = [...posts];
    const currentPost = newPosts[index];
  
    // Ensure like is treated as a number
    const likeCount = parseInt(currentPost.like, 10);
  
    // Toggle the isLiked state and adjust the like count accordingly
    if (currentPost.isLiked) {
      currentPost.like = likeCount - 1;
    } else {
      currentPost.like = likeCount + 1;
    }
  
    currentPost.isLiked = !currentPost.isLiked; // Toggle the like status
    setPosts(newPosts); // Update the posts state
  };
  
  // Function to fetch more data (simulate with a timeout)
  const fetchMoreData = () => {
    setTimeout(() => {
      setPosts(posts.concat([
        // Add more posts if needed
      ]));
    }, 1500); // Simulate a delay
  };

  return (
    <div style={{ borderRight: "1px rgb(54, 54, 54) solid", width: "600px", overflowX: "hidden" }}>
      <InfiniteScroll
        dataLength={posts.length} // Number of posts currently displayed
        next={fetchMoreData} // Function to fetch more data
        hasMore={true} // Set to true to allow fetching more data
        loader={<h4>Loading...</h4>} // Loader component
      >
        {posts.map((post, index) => (
          <div key={index} style={{ borderBottom: "1px rgb(54, 54, 54) solid", padding: "0px 15px" }}>
            <div className='row mt-2' style={{ display: "flex", alignItems: "center", overflowX: "hidden" }}>
              <div className="row">
                <div className="col-1">  <img
                  src={post.userimage}
                  alt={`${post.name}'s avatar`}
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                /></div>
                <div className="col-11"> <p style={{ marginBottom: "0", color: "#E7E9EA", display: "flex", justifyContent: "start" }}>
                  <span style={{ fontWeight: "bold" }}>{post.name}</span>
                  <span style={{ color: "#71767B", marginLeft: "5px" }}>{post.username}</span>
                  <span style={{ color: "#71767B", marginLeft: "5px" }}>• {post.date}</span>
                </p>
                  <div style={{ marginTop: "10px", color: "#E7E9EA", wordWrap: "break-word", fontSize: "15px", textAlign: "start" }}>
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", marginLeft: "42px" }}>


                {post.img && (
                  <img
                    src={post.img}
                    alt="Post"
                    className='mb-2'
                    style={{ maxWidth: "100%", width:"90%", maxHeight: "510px", borderRadius: "5%", border: "1px rgb(54, 54, 54) solid", objectFit: "contain", display: "block", margin: "auto", marginLeft: "0px" }}
                  />
                )}
                
              </div>
             
            </div>
            <div className="row  ms-5 mt-2  " style={{width:"500px"}}>
              <div style={{color:"#71767B"}} className="col-2 posticon d-flex justify-content-center"><p><i class="fa-regular me-1 fa-comment" ></i>{post.comments}</p></div>
              <div style={{color:"#71767B"}} className="col-2 ms-3 posticon d-flex justify-content-center"><p><i class="fa-solid me-1 fa-retweet"></i>{post.repost}</p></div>
              <div 
                style={{ color: "#71767B", cursor: "pointer" }} 
                className="col-2 ms-3 d-flex justify-content-center" 
                onClick={() => handleLikeClick(index)}
              >
                <p><i style={{color: post.isLiked ? "red" : "#71767B"}} className={`fa-${post.isLiked ? "solid" : "regular"} me-1 fa-heart me-1`}></i>{post.like}</p>
              </div>
        <div style={{color:"#71767B"}} className="col-2 ms-3 posticon d-flex justify-content-center"> <p><i class="fa-solid fa-chart-simple me-1" ></i>{post.analysics}</p></div>
              <div style={{color:"#71767B"}} className="col-2 ms-3 posticon d-flex justify-content-end"><p><i class="fa-regular fa-bookmark " ></i></p> <p className='ms-3'><i class="fa-solid fa-arrow-up-from-bracket"style={{color:"#71767B"}}></i></p></div>
                
               
                

              </div>

          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Foryoupost;
