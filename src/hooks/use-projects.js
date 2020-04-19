import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___title }) {
        nodes {
          frontmatter {
            title
          }
          body
        }
      }
    }
  `)

  return data.allMdx.nodes.map(({ body, frontmatter: { title } }) => ({
    title,
    body,
  }))
}

export default useProjects
