import React from 'react';
import './about.css';
import lisa from './lisa.png'
const About = (props) => {
    return(
<div className="text-center">
<h1> </h1>
    <div className="container topMargin">
        <div className="row">
            <div className="col-md-3 text-right">
                <img className="round-pic" src={lisa} alt="Lisa Parrot" />
            </div>
            <div className="col-md-8 text-left">
                <p>
                    Dr. Lisa Parrott is the founder of All Things Career Services, a consulting firm that helps employers and potential employees
                    obtain their desired career goals. She has an eclectic career background giving her a broader perspective
                    to identify creative solutions to organizational challenges. Dr. Lisa remains in beta mode, always learning
                    and growing to ensure her clients have the most relevant information to adapt to changing needs. Her
                    experiences include:
                </p>
                <ul>
                    <li>A Mission Continues Fellowship Alumni</li>
                    <li>a recurring speaker for Hiring Our Heroes Corporate Fellowship Program</li>
                    <li>selected as a member of 2013 Civilian Jobs Military Top 40 Under 40</li>
                    <li>created the monthly Seattle Marine For Life networking event in June 2012 (and it’s still going strong
                        today!)
                    </li>
                    <li>a presenter to the Above and Beyond Seminar for Hope for the Warriors</li>
                    <li>member of the Amazon team to receive the 2012 #1 Military Employer ranking from G.I. Jobs</li>
                    <li>instructor for the Transition Assistance Program (TAP) at Marine Corps Air Station Miramar</li>
                    <li>mentor for Boots to Shoes</li>
                    <li>prior Board Member for Hire America’s Heroes and Marine Executive Association</li>
                    <li>planned the $4 million-dollar logistics operations for a MEU exercise in Jordan during her decade in
                        the Marine Corps</li>
                </ul>
                <p> Before devoting herself fulltime on a self-employment adventure, Dr. Lisa survived
                    36 dogs years at Amazon and Amazon Web Services. During this time, she learned how to think from the
                    perspective of the customer which enabled her to develop lasting solutions with positive impact.
                    <br />
                    <br /> While at Amazon Dr. Lisa established the centralized diversity recruiting program and the AWS military
                    recruiting strategy to help hire diverse talent. She then turned her focus from hiring to helping current
                    employees excel, formalizing a 12-month technical rotation program that resulted in a significant increase
                    in employee advancement and satisfaction.
                    <br />
                    <br /> In her spare time Dr. Lisa is an advisory board member for
                    <a href="https://www.skillmil.com"> SkillMil</a> and
                    <a href="https://www.evolve3x.com"> Evolve</a>, two companies leveraging technology to explore the leading edge of their respective field
                    within Human Resources.
                    <br /> College isn’t for everyone, but Dr. Lisa loves learning new things:
                </p>
                <ul>
                    <li>Argosy University, Doctorate of Education in Organizational Leadership, 2014</li>
                    <ul>
                        <li>Dissertation: A Quantitative Study of the Effects of Mentorship During Military Transition on Time
                            to Employment</li>
                        <li>Comprehensive Exam Paper: Building effective mentoring programs in a virtual environment</li>
                    </ul>

                    <li>Argosy University, Master of Science in Management, 2011</li>
                    <li>Chaminade University, 48 credit hours in Master of Science in Community Psychology</li>
                    <li>Denison University, Bachelor of Arts, Psychology, 1999</li>
                </ul>
            </div>
        </div>
    </div>
</div>
    );
}

export default About;