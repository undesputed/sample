import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/AuthorPhoto.png'
import { Helmet } from "react-helmet";
import {Link} from 'gatsby';


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Edwin Alan Salhany</span>
			<h1 className="banr-header-fx">
				About the
				<span 
					className="banr-spn-highlight"
					id="span-non-front"
					>Author</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="About the Author | Edwin Alan Salhany"/>
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Edwin Alan Salhany
					 				</span>
					 			</div>

					 			<h4>
									{/* Shut your eyes, learn to Love more; and we'll see all we need to know */}
					 			</h4>

					 			{/* <span className="ata-span-fx">author quote</span> */}
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p style={{textAlign: 'justify'}}>
                                  I am the American born son of missionary parents, grew up in Central Africa, and am a lifelong disciple of Christ and a student of the Scriptures. 
								</p>

								<p style={{textAlign: 'justify'}}>
								I graduated in 1978 from Southern Missionary College, Collegedale, TN, cum laude with BA degrees in theology and applied religion.  I have been blessed to be able to use my education as a youth leader, church elder and lay-preacher.
								</p>

								<p style={{textAlign: 'justify'}}>
								Before, during and after college I worked in various blue-collar trades until I found employment as an industrial arts, Bible and history teacher at Pine Forest Academy, a private high school in Chunky, Mississippi. I finished my tenure there as the acting school principal.  I am also a certified locksmith, an ASE certified master auto mechanic, and electronic engine control specialist.  Since 1984 I have also been a lifestyle/nutritional consultant and the owner/operator, in partnership with my wife, of a successful health and nutrition retail store.  
								</p>

								<p style={{textAlign: 'justify'}}>
								While I entertain a wide range of interests my favorite areas of study include Bible history and chronology, eschatology, and the prophetic significance of the Jewish Tabernacle/Temple services and festivals. 
								</p>

								<p style={{textAlign: 'justify'}}>
								I reside with my wife and family in Ethridge, Tennessee, where we serve our community through our natural foods business and various community health projects, and our church as local leaders.     
								</p>
			
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor