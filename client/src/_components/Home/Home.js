import React from 'react';
import './home.css';

const Home = (props) => {
    return(
        <div>
        <div className="topInfo">
            <div className="opacityColor">
            <div className="row container">
                <div className="col-md-12 bgColor">
                        <h5>
                            All Things Career Services (ATCS) offers coaching, training,
                            and consulting solutions tailored to meet the unique challenges
                            along each stage of the employee lifecycle. Our programs range
                            from individuals to company-wide efforts and include hiring strategies,
                            mentoring programs, career development, and organiaztional training.
                        </h5>
                    </div>
                </div>
                <div className="row container">
                    <div className="col-md-12 bgColor">
                        <h5>
                            Please sign into your account to learn more about how we can help
                            you and your organization achieve your career goals!
                        </h5>
                        <form action="/signup">
                            <button className="homeBtn btn btn-primary">Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <br />

        <div className="row my-flex-card">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header text-center d-flex align-items-stretch"><a href="/services/individual"><strong className="cardHeaderText">Individual Career Transition</strong></a></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p>
                                ATCS helps people entering the workforce, changing careers or
                                reviatalizing an exiting career to find focus and success.
                                People at any stage of their careers or in a range of
                                industries can benefit from coaching and our solutions are tailored
                                to meet your specific need to find a new job, explore future
                                career options, change jobs, improve leadership skills, or enhance
                                your current path. <a href='/signin'>Sign into your account</a> to get started with our
                                free transition guide!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header text-center d-flex align-items-stretch"><a href="/services/training"><strong className="cardHeaderText">Leadership Learning Series</strong></a></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p>
                            ATCS Leadership Learning Series: ATCS combines real world experiences with 
                            industry research to create engaging training to motivate and inspire employees. 
                            Our leadership learning series offers webinars and in person classes across a wide 
                            range of leadership topics. Need something specific? Courses can be tailored to 
                            meet organizational needs and will include teaching strategies to connect with any 
                            type of learner. <a href='/signin'>Sign into your account</a> to review our current schedule.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header text-center d-flex align-items-stretch"><a href="/services/consulting"><strong className="cardHeaderText">Consulting Solutions</strong></a></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p>
                            ATCS Consulting: ATCS provides strategic consulting experience to bring order to any 
                            ambiguous environment. We work to understand pain points, desired outcomes, and the 
                            best value-based path to help your organization achieve resolution. ATCS provides a 
                            range of customizable options, including research based recommendations for growth 
                            to a structured program that can be executed in-house or by ATCS. 
                            <a href='/signin'>Sign into your account</a> to set up a free 30-min intro with our team!

                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pad"></div>
        </div>
    </div>
    );
}

export default Home;