import React, { useRef } from "react";
import Slider from "react-slick";
import './Slider.css'

const CardSlider = (props) => {
    const cardData = props.cardData
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 800, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                {
                    cardData.map((cardValue) => {
                        return <div className="slide-item">
                            <div class="card" >
                                <img src={cardValue.imgSrc} class="card-img-top" alt="..." style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                                <div class="card-body">
                                    <h6 class="card-title card-title-text">{cardValue.title} </h6>
                                    <ul className="mb-3 list-inline fs-size">
                                        <li className=" list-inline-item CardLi">
                                            <i style={{ fontSize: '14px' }} class="fa-regular fa-clock CardLiiconColor"></i>
                                            {cardValue.duration}
                                        </li>
                                        <li className="list-inline-item CardLi">
                                            <svg class="me-1 mt-n1" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect></svg>
                                            {cardValue.level}
                                        </li>
                                    </ul>
                                    <div className="lh-1 d-flex align-items-center fs-size ">
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
                                        <span className=" text-muted">(1500)</span>
                                    </div>
                                    <div className="lh-1 mt-3 d-flex flex-colum gap-1 fs-size ">
                                        <span className="text-dark fw-bold">${cardValue.price.current}</span>
                                        <del className=" text-muted">${cardValue.price.original}</del>
                                    </div>

                                </div>
                                <div className="card-footer fs-size">
                                    <div style={{ color: '#64748B' }} className="align-items-center d-flex text-red-200 ">

                                        <img className="cardFooterImg" src={cardValue.instructor.avatarSrc} alt="" />
                                        <p style={{ marginRight: 'auto', marginLeft: '10px' }}>{cardValue.instructor.name}</p>
                                        {/* <i class="fa-regular fa-bookmark"></i> */}
                                        <img src="bookmark.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

{/* 
        {       <div className="slide-item">
                    <div class="card" style={{ width: '100%' }}>
                        <img src="https://geeks-react.netlify.app/static/media/course-wordpress.d8a212a8a44f7edaccfb.jpg" class="card-img-top" alt="..." style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                        <div class="card-body">
                            <h6 class="card-title">Laravel: The Ultimate Beginner’s Guide to Learn </h6>
                            <ul className="mb-3 list-inline">
                                <li className=" list-inline-item CardLi">
                                    <i style={{ fontSize: '14px' }} class="fa-regular fa-clock CardLiiconColor"></i>
                                    2h 40m
                                </li>
                                <li className="list-inline-item CardLi">
                                    <svg class="me-1 mt-n1" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect><rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect><rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect></svg>
                                    Advance
                                </li>
                            </ul>
                            <div className="lh-1 d-flex align-items-center ">
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
                                <span className="fs-6 text-muted">(1500)</span>
                            </div>
                            <div className="lh-1 mt-3 d-flex flex-colum gap-2 ">
                                <span className="text-dark fw-bold">$600</span>
                                <del className="fs-6 text-muted">$750</del>
                            </div>

                        </div>
                        <div className="card-footer">
                            <div style={{ color: '#64748B' }} className="align-items-center d-flex text-red-200 ">

                                <img className="cardFooterImg" src="https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg" alt="" />
                                <p style={{ marginRight: 'auto', marginLeft: '10px' }}>Miston Wilson</p>
                                <i class="fa-regular fa-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>} */}

            </Slider>

        </div>
    );
};

export default CardSlider;
