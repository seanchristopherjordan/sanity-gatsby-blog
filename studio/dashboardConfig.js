export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de62a4f1dc0cca69b6b2fc5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vzdwk29c',
                  apiId: 'a0adeb7e-12d9-4353-bd73-26f689711d93'
                },
                {
                  buildHookId: '5de62a4fb96221e1c03e868c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ub6enuv2',
                  apiId: '3bca1c54-adce-4fce-a87c-174c4ffeb3b9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seanchristopherjordan/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ub6enuv2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
