import * as React from "react"
import { graphql } from "gatsby"
import * as styles from "../common/assets/styles/Index.module.scss"
import Layout from "../components/Layout"
import Landing from "../components/Landing/LandingDisplay"
import LandingDisplay from "../components/Landing/LandingDisplay"
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string
        tagline: string
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata

    return (
      <Layout>
        <LandingDisplay></LandingDisplay>
      </Layout>
    )
  }
}
