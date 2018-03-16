import React from 'react';
import './individual.css';
import Title from '../TitleBanner';

const Individual = (props) => {
    return(
        <div>
        <Title>
        Individual Career Development
        </Title>
        <div className="container">
        <div className="row marginTop my-flex-card">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header textcenter">
                        <strong className="cardHeaderText">Coaching Packages</strong>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item">
                            <h4>Bronze Package</h4>
                            <p>2-month package includes 4 private sessions (45-75 minutes) over the course of 2 consecutive months.</p>
                            <strong>Cost:  $499</strong>
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="78RRLERE2JEGQ" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>

                        </li>
                        <li className="list-group-item">
                                <h4>Silver Package</h4>
                                <p>3-month package includes 6 private sessions (45-75 minutes) over the course of 2 consecutive months.</p>
                                <strong>Cost:  $629</strong>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="78RRLERE2JEGQ" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </li>
                        <li className="list-group-item">
                                <h4>Gold Package</h4>
                                <p>4-month package includes 10 private sessions (45-75 minutes) over the course of 4 consecutive months.</p>
                                <strong>Cost:  $849</strong>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="78RRLERE2JEGQ" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header text-center d-flex align-items-stretch">
                        <strong className="cardHeaderText">Transition into Tech Careers Package</strong>
                    </div>
                    <ul>
                        <li>
                        <p className="flow-text">
                    Make the transition into a technical career field by following our recommended list 
                    of free and for cost providers. Initial coaching sessions will be used to tailor your 
                    career path to meet the best transition outcome for your location and technical preference. 
                    Follow up sessions will track progress and focus on mentor relationships and networking efforts. 
                    Sessions will include mock interviews, advanced LinkedIn skills and best practices for resumes.
                    <br /><br />
                    6-month package includes 12 private sessions (45-75 minutes) over the course of 6 consecutive months.
                    <br /><strong>Cost:  $1149</strong>
                    </p>
                    <form className='flow-text' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="78RRLERE2JEGQ" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <br />
        <div className="row my-flex-card">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header textcenter">
                        <strong className="cardHeaderText">Mock Interview Package</strong>
                    </div>
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item">
                            <p>
                            Need help preparing for the next (or first) interview? The first session in our 
                            mock interview package covers a brief overview of your interview preparation 
                            needs and best practices to help you practice. The second and third session will 
                            be a mix of mock interview followed by feedback and additional recommendations to 
                            practice at home.
                            <br /><br />
                            1-month package includes 3 private sessions (30-45 minutes) over the course of 30 consecutive days.
                            </p>
                            <strong>Cost: $249</strong>
                            <form className='flow-text' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="78RRLERE2JEGQ" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="container text-center">
    <p className="flow-text">All packages include any additional services or assessments needed
        to further professional growth, as determined by coach and client. 
        ATCS does not write resumes or cover letters but will edit and provide 
        best practices for resumes and LinkedIn profiles.
    </p>
    <br/>
    <small className="text-center container">
    So, why choose All Things Career Services?
    <br />
    It's very important for you to know we are the best 
    fit to help you meet career goals. ATCS offers a free 
    introduction session to determine if we are the right coach 
    for you. Our approach is based on lessons learned in the corporate 
    environment and tends to be more practical and pragmatic, with actionable 
    next steps.
    </small>
    </div>
</div>
    );
}

export default Individual;