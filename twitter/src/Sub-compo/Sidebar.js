import React from 'react';

const Sidebar = () => {
    return (
        <>
            <div className='col-12 ps-1 mt-2' style={{ marginLeft: "40px" }}>
                <div className="row" style={{ width: "350px" }}>
                    <form className="d-flex">
                        <div className="position-relative">
                            <i className="fa-solid fa-magnifying-glass position-absolute" style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#71767B" }}></i>
                            <input className="form-control me-2 rounded-pill ps-5 bg-dark" style={{ border: "none", width: "344.67px", height: "41.33px", marginLeft: "-11px" }} type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </form>
                </div>

                <div className="row ps-1 mt-3 pt-2 text-start" style={{ borderRadius: "15px", border: "1px solid rgb(54, 54, 54)", color: "#E7E9EA", width: "348.67px" }}>
                    <p className='fw-bold' style={{ fontSize: "20px" }}>Subscribe To Premium</p>
                    <p style={{ fontSize: "15px", marginTop: "-7px" }}>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                    <button className='btn ms-2 fw-bold btn-primary rounded-pill' style={{ backgroundColor: "#1D9BF0", marginTop: "-5px", marginBottom: "12px", width: "106.2px" }}>Subscribe</button>
                </div>

                <div className="row ps-1 mt-3 pt-2 text-start" style={{ borderRadius: "15px", border: "1px solid rgb(54, 54, 54)", color: "#E7E9EA", width: "348.67px" }}>

                    <p className='fw-bold' style={{ fontSize: "20px" }}>What's happening</p>
                    <div className='mt-1' style={{ padding: "12px 16px", display: "flex", alignItems: "center" }}>
                        <img
                            src="imgs/clients1.jpg"
                            alt="Gamescom Opening Night Live 2024"
                            style={{ width: "79.17px", height: "79.17px", borderRadius: "8px", objectFit: "cover", marginRight: "13px" }}
                        />
                        <div style={{ marginLeft: "13px" }}>
                            <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold", color: "#E7E9EA" }}>Gamescom Opening Night Live 2024</p>
                            <p style={{ fontSize: "13px", color: "#71767B" }}>Gaming Event • Last night</p>
                        </div>
                    </div>

                    <div className=" mt-2 " style={{ height: "70px", width: "100%", padding: "12px 16px" }}>
                        <div className="row d-flex" style={{ width: "348.67px" }}>
                            <div className="col-9">
                                <p style={{ fontSize: "13px", color: "#71767B" }}>Entertainment • Trending</p>
                            </div>
                            <div className="col-3  text-end pe-4">
                                <i style={{ color: "#71767B" }} className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <p className='fw-bold' style={{ marginTop: "-15px", fontSize: "15px", color: "#E7E9EA" }}>#DeepikaPadukone</p>
                        <p style={{ marginTop: "-15px", fontSize: "13px", color: "#71767B" }}>Trending with <span style={{ fontSize: "13px", color: "#1D9BF0" }}>BiharPolice, #Bihar</span></p>
                    </div>

                    <div className=" mt-3 " style={{ height: "70px", width: "100%", padding: "12px 16px" }}>
                        <div className="row d-flex" style={{ width: "348.67px" }}>
                            <div className="col-9">
                                <p style={{ fontSize: "13px", color: "#71767B" }}>Sport • Trending</p>
                            </div>
                            <div className="col-3  text-end pe-4">
                                <i style={{ color: "#71767B" }} className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <p className='fw-bold' style={{ marginTop: "-15px", fontSize: "15px", color: "#E7E9EA" }}>Captain Rohit Sharma</p>
                        <p style={{ marginTop: "-15px", fontSize: "13px", color: "#71767B" }}>Trending with <span style={{ fontSize: "13px", color: "#1D9BF0" }}>#jayshah, #Sharad pawar</span></p>
                    </div>

                    <div className=" mt-3 " style={{ height: "70px", width: "100%", padding: "12px 16px" }}>
                        <div className="row d-flex" style={{ width: "348.67px" }}>
                            <div className="col-9">
                                <p style={{ fontSize: "13px", color: "#71767B" }}>Business & Finance • Trending</p>
                            </div>
                            <div className="col-3  text-end pe-4">
                                <i style={{ color: "#71767B" }} className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <p className='fw-bold' style={{ marginTop: "-15px", fontSize: "15px", color: "#E7E9EA" }}>#ZOMATO</p>
                        <p style={{ marginTop: "-15px", fontSize: "13px", color: "#71767B" }}>Trending with <span style={{ fontSize: "13px", color: "#1D9BF0" }}>#Paytm</span></p>
                    </div>

                    <div className=" mt-3 " style={{ height: "70px", width: "100%", padding: "12px 16px" }}>
                        <div className="row d-flex" style={{ width: "348.67px" }}>
                            <div className="col-9">
                                <p style={{ fontSize: "13px", color: "#71767B" }}>Politics • Trending</p>
                            </div>
                            <div className="col-3  text-end pe-4">
                                <i style={{ color: "#71767B" }} className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                        <p className='fw-bold' style={{ marginTop: "-15px", fontSize: "15px", color: "#E7E9EA" }}>#Prime Minister Narendra Modi</p>
                        <p style={{ marginTop: "-15px", fontSize: "13px", color: "#71767B" }}>Trending with <span style={{ fontSize: "13px", color: "#1D9BF0" }}>#Warsaw</span></p>
                    </div>
                    <button className='btn mt-3 mb-2 ms-1 d-flex justify-content-start' style={{ color: "#1D9BF0", fontSize: "15px" }}>Show more</button>
                </div>


                <div className="row mt-3" style={{ width: "348.67px", border: "1px rgb(54, 54, 54) solid", borderRadius: "15px" }}>
                    <p className='fw-bold text-start mt-2 ms-1' style={{ fontSize: "20px", color: "#E7E9EA" }}>Who to follow</p>
                    <div className='row mt-1 d-flex profile-row pt-3' style={{marginLeft:"1px",height:"65.4px"}}>
                        <div className="col-2 bg-light" style={{ width: "40px", height: "40px", borderRadius: "50%" }}></div>
                        <div className="col-7 text-start" style={{ marginTop: "-2px", height: "41.5px" }}>
                            <p className="fw-bold" style={{ fontSize: "15px", color: "#E7E9EA" }}>Hindenburg Research</p>
                            <p className="text-start" style={{ marginTop: "-20px", fontSize: "15px", color: "#71767B" }}>@HindenbuRgs</p>
                        </div>
                        <div className="col-3 d-flex justify-content-around">
                            <button className='rounded-pill btn fw-bold' style={{ width: "78px", height: "32px", backgroundColor: "#EFF3F4", color: "#0F1419", fontSize: "14px", padding: "0px 16px" }}>Follow</button>
                        </div>
                    </div>
                    <div className='row d-flex profile-row pt-3' style={{ marginLeft:"1px",height:"65.4px" }}>
                        <div className="col-2 bg-light" style={{ width: "40px", height: "40px", borderRadius: "50%"}}></div>
                        <div className="col-7 text-start" style={{ marginTop: "-2px", height: "41.5px" }}>
                            <p className="fw-bold" style={{ fontSize: "15px", color: "#E7E9EA" }}>Hindenburg Research</p>
                            <p className="text-start" style={{ marginTop: "-20px", fontSize: "15px", color: "#71767B" }}>@HindenbuRgs</p>
                        </div>
                        <div className="col-3 d-flex justify-content-around">
                            <button className='rounded-pill btn fw-bold' style={{ width: "78px", height: "32px", backgroundColor: "#EFF3F4", color: "#0F1419", fontSize: "14px", padding: "0px 16px" }}>Follow</button>
                        </div>
                    </div>
                    <div className='row d-flex profile-row pt-3' style={{marginLeft:"1px",height:"65.4px" }}>
                        <div className="col-2 bg-light" style={{ width: "40px", height: "40px", borderRadius: "50%" }}></div>
                        <div className="col-7 text-start" style={{ marginTop: "-2px", height: "41.5px" }}>
                            <p className="fw-bold" style={{ fontSize: "15px", color: "#E7E9EA" }}>Hindenburg Research</p>
                            <p className="text-start" style={{ marginTop: "-20px", fontSize: "15px", color: "#71767B" }}>@HindenbuRgs</p>
                        </div>
                        <div className="col-3 d-flex justify-content-around">
                            <button className='rounded-pill btn fw-bold' style={{ width: "78px", height: "32px", backgroundColor: "#EFF3F4", color: "#0F1419", fontSize: "14px", padding: "0px 16px" }}>Follow</button>
                        </div>
                    </div>

                    <button className='btn mt-3 mb-2 ms-1 d-flex justify-content-start' style={{ color: "#1D9BF0", fontSize: "15px" }}>Show more</button>
                </div>

                <div className="row d-flex p-2 mt-2">
                    <span className='col text-start footer-link' style={{ fontSize: "13px", color: "#71767B" }}>Terms of service</span>
                    <span className='col text-start footer-link' style={{ fontSize: "13px", color: "#71767B", marginLeft: "-45px" }}>Privacy policy</span>
                    <span className='col text-start footer-link' style={{ fontSize: "13px", color: "#71767B", marginLeft: "-65px" }}>Cookie policy</span>
                </div>
                <div className="row d-flex p-2" style={{ marginTop: "-15px" }}>
                    <span className='col text-start footer-link' style={{ fontSize: "13px", color: "#71767B" }}>Accessibility</span>
                    <span className='col text-start footer-link' style={{ fontSize: "13px", color: "#71767B", marginLeft: "-75px" }}>Ads info</span>
                    <span className='col text-start footer-link' style={{ fontSize: "13px", color: "#71767B", marginLeft: "-95px" }}>More...</span>
                    <span className='col text-start ' style={{ fontSize: "13px", color: "#71767B", marginLeft: "-105px" }}>© 2024 X Corp.</span>
                </div>


            </div>
        </>
    );
}

export default Sidebar;
