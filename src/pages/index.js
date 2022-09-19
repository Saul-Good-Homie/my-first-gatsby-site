import * as React from 'react'
import Layout from '../pages/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../pages/seo'



const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/Italian_Lake.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />


export default IndexPage