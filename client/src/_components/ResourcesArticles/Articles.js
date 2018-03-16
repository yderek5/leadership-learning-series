import React from 'react';
import './articles.css';
import Title from "./../TitleBanner";

const Articles = (props) => {
    return(
        <div>
            <Title>
            Articles & Videos
            </Title>
            <div className="container">
            <h4>Enjoy doing your own research? Here are articles and resources ATCS finds helpful.</h4>
            <div className="row marginTop my-flex-card">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center d-flex align-items-stretch">
                            <strong className="cardHeaderText">Books to Help You Get Started</strong>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">
                                <p>Lisa's E-book</p>
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                    <input type="hidden" name="cmd" value="_s-xclick" />
                                    <input type="hidden" name="hosted_button_id" value="78RRLERE2JEGQ" />
                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                </form>

                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="https://www.amazon.com/What-Color-Your-Parachute-2018/dp/039957963X/ref=sr_1_3?ie=UTF8&qid=1518225592&sr=8-3&keywords=what+color+is+your+parachute+2018">
                                    <p>What Color is Your Parachute?</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="https://www.amazon.com/2-Hour-Job-Search-Technology-Faster/dp/1607741709/ref=sr_1_1?s=books&ie=UTF8&qid=1518225875&sr=1-1&keywords=2+hour+job+search">
                                    <p>2 Hour Job Search</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="https://www.slideshare.net/kocharsimardeep/the-2-hour-job-search-book-summary-63004716">
                                    <p>2 Hour Job Search PowerPoint</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center d-flex align-items-stretch">
                            <strong className="cardHeaderText">Where to Start with Your Resume</strong>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">
                                <a target="_blank" href="https://uptowork.com/blog/resume-dos-and-donts">
                                    <p>Resume Do's and Don'ts</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="https://resumegenius.com/resume-templates">
                                    <p>Resume Genius Templates</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="https://www.youtube.com/watch?v=bc0VAHE9CiU">
                                    <p>How to Get Your Resume Noticed by Employers in 5 Seconds</p>
                                </a>*Video*
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="row my-flex-card">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center d-flex align-items-stretch">
                            <strong className="cardHeaderText">Resources for Veteran Job Seekers</strong>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">
                                <a target="_blank" href="http://www.reinventingmichaelbanks.com/">
                                    <p>Reinventing Michael Banks</p>
                                </a>-Veterans Start Here!
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.slideshare.net/LinkedinforGood/linkedin-for-veterans-tipsheet">
                                    <p>Tips for Veteran Job Seekers on LinkedIn</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center d-flex align-items-stretch">
                            <strong className="cardHeaderText">Networking Tools</strong>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">
                                <a target="_blank" href="http://lifeworksgroup.blogspot.com/2018/01/the-ultimate-networkers-checklist.html?utm_content=66584605&utm_medium=social&utm_source=facebook&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_details_all%3B30I5z0EATD2bYp64ItpkOg%3D%3D">
                                    <p>The Ultimate Networkers Checklist</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="http://firstround.com/review/dont-just-network-build-your-meaningful-network-to-maximize-your-impact/">
                                    <p>How to Network Effectively</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="http://www.thestartupofyou.com/wp-content/themes/startupofyoutheme2012/img/TheStart-UpofYou-AdvancedLinkedInTips.pdf">
                                    <p>Advanced LinkedIn Tips</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="https://www.meetup.com/">
                                    <p>Find a Meetup Group in Your Town</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="row my-flex-card">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center d-flex align-items-stretch">
                            <strong className="cardHeaderText">Interviewing Best Practices</strong>
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">
                                <a target="_blank" href="https://www.slideshare.net/slideshow/embed_code/key/AoBWj4NLc6qDc6">
                                    <p>Behavioral Based interview – STAR method explained</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="https://www.youtube.com/playlist?list=PLJN9ezo7tUtuBZSa7UujIXmXYmdPg9vG5">
                                    <p>How to Ace the Interview series by Glassdoor</p>
                                </a>-Video Collection
                            </li>
                            <li className="list-group-item">
                                <p>These are standalone segments from the Glassdoor series above</p>
                                <a target="_blank" href="https://www.youtube.com/watch?v=u-sTOZ8dm5Y">
                                    <p>50 Most Common Interview Questions</p>
                                </a>-Video
                                <a target="_blank" href="https://www.youtube.com/watch?v=XuC0x6MFbnQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_details_all%3B30I5z0EATD2bYp64ItpkOg%3D%3D">
                                    <p>How to Prepare to Talk about Salary</p>
                                </a>-Video
                            </li>
                            <li className="list-group-item">
                                <a href="https://www.lhh.com/our-knowledge/2017/2017-us-guide-to-workforce-and-salary-trends">
                                    <p>Lee Hecht Harrison 2017 US Guide to Workforce and Salary Trends</p>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a target="_blank" href="https://www.glassdoor.com/Salaries/know-your-worth.htm?utm_content=buffere1722&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer">
                                    <p>Know Your Worth</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Articles;