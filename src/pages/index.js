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
      <header
        css={css`
          background: #f0f4f8;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          min-height: 80vh;
        `}
      >
        <Container>
          <div
            css={css`
              text-align: center;

              h1 {
                margin-bottom: 1.5rem;

                ${below.small`
                  margin-bottom: 2rem;
                `}
              }

              h2 {
                margin-bottom: 2.5rem;

                ${below.small`
                  margin-bottom: 3rem;
                `}
              }
            `}
          >
            <h1>Raghu Bandaru</h1>
            <h2>Full Stack Software Engineer</h2>
            <p>
              Developing accessible and secure web applications to solve client
              business requirements and to enhance the end-user digital
              experience
            </p>
          </div>
        </Container>
      </header>
      <main>
        <div
          css={css`
            margin-top: 6rem;
          `}
        >
          <Container>
            <h4
              css={css`
                text-align: center;
              `}
            >
              Latest Side Projects
            </h4>
            {projects.map(({ title, body }) => (
              <Project key={title} body={body} />
            ))}
          </Container>
        </div>
        <div css={css``}>
          <Contact />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
