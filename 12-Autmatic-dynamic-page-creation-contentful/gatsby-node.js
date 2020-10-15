exports.createPages = async function ({ graphql, actions}) {

    const query = await graphql(`
      query {
        allContentfulBlogPost {
          edges {
            node {
              title
              content {
                json
              }
              publicationDate
            }
          }
        }
      }
    `);
  
      console.log(JSON.stringify(query));
      const posts =   query.data.allContentfulBlogPost.edges;
      posts.map((post) => {
          actions.createPage({
              path: post.node.title,
              component: require.resolve(`./src/templates/blog-post.tsx`),
              context: post.node,
          });
      });
  }