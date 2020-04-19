import React from "react"
import { css } from "@emotion/core"

import Container from "./Container"
import LinkGroup from "./LinkGroup"
import { below } from "../utilities/breakpoints"

function Contact() {
  return (
    <div
      css={css`
        margin-top: 6rem;
        padding: 6rem 0;
        background: #f0f4f8;
      `}
    >
      <Container>
        <h4
          css={css`
            text-align: center;
          `}
        >
          Contact
        </h4>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 4rem;

            h5 {
              ${below.med`
                text-align: center;
              `}
            }
          `}
        >
          <h5>Raghu Bandaru</h5>
          <p
            css={css`
              font-style: italic;
              margin-top: 2rem;
            `}
          >
            raghubandaru45@gmail.com
          </p>
          <LinkGroup
            css={css`
              ${below.small`
                align-self: stretch;
              `}
            `}
          >
            <a
              href="https://twitter.com/raghubandaru45"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/raghubandaru"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </LinkGroup>
        </div>
      </Container>
    </div>
  )
}

export default Contact
