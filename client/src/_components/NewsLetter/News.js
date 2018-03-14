import React from 'react';
import './news.css';

const News = props => {
	return (
		<div className="container">
			<p>
				If you would like to be a part of our Network please sign up for
				our Newsletter. Helpful Resume tips, possible job leads, and
				lots more will be mailed once a month to keep everyone
				connected.
			</p>
			<a className="btn btn-primary grey lighten-1 waves-effect" href="http://eepurl.com/dnzpl9">Click Here To Sign up for The Newsletter</a>
		</div>
	);
};

export default News;
