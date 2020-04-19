import React from "react"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"

import check from "../assets/check.svg"
import question from "../assets/question.svg"
import { below } from "../utilities/breakpoints"

function Project({ body }) {
  return (
    <div
      css={css`
        margin: 8rem 0 5rem 0;

        h3 {
          text-align: center;
        }

        h5 {
          margin-top: 5rem;

          ${below.med`
            text-align: center;
          `}
        }

        p:first-of-type {
          margin-bottom: 2rem;
        }

        ul {
          margin-top: 2rem;
          margin-bottom: 2.5rem;

          li {
            margin-bottom: 1rem;
            margin-left: 25px;
            position: relative;

            ::before {
              background: url(${question}) no-repeat;
              content: "";
              display: inline-flex;
              width: 16px;
              height: 16px;
              position: absolute;
              top: 4px;
              left: -25px;
            }
          }
        }

        ul:first-of-type {
          li {
            color: #ba2525;

            ::before {
              background: url(${question}) no-repeat;
            }
          }
        }

        ul:last-of-type {
          li {
            color: #014d40;

            ::before {
              background: url(${check}) no-repeat;
            }
          }
        }
      `}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

Project.propTypes = {
  body: PropTypes.string.isRequired,
}

export default Project
