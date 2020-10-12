exports.createPages = async function ({ actions }) {

    actions.createPage({
        path: "my-dynamic-page",
        component: require.resolve(`./src/templates/dynamic-page.tsx`),
        context: {
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Kamali",
        },
    }),
        actions.createPage({
            path: "my-dynamic-page1",
            component: require.resolve(`./src/templates/dynamic-page1.tsx`),
            context: {
                // Data passed to context is available
                // in pageContext props of the template component
                name: "Muhibullah Khan Kamali",
            },
    }),
        actions.createPage({
            path: "my-dynamic-page2",
            component: require.resolve(`./src/templates/dynamic-page2.tsx`),
            context: {
                // Data passed to context is available
                // in pageContext props of the template component
                name: "Muhibullah Khan Kamali 2.0",
            },
        });
}