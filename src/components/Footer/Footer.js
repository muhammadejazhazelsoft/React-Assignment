import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='FooterContainer'>


            <div className="container py-2">
            <div className="row footerDiv">
    <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start">
        <span className="justify-content-start justify-content-sm-center ">
            © 2023 Geeks. All Rights Reserved.
        </span>
    </div>
    <div className="LinksDiv col-sm-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start">
        <p className="linkItem">
            Privacy
        </p>
        <p className="linkItem">
            Terms
        </p>
        <p className="linkItem">
            Feedback
        </p>
        <p className="linkItem">
            Support
        </p>
    </div>
</div>

            </div>
        </div>
    )
}

export default Footer