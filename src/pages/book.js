import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/main_book1.png'
import Book2 from '../assets/img/books/main_book2.png'
import Book3 from '../assets/img/books/main_book3.png'
import { DiscussionEmbed } from "disqus-react"
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'edwin-alan-salhany-1',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">Edwin Alan Salhany</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight" id="span-non-front">Book</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="Book | Edwin Alan Salhany" />
			<Banner bannerContext={bannerText} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns" id="adult-milkshake">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="you-can-too" alt="main-book" src={Book} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										<h1>The Gospel "LITE"</h1>
									 	<p>Four Witnesses - One Life</p>
								    </div>
									<p>
									Taking a unique approach to harmonizing the Biblical accounts, Edwin Alan Salhany expertly weaves the four Gospel stories together into one continuous chronological narrative, removing duplication, and yet preserving all the details and nuances of the different writers.  Using the venerable King James text, this is not a paraphrase, but a re-edit of the very Word of God.  An invaluable resource for Bible students, pastors, and teachers, each period and incident in the Savior’s life is identified and labeled, with full text references, dates, and indexes.  This is not just another Gospel harmony, grouping related texts together. With this unique consolidation of the Good News it is possible to read all four Gospels simultaneously, and easily study the record of Jesus’ life on earth
									</p>
								</section>

								<nav className="booklinkBlocks">
								    <span>Ebook :</span>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Gods-Opportunity-Expanded-Reuniting-Evangelizing-ebook/dp/B08R81527S/ref=sr_1_1?dchild=1&keywords=9781648953057&qid=1609168293&sr=8-1">Amazon</a></li> */}
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-can-too-how-an-aflac-rookie-built-the-business-in-a-year/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-gospel-lite-edwin-alan-salhany/1131036818?ean=9781643454375">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Gospel-Lite-Four-Witnesses-Life/dp/164345188X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554414877&sr=1-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-gospel-lite-edwin-alan-salhany/1131036818?ean=9781643451886">Barnes & Noble </a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Gods-Opportunity-Revised-Expanded/Hampton-Scott-Tonk/9781648953040?id=8049069540563&_ga=2.191972778.1023475077.1615324156-2145380449.1604906972#">Books A Million</a></li> */}
								</nav>
							</div>
						</div>
		
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor
