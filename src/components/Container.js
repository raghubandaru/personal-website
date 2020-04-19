import styled from "@emotion/styled"

import { below } from "../utilities/breakpoints"

export default styled.div`
  max-width: 960px;
  margin: 0 auto;

  ${below.lg`
    max-width: 800px;
  `}

  ${below.med`
    padding: 3rem;
  `}

  ${below.small`
    padding: 1.5rem;
  `}
`
