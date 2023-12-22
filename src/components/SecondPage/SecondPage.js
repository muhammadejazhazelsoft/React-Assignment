import React from 'react'
import './SecondPage.css'
import Tabs from './Tabs'

const SecondPage = () => {
    return (
        <div className='SecondPageDiv'>
            <div className='SecondPageDivUpper pt-lg-5 pb-lg-3 pt-4 pb-2 bg-primary' >
                <div className="container">
                    <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12'>
                        <h1 className='text-white  fw-bold '>
                            Getting Started with JavaScript
                        </h1>
                        <p className='text-white mbw lead ln-litter'>
                            JavaScript is the popular programming language which powers web pages and web applications. This course will get you started coding in JavaScript.
                        </p>
                        <div className='d-flex align-items-center Font-Size87'>
                            <span className='textSize text-white text-decoration-none'>
                                <i class="fa-regular bookmark  fa-bookmark  text-white-50 me-1 iconHeight"></i> Bookmark
                            </span>
                            <span class="text-white ms-3  textSize">
                                <i class="fa-regular fa-user me-1  iconColor iconHeight"></i>
                                1200 Enrolled </span>
                            <span className="mx-1 ms-3 text-white">
                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                (140)
                            </span>

                            <span className='text-white ms-4 d-none d-md-block'>
                                <svg class="me-1 mt-n1" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="white"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="white"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="white"></rect></svg>
                                Intermediate
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="SecondPageLower bg-gray">
                <div className='container'>
                    <div className='row'>
                        <div className='mb-4 mb-lg-0 col-lg-8 col-md-12 col-sm-12'>

                            <Tabs />
                        </div>
                        <div className=' leftCard col-lg-4 col-md-12 col-sm-12'>
                            <div class="card mb-4 p-1" >
                                <img src="https://geeks-react.netlify.app/static/media/course-laravel.48ab426cd3f0adc40dd9.jpg" class="card-img-top" alt="..." style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                <div class="card-body">
                                    <div className="d-flex flex-colum gap-1 mb-3 ">
                                        <span className="text-dark fw-bold font-size-card">$600</span>
                                        <del className="fs-6 text-muted alignEnd ">$750</del>
                                    </div>
                                    <button className='btn btn-primary mb-2 w-100 Font-Size87fw btnSizee'>Start Free Month</button>
                                    <button className='btn btn-outline-primary Font-Size87fw btnSizee  w-100'>Get Full Access</button>
                                </div>

                            </div>
                            <div class="card  mb-4" >
                                <div class="card-header headerInCard">
                                    What’s included
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item text-muted text-small">
                                        <span className='text-primary'><i class="fa-regular fa-circle-play me-2 icon-Size"></i></span>
                                        12 hours video
                                    </li>
                                    <li class="list-group-item text-muted text-small">
                                        <span className='text-primary'>  <i class="fa-solid fa-certificate me-2 icon-Size"></i></span>

                                        Certificate
                                    </li>
                                    <li class="list-group-item text-muted text-small">
                                        <span className='text-gray'>  <i class="fa-solid fa-video  me-2 icon-Size"></i></span>

                                        watch Offline
                                    </li>
                                    <li class="list-group-item text-muted text-small">
                                        <span className='text-gray'>       <i class="fa-regular fa-clock iconColor me-2 icon-Size"></i></span>
                                        Lifetime access
                                    </li>

                                </ul>
                            </div>

                            <div class="card" >
                                <div class="card-body">
                                    <div className='d-flex align-items-center '>
                                        <div className="cardimgDiv">
                                            <img src="https://geeks-react.netlify.app/static/media/avatar-1.d2fd9642fd3628734b27.jpg" alt="" />

                                            <div className="cardimgStar">

                                                <img src="https://geeks-react.netlify.app/static/media/checked-mark.002a8cea8655e2488125a9486bf876c4.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className='ms-4'>
                                            <p className='UserName'>Jenny Wilson</p>
                                            <p className='UserDesignation text-muted'>Front-end Developer, Designer</p>
                                            <span class="fs-6 UserDesignation text-muted"><span class="text-warning">4.5</span><span class="mdi mdi-star text-warning me-2"></span>Instructor Rating</span>
                                        </div>
                                    </div>
                                    <div className='border-top mt-3 border-bottom mb-3 g-0 row textSize'>
                                        <div className="col pe-1 ps-2 py-3">
                                            <p className='fw-bold'>11,604</p>
                                            <p className='text-muted'>Students</p>
                                        </div>
                                        <div className="border-start col pe-1 ps-3 py-3">
                                            <p className='fw-bold'>32</p>
                                            <p className='text-muted'>Courses</p></div>
                                        <div className="border-start col pe-1 ps-3 py-3">
                                            <p className='fw-bold'>12,330</p>
                                            <p className='text-muted'>Reviews</p>
                                        </div>
                                    </div>
                                    <p className=' DescribeUser pb-3'>I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.</p>
                                    <button className='btn btn-outline-secondary btn-sm'>View Detail</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="Related-course pb-3">

                        <p className='related-course-Text'>Related Course</p>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div class="card mb-4" >
                                    <img src="https://geeks-react.netlify.app/static/media/course-laravel.48ab426cd3f0adc40dd9.jpg" class="card-img-top" alt="..." style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                    <div class="card-body">
                                        <h6 class="card-title">Laravel: The Ultimate Beginner’s Guide to Learn </h6>
                                        <ul className="mb-3 list-inline textSize">
                                            <li className=" list-inline-item CardLi">
                                                <i style={{ fontSize: '14px' }} class="fa-regular fa-clock CardLiiconColor"></i>
                                                2h 40m
                                            </li>
                                            <li className="list-inline-item CardLi">
                                                <svg class="me-1 mt-n1" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect></svg>
                                                Advance
                                            </li>
                                        </ul>
                                        <div className="lh-1 d-flex align-items-center mb-5  textSize">
                                            <span className="mx-1">
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                            </span>
                                            <span className="text-warning me-1" >
                                                2.5
                                            </span>
                                            <span className=" text-muted ">(1500)</span>
                                        </div>


                                    </div>
                                    <div className="card-footer textSize">
                                        <div style={{ color: '#64748B' }} className="align-items-center d-flex text-red-200 ">

                                            <img className="cardFooterImg" src="https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg" alt="" />
                                            <p style={{ marginRight: 'auto', marginLeft: '10px' }}>Miston Wilson</p>
                                            <img src="bookmark.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div class="card mb-4" >
                                    <img src="https://geeks-react.netlify.app/static/media/course-laravel.48ab426cd3f0adc40dd9.jpg" class="card-img-top" alt="..." style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                    <div class="card-body">
                                        <h6 class="card-title">Laravel: The Ultimate Beginner’s Guide to Learn </h6>
                                        <ul className="mb-3 list-inline textSize">
                                            <li className=" list-inline-item CardLi">
                                                <i style={{ fontSize: '14px' }} class="fa-regular fa-clock CardLiiconColor"></i>
                                                2h 40m
                                            </li>
                                            <li className="list-inline-item CardLi">
                                                <svg class="me-1 mt-n1" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect></svg>
                                                Advance
                                            </li>
                                        </ul>
                                        <div className="lh-1 d-flex align-items-center mb-5 textSize ">
                                            <span className="mx-1">
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                            </span>
                                            <span className="text-warning me-1" >
                                                2.5
                                            </span>
                                            <span className=" text-muted ">(1500)</span>
                                        </div>
                                    </div>
                                    <div className="card-footer textSize">
                                        <div style={{ color: '#64748B' }} className="align-items-center d-flex text-red-200 ">

                                            <img className="cardFooterImg" src="https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg" alt="" />
                                            <p style={{ marginRight: 'auto', marginLeft: '10px' }}>Miston Wilson</p>
                                            <img src="bookmark.svg" alt="" />
                                        </div>
                                    </div>
                                </div></div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div class="card mb-4" >
                                    <img src="https://geeks-react.netlify.app/static/media/course-laravel.48ab426cd3f0adc40dd9.jpg" class="card-img-top" alt="..." style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                    <div class="card-body">
                                        <h6 class="card-title">Laravel: The Ultimate Beginner’s Guide to Learn </h6>
                                        <ul className="mb-3 list-inline textSize">
                                            <li className=" list-inline-item CardLi">
                                                <i style={{ fontSize: '14px' }} class="fa-regular fa-clock CardLiiconColor"></i>
                                                2h 40m
                                            </li>
                                            <li className="list-inline-item CardLi">
                                                <svg class="me-1 mt-n1" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect></svg>
                                                Advance
                                            </li>
                                        </ul>
                                        <div className="lh-1 d-flex align-items-center mb-5 textSize ">
                                            <span className="mx-1">
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                            </span>
                                            <span className="text-warning me-1" >
                                                2.5
                                            </span>
                                            <span className="text-muted ">(1500)</span>
                                        </div>

                                    </div>
                                    <div className="card-footer textSize">
                                        <div style={{ color: '#64748B' }} className="align-items-center d-flex text-red-200 ">

                                            <img className="cardFooterImg" src="https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg" alt="" />
                                            <p style={{ marginRight: 'auto', marginLeft: '10px' }}>Miston Wilson</p>
                                            <img src="bookmark.svg" alt="" />
                                        </div>
                                    </div>
                                </div></div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div class="card mb-4" >
                                    <img src="https://geeks-react.netlify.app/static/media/course-laravel.48ab426cd3f0adc40dd9.jpg" class="card-img-top" alt="..." style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                    <div class="card-body">
                                        <h6 class="card-title">Laravel: The Ultimate Beginner’s Guide to Learn </h6>
                                        <ul className="mb-3 list-inline textSize">
                                            <li className=" list-inline-item CardLi">
                                                <i style={{ fontSize: '14px' }} class="fa-regular fa-clock CardLiiconColor"></i>
                                                2h 40m
                                            </li>
                                            <li className="list-inline-item CardLi">
                                                <svg class="me-1 mt-n1" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect></svg>
                                                Advance
                                            </li>
                                        </ul>
                                        <div className="lh-1 d-flex align-items-center mb-5 textSize ">
                                            <span className="mx-1">
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" style={{ fill: '#f59e0b' }} ></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                                <svg viewBox="0 0 24 24" role="presentation" style={{ width: '0.9rem', height: '0,92' }}><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" style={{ fill: '#f59e0b' }}></path></svg>
                                            </span>
                                            <span className="text-warning me-1" >
                                                2.5
                                            </span>
                                            <span className="text-muted ">(1500)</span>
                                        </div>

                                    </div>
                                    <div className="card-footer textSize textSize">
                                        <div style={{ color: '#64748B' }} className="align-items-center d-flex text-red-200 ">

                                            <img className="cardFooterImg" src="https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg" alt="" />
                                            <p style={{ marginRight: 'auto', marginLeft: '10px' }}>Miston Wilson</p>
                                            <img src="bookmark.svg" alt="" />
                                        </div>
                                    </div>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SecondPage