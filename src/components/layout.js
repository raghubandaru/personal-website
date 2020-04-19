import React from "react"
import { Global, css } from "@emotion/core"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import useSiteMetadata from "../hooks/use-sitemetadata"

import { below } from "../utilities/breakpoints"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }
          html {
            color: #102a43;
            font-size: 75%;
            line-height: 1.5;

            ${below.lg`
              font-size: 62.5%;
            `}

            ${below.med`
              font-size: 56.25%;
            `}

            ${below.small`
              font-size: 50%;
            `}

            ${below.xs`
              font-size: 42%;
            `}
          }
          body {
            font-family: "Inter", sans-serif;
            box-sizing: border-box;
            background: #ffffff;
          }
          h1 {
            color: #3525e6;
            font-size: 6rem;
            font-weight: 900;
            line-height: 1.1;
          }
          h2 {
            font-size: 4.5rem;
            line-height: 1.1;
          }
          h3 {
            font-size: 3.6rem;
            line-height: 1.1;
          }
          h4 {
            font-size: 2.7rem;
            line-height: 1.1;
          }
          h5 {
            font-size: 2.2rem;
            line-height: 1.1;
          }
          p {
            font-size: 1.8rem;
          }
          li {
            font-size: 1.8rem;
            list-style-type: none;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <nav
        css={css`
          border-top: 5px solid #3525e6;
        `}
      >
        {children}
      </nav>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
