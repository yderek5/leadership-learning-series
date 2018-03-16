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
            <div className="col-md-8 text-left flow-text">
                <p>
                    Dr. Lisa Parrott is the founder of All Things Career Services, a consulting firm that helps employers and potential employees
                    obtain their desired career goals. She has an eclectic career background giving her a broader perspective
                    to identify creative solutions to organizational challenges. Dr. Lisa remains in beta mode, always learning
                    and growing to ensure her clients have the most relevant information to adapt to changing needs. Her
                    experiences include:
                </p>
                
                    <blockquote>A Mission Continues Fellowship Alumni</blockquote>
                    <blockquote>A recurring speaker for Hiring Our Heroes Corporate Fellowship Program</blockquote>
                    <blockquote>Selected as a member of 2013 Civilian Jobs Military Top 40 Under 40</blockquote>
                    <blockquote>Created the monthly Seattle Marine for Life networking event in June 2012 (and it’s still going strong
                        today!)
                    </blockquote>
                    <blockquote>A presenter to the Above and Beyond Seminar for Hope for the Warriors</blockquote>
                    <blockquote>Member of the Amazon team to receive the 2012 #1 Military Employer ranking from G.I. Jobs</blockquote>
                    <blockquote>Instructor for the Transition Assistance Program (TAP) at Marine Corps Air Station Miramar</blockquote>
                    <blockquote>Mentor for Boots to Shoes</blockquote>
                    <blockquote>Prior Board Member for Hire America’s Heroes and Marine Executive Association</blockquote>
                    <blockquote>Planned the $4 million-dollar logistics operations for a MEU exercise in Jordan during her decade in
                        the Marine Corps</blockquote>
                
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
                
                    <blockquote>Argosy University, Doctor of Education in Organizational Leadership, 2014</blockquote>
                    
                        <blockquote>Dissertation: A Quantitative Study of the Effects of Mentorship During Military Transition on Time
                            to Employment</blockquote>
                        <blockquote>Comprehensive Exam Paper: Building effective mentoring programs in a virtual environment</blockquote>
                    

                    <blockquote>Argosy University, Master of Science in Management, 2011</blockquote>
                    <blockquote>Chaminade University, 48 credit hours in Master of Science in Community Psychology</blockquote>
                    <blockquote>Denison University, Bachelor of Arts, Psychology, 1999</blockquote>
                
            </div>
        </div>
    </div>
</div>
    );
}

export default About;