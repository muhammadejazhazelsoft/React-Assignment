import Accordion from 'react-bootstrap/Accordion';
import './Tabs.css'

function AccordionComp() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header className='AccordingHeader' >Introduction to Javascript</Accordion.Header>
                <Accordion.Body>
                    <div className='px-0 py-1 border-0  d-flex justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span  className='Font-Size87'>
                            <span   class="icon-shape bg-light icon-sm rounded-circle me-2"><svg viewBox="0 0 24 24" role="presentation" style={{ width: '1.2rem', height: '1.2rem' }} ><path d="M8,5.14V19.14L19,12.14L8,5.14Z" style={{ color: 'red' }}></path></svg> </span>
                            Introduction</span>
                        <span className='Font-Size87'>1m 7s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>
                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"><svg viewBox="0 0 24 24" role="presentation" style={{ width: '1.2rem', height: '1.2rem' }} ><path d="M8,5.14V19.14L19,12.14L8,5.14Z" style={{ color: 'red' }}></path></svg> </span>
                            Installing Development Software</span>
                        <span  className='Font-Size87'>3m 11s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>
                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"><svg viewBox="0 0 24 24" role="presentation" style={{ width: '1.2rem', height: '1.2rem' }} ><path d="M8,5.14V19.14L19,12.14L8,5.14Z" style={{ color: 'red' }}></path></svg> </span>
                            Hello World Project from GitHub</span>
                        <span  className='Font-Size87'>4m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>
                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Our Sample website</span>
                        <span  className='Font-Size87'>4m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>JavaScript Beginning</Accordion.Header>
                <Accordion.Body>
                <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>
                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                        Introduction</span>
                        <span  className='Font-Size87'>6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>
                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Adding Javascript Code to a Web page</span>
                        <span  className='Font-Size87'>2m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>
                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Working with JavaScript files</span>
                        <span  className='Font-Size87'>9m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Variables and Constants</Accordion.Header>
                <Accordion.Body>
                <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>
                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                        Introduction</span>
                        <span  className='Font-Size87'>6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Adding Javascript Code to a Web page</span>
                        <span  className='Font-Size87'>2m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Working with JavaScript files</span>
                        <span  className='Font-Size87'>9m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Program Flow</Accordion.Header>
                <Accordion.Body>
                <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                        Introduction</span>
                        <span  className='Font-Size87'>6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Adding Javascript Code to a Web page</span>
                        <span  className='Font-Size87'>2m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Working with JavaScript files</span>
                        <span  className='Font-Size87'>9m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Funtions</Accordion.Header>
                <Accordion.Body>
                <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                        Introduction</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Adding Javascript Code to a Web page</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Working with JavaScript files</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Objects and the DOM</Accordion.Header>
                <Accordion.Body>
                <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                        Introduction</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Adding Javascript Code to a Web page</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Working with JavaScript files</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>Arrays</Accordion.Header>
                <Accordion.Body>
                <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                        Introduction</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Adding Javascript Code to a Web page</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Working with JavaScript files</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>Scope and Hoisting</Accordion.Header>
                <Accordion.Body>
                <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                        Introduction</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Adding Javascript Code to a Web page</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Working with JavaScript files</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
                <Accordion.Header>Summary</Accordion.Header>
                <Accordion.Body>
                <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                        Introduction</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Adding Javascript Code to a Web page</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                    <div className='d-flex  py-1  justify-content-between align-items-center text-inherit text-decoration-none'>
                        <span className='Font-Size87'>

                            <span class="icon-shape bg-light icon-sm rounded-circle me-2"> <img src="lock.svg" alt="" /> </span>
                            Working with JavaScript files</span>
                        <span  className='Font-Size87' >6m 1s</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionComp;