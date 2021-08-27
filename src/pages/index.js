import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
import Newsletter  from '../components/newsletter'
import Banner from "../components/banner"
import { Helmet } from "react-helmet"

const IndexPage = () => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Edwin Alan Salhany</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-2">THE GOSPEL "LITE"</span> 
				<span className="banr-spn-highlight">FOUR WITNESSES - ONE LIFE</span>
				
				<Link
					key=""
					className="btn-banner-intro" 
					to="/books#you-can-too">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
			  <Helmet title="Home | Edwin Alan Salhany"/>
	  		 <Banner bannerContext={bannerText} />
			 <Main/>
			 <MainBottom />
			 <Newsletter />
	  	</Layout>
  	)

}

export default IndexPage
