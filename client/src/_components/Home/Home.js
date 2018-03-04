import React from 'react';
import './home.css';

const Home = (props) => {
    return(
        <div className="container">
        <p>
            All Things Career Services (ATCS) offers coaching, training, and consulting solutions 
            tailored to meet the unique challenges impacting each stage along the employee lifecycle.
            Our programs range from individuals to company-wide efforts and include
            hiring strategies, mentoring programs, career development, and/or orgainization
            training. We maintain a consistent forcus on leadership principles and behaviors across three areas of service:
        </p>
        <br />
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header text-center"><a href="/services/individual"><strong className="cardHeaderText">Individual Career Transition</strong></a></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p>
                                ATCS can provide a step-by-step guide to succeeding in the job transition process.
                                These career strategies can be used by anyone, including those looking to move into
                                a new career field or leverage a non-traditional education path. 1:1 career coaching
                                is available to help you identify.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header text-center"><a href="/services/training"><strong className="cardHeaderText">Leadership Learning Series</strong></a></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p>
                                Our leadership learning series provides webinars and in person classNamees featuring a
                                collection of leadership topics. Courses can be customized to meet specific needs within
                                an organization and include material from the most relevant and up-to-date research available.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header text-center"><a href="/services/consultant"><strong className="cardHeaderText">Consulting Solutions</strong></a></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p>
                                Strategic consulting products bring organization to ambiguous situations. We work with you 
                                to understand your pain points and determine the best path to resolution. ATCS provides a
                                range of options, including research based recommendations to a planned program that can 
                                remain in-house, or be executed by ATCS.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;