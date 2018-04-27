import React from 'react';
import './news.css';

const News = props => {
	
    return (
      <div>
        {/* Begin MailChimp Signup Form */}
        <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
        <div id="mc_embed_signup ">
          <form action="https://herokuapp.us12.list-manage.com/subscribe/post?u=0075976763f0a93a81fdefda0&id=4aa8e7e108" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
              <h2 className="text-center">Subscribe to our mailing list</h2>
              
              <div className="mc-field-group input-field container">
                <label htmlFor="EMAIL">Email Address  <span className="asterisk">*</span>
                </label>
                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div className="mc-field-group input-field container">
                <label htmlFor="NAME">First Name  <span className="asterisk">*</span>
                </label>
                <input type="text"  name="NAME" className="required" id="mce-NAME" />
              </div>
              <div className="mc-field-group input-field container">
                <label htmlFor="LNAME">Last Name <span className="asterisk">*</span></label>
                <input type="text"  name="LNAME" className="required" id="mce-LNAME" />
              </div>
              <div className="mc-field-group input-field container">
                <label htmlFor="MMERGE3">Linked IN URL </label>
                <input type="text" name="MMERGE3" className id="mce-MMERGE3" />
              </div>
              <div id="mce-responses" className="clear container">
                <div className="response" id="mce-error-response" style={{display: 'none'}} />
                <div className="response" id="mce-success-response" style={{display: 'none'}} />
              </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
              <div className="indicates-required container"><span className="asterisk">*</span> indicates required</div>
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_0075976763f0a93a81fdefda0_4aa8e7e108" tabIndex={-1} defaultValue /></div>
              <div className="clear container" >
              	<input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary" />
              </div>
            </div>
          </form>
          </div>
        {/*End mc_embed_signup*/}
      </div>

    );
  
};

export default News;
