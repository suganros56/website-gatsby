import React from 'react'
import { graphql } from 'gatsby'
import Seo from 'my-gatsby-site/src/components/Seo.js'
import Homelayout from '../components/homeLayout'

const BlogPage = ({ data })=> {
    return (
        <Homelayout title="Blog">
            <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
        </Homelayout>
    )
}
export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage