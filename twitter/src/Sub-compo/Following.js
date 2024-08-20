import React from 'react'

const Following = () => {
  return (
    <>
    <div className='row ' style={{height:"100%",borderRight:"1px rgb(54, 54, 54) solid",width:"612px"}}>
       <h2 className='fw-bold ' style={{color:"white", textAlign: "start",marginLeft:"125px" }}>WELCOME TO X!</h2>
       <p className='d-flex justify-content-center' style={{color:"white", fontSize: "15px", textAlign: "start" }}>This is the best place to see what’s happening in <br/> your world. Find some people and topics to<br/> follow now.</p>
       <button className='btn  rounded-pill  fw-bold' style={{width:"130px",marginLeft:"125px",padding:" 13px",backgroundColor:"#1D9BF0" }}>Let's go!</button>
    </div>
    </>
  )
}

export default Following
