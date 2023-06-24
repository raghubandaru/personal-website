import React from "react"
import { css } from "@emotion/core"

import Contact from "../components/Contact"
import Container from "../components/Container"
import Layout from "../components/layout"
import Project from "../components/Project"
import useProjects from "../hooks/use-projects"
import { below } from "../utilities/breakpoints"

const IndexPage = () => {
  const projects = useProjects()

  return (
    <Layout>
      <p>Under revamp!</p>
    </Layout>
  )
}

export default IndexPage
