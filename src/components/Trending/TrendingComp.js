import React from 'react'
import CardSlider from '../Slider/Slider'

const TrendingComp = () => {
    const cardData = [
        {
            imgSrc: "https://geeks-react.netlify.app/static/media/course-wordpress.d8a212a8a44f7edaccfb.jpg",
            title: "Laravel: The Ultimate Beginner’s Guide to Learn",
            duration: "2h 40m",
            level: "Advance",
            rating: 2.5,
            numRatings: 1500,
            price: {
                current: 600,
                original: 750
            },
            instructor: {
                name: "Miston Wilson",
                avatarSrc: "https://geeks-react.netlify.app/static/media/course-graphql.f5dec42e4ae0102ebffa.jpg"
            },
            bookmarked: true // You might want to toggle this based on user action
            // Add any additional properties as needed
        },
        {
            imgSrc: "https://geeks-react.netlify.app/static/media/course-javascript.8afdeff32816e30422da.jpg",
            title: "Laravel: The Ultimate Beginner’s Guide to Learn",
            duration: "2h 40m",
            level: "Advance",
            rating: 2.5,
            numRatings: 1500,
            price: {
                current: 600,
                original: 750
            },
            instructor: {
                name: "Miston Wilson",
                avatarSrc: "https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg"
            },
            bookmarked: true // You might want to toggle this based on user action
            // Add any additional properties as needed
        },
        {
            imgSrc: "https://geeks-react.netlify.app/static/media/course-node.291fe1cded8ebab181ab.jpg",
            title: "Laravel: The Ultimate Beginner’s Guide to Learn",
            duration: "2h 40m",
            level: "Advance",
            rating: 2.5,
            numRatings: 1500,
            price: {
                current: 600,
                original: 750
            },
            instructor: {
                name: "Miston Wilson",
                avatarSrc: "https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg"
            },
            bookmarked: true // You might want to toggle this based on user action
            // Add any additional properties as needed
        },

        {
            imgSrc: "https://geeks-react.netlify.app/static/media/course-angular.8553e67e04af598d0cc4.jpg",
            title: "Laravel: The Ultimate Beginner’s Guide to Learn",
            duration: "2h 40m",
            level: "Advance",
            rating: 2.5,
            numRatings: 1500,
            price: {
                current: 600,
                original: 750
            },
            instructor: {
                name: "Miston Wilson",
                avatarSrc: "https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg"
            },
            bookmarked: true // You might want to toggle this based on user action
            // Add any additional properties as needed
        },
        {
            imgSrc: "https://geeks-react.netlify.app/static/media/course-react.999d5d4b7ef4771200c2.jpg",
            title: "Laravel: The Ultimate Beginner’s Guide to Learn",
            duration: "2h 40m",
            level: "Advance",
            rating: 2.5,
            numRatings: 1500,
            price: {
                current: 600,
                original: 750
            },
            instructor: {
                name: "Miston Wilson",
                avatarSrc: "https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg"
            },
            bookmarked: true // You might want to toggle this based on user action
            // Add any additional properties as needed
        },
        {
            imgSrc: "https://geeks-react.netlify.app/static/media/course-laravel.48ab426cd3f0adc40dd9.jpg",
            title: "Laravel: The Ultimate Beginner’s Guide to Learn",
            duration: "2h 40m",
            level: "Advance",
            rating: 2.5,
            numRatings: 1500,
            price: {
                current: 600,
                original: 750
            },
            instructor: {
                name: "Miston Wilson",
                avatarSrc: "https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg"
            },
            bookmarked: true // You might want to toggle this based on user action
            // Add any additional properties as needed
        },
    
        {
            imgSrc: "https://geeks-react.netlify.app/static/media/course-laravel.48ab426cd3f0adc40dd9.jpg",
            title: "Laravel: The Ultimate Beginner’s Guide to Learn",
            duration: "2h 40m",
            level: "Advance",
            rating: 2.5,
            numRatings: 1500,
            price: {
                current: 600,
                original: 750
            },
            instructor: {
                name: "Miston Wilson",
                avatarSrc: "https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg"
            },
            bookmarked: true // You might want to toggle this based on user action
            // Add any additional properties as needed
        },
   
        {
            imgSrc: "https://geeks-react.netlify.app/static/media/course-python.0e5358f9e53a89fd75bd.jpg",
            title: "Laravel: The Ultimate Beginner’s Guide to Learn",
            duration: "2h 40m",
            level: "Advance",
            rating: 2.5,
            numRatings: 1500,
            price: {
                current: 600,
                original: 750
            },
            instructor: {
                name: "Miston Wilson",
                avatarSrc: "https://geeks-react.netlify.app/static/media/avatar-5.991ead30c8a647a4c57f.jpg"
            },
            bookmarked: true // You might want to toggle this based on user action
            // Add any additional properties as needed
        },


    ]


    return (
        <>
            <div className=" TrendingDiv">
                <div className="container">
                    <h3 className='highlightPara mb-4'>
                    Trending
                    </h3>
                    <CardSlider cardData={cardData} />
                </div>
            </div>
        </>
    )
}

export default TrendingComp