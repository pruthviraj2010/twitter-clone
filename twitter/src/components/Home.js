import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import Foryoupost from '../Sub-compo/Foryoupost';
import Following from '../Sub-compo/Following';

const Home = () => {
  const [activeLink, setActiveLink] = useState('forYou');

  return (
    
    <>
      <div className="row" style={{position:"fixed",backgroundColor:"black",borderRight:"1px rgb(54, 54, 54) solid "}}>
        <Link
          className={`col-2 heading ${activeLink === 'forYou' ? 'active' : ''}`}
          style={{color: activeLink === 'forYou' ? "white" : "grey"}}
          onClick={() => setActiveLink('forYou')}
          to="#"
        >
          For you
        </Link>
        <Link
          className={`col-2 heading ${activeLink === 'following' ? 'active' : ''}`}
          style={{color: activeLink === 'following' ? "white" : "grey"}}
          onClick={() => setActiveLink('following')}
          to="#"
        >
          Following
        </Link>
      </div>
      <div className="col" style={{marginTop:"50px",borderRight:"1px rgb(54, 54, 54) solid ",width:"600px"}}>
        <div className="row mt-3  ms-2 what" style={{paddingTop:"22px"}}> 
          <div  className='me-2' style={{height:"40px",width:"40px",backgroundColor:"white",borderRadius:"50%"}}></div>what is happening?</div>
        <div className="row post">
       <div className="col-1 he homeimg" style={{width:"10px"}}><i class="fa-regular   fa-image" style={{color: "#1D9BF0"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-brands ms-1 fa-square-git" style={{color: "#1D9BF0"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-solid ms-1 fa-sliders" style={{color: "#1D9BF0"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-regular ms-1 fa-face-smile" style={{color: "#1D9BF0"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-solid ms-1 fa-business-time" style={{color: "#1D9BF0"}}></i></div>
       <div className="col-1 homeimg" style={{width:"10px"}}><i class="fa-solid ms-1 fa-location-dot" style={{color: "#1D9BF0"}}></i></div>
       <div className="col bt" > <button className='btn pb  rounded-pill ps-3 pe-3 ms-1 fw-bold'>Post</button></div>
        </div>
      </div>
      <div className="col">
        {activeLink === 'forYou' && <Foryoupost />}   {/* Render Foryoupost when 'forYou' is active */}
        {activeLink === 'following' && <Following />} {/* Render Following when 'following' is active */}
      </div>
 </>
  );
}

export default Home;
