import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiUser {
        nodes {
          email
          username
        }
      }
    }
  `)

  return (
    <Layout title="Hello">
      {
        data.allStrapiUser.nodes.map((user) => {
          return (
            <div>{user.username} &lt;{user.email}&gt;</div>
          )
        })
      }
    </Layout>
  )
}

export default IndexPage