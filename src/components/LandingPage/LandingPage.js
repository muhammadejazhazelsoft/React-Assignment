import React from 'react'
import './LandingPage.css'
import RecommendedCards from '../RecommendedCom/RecommendedCards';
import MostPopular from '../MostPopular/MostPopular';
import TrendingComp from '../Trending/TrendingComp';
// import { faregular } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
    return (
        <div className='landingPageContainer'>
            <div className="UpperLandingPortion">
                <div className="container">
                    <div className="align-items-center g-0 row">
                        <div className="col-xl-5 col-lg-5 col-md-12 py-4">
                            <p className='text-white fw-bold welcomeGeekPara'>Welcome to Geeks UI Learning Application</p>
                            <p className='text-white-50 mb-4 lead ln-litter'>
                                Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                            </p>
                            <button className='btn btn-dark textSize btnSize'>Browse Courses</button>
                            <button className='btn btn-white bg-white mx-1 textSize insBtn '>Are You Instructor?</button>
                        </div>
                        <div className="text-lg-end text-center col-xl-7 col-lg-7 col-md-12 imgDiv">
                            <img src="https://geeks-react.netlify.app/static/media/hero-img.c1489dfacfd7fadae59a.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="informationDiv bg-white">
                <div className=" py-4  container" >
                    <div className="align-items-center g-0 row">
                        <div className="onlineCourcess mb-lg-0 mb-4  d-flex col-xs-12 col-sm-12 col-md-6 col-lg-6  col-xl-4">
                            <div className="IconBox">
                                <i class="fa-solid fa-video iconColor"></i>
                                {/* <img src="video.svg" alt="" /> */}
                            </div>
                            <div className="infotextBox ms-3">
                                <p className='  upperPara'>30,000 online courses</p>
                                <p className='EnjoyPara'>Enjoy a variety of fresh topics</p>
                            </div>
                        </div>
                        <div className="onlineCources  mb-lg-0 mb-4   d-flex col-xs-12 col-sm-12 col-md-6 col-lg-6  col-xl-4">
                            <div className="IconBox">
                                <i class="fa-regular fa-user iconColor"></i>
                            </div>
                            <div className="infotextBox ms-3">
                                <p className='  upperPara'>Expert instruction</p>
                                <p className='EnjoyPara'>Find the right instructor for you</p>
                            </div>
                        </div> 
                        <div className="onlineCources mb-lg-0 mb-4 d-flex col-xs-12 col-sm-12  col-md-6 col-lg-6 col-xl-4 ">
                            <div className="IconBox">
                                <i class="fa-regular fa-clock iconColor"></i>
                            </div>
                            <div className="infotextBox ms-3">
                                <p className='  upperPara'>Lifetime access</p>
                                <p className='EnjoyPara'>Learn on your schedule</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=" RecommendedForYouDiv">
                <div className="container">
                    <h3 className='highlightPara mb-4'>
                        Recommended to you

                    </h3>
                    <CardSlider />
                </div>
            </div> */}

            <RecommendedCards />
            <MostPopular/>
            <TrendingComp/>

            {/* <div className=" MostPopularDiv">
                <div className="container">
                    <h3 className='highlightPara mb-4'>
                    Most Popular

                    </h3>
                    <CardSlider />
                </div>
            </div>
            <div className=" TrendingDiv">
                <div className="container">
                    <h3 className='highlightPara mb-4'>
                    Trending

                    </h3>
                    <CardSlider />
                </div>
            </div> */}


        </div>
    )
}

export default LandingPage