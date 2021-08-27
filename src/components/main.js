import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/AuthorPhoto.png';

const main = () => {
	return (
		<section className="main-section container">
			<div className="columns" id="main-author-content">
				<div className="column">
					<div className="wrapper-heading-content">
						<h1>About Me</h1>
					</div>
				</div>

				<div className="column is-three-fifths section-main-contents">
					<p>
						<span className="icon-auhtor">
							<img alt="author_icon" src={icon} />
							<span className="author-name-tagline">
								Edwin Alan Salhany
								<span className="author-fx" />
							</span>
						</span>
					</p>

					<p style={{textAlign: "justify"}}>
                    	I graduated in 1978 from Southern Missionary College, Collegedale, TN, cum laude with BA degrees in theology and applied religion.  I have been blessed to be able to use my education as a youth leader, church elder and lay-preacher.
					</p>

					<button className="btn-main-customize">
						<Link to="/about-the-author#author"> Read More</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default main;
