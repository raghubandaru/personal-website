import styled from "@emotion/styled"

import { below } from "../utilities/breakpoints"

export default styled.div`
  display: flex;
  margin-top: 3rem;
  padding: 0 25px;

  & > :not(:last-child) {
    margin-right: 2rem;
  }

  a {
    border: 1px solid #3525e6;
    border-radius: 2px;
    color: #3525e6;
    font-size: 1.4rem;
    padding: 1.5rem 3rem;
    text-align: center;
    text-decoration: none;

    :last-of-type {
      background: #3525e6;
      color: #ffffff;
    }

    :focus {
      box-shadow: 0 0 0 3px rgba(118, 169, 250, 0.45);
      outline: none;
    }

    :hover,
    :active {
      transition: all 300ms;
      background: #3525e6;
      color: #ffffff;
    }
  }

  ${below.small`
    flex-direction: column;

      & > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  `}
`
