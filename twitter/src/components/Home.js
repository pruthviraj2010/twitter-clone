import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeLink, setActiveLink] = useState('forYou');

  return (
    <>
      <div className="row">
        <Link
          className={`col-2 heading ${activeLink === 'forYou' ? 'active' : ''}`}
          onClick={() => setActiveLink('forYou')}
          to="#"
        >
          For you
        </Link>
        <Link
          className={`col-2 heading ${activeLink === 'following' ? 'active' : ''}`}
          onClick={() => setActiveLink('following')}
          to="#"
        >
          Following
        </Link>
      </div>
      <div className="col">
        <div className="row mt-3 ms-2 what"> <div  className='me-2' style={{height:"40px",width:"40px",backgroundColor:"white",borderRadius:"50%"}}></div>what is happening?</div>
        <div className="row post">
       <div className="col-1 he homeimg" style={{width:"10px"}}><i class="fa-regular  fa-image" style={{color: "#346fd5"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-brands fa-square-git" style={{color: "#346fd5"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-solid fa-sliders" style={{color: "#346fd5"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-regular  fa-face-smile" style={{color: "#346fd5"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-solid  fa-business-time" style={{color: "#346fd5"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-solid  fa-location-dot" style={{color: "#346fd5"}}></i></div>
       <div className="col bt" > <button className='btn btn-primary rounded-pill ps-3 pe-3  fw-bold'>Post</button></div>
        </div>
      </div>
    </>
  );
}

export default Home;
