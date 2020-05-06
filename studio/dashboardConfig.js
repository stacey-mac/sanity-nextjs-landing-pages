export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eb2f11c2bb55b4bf7ea23d4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gmhngqtb',
                  apiId: '4f8ecca0-13e2-415a-a2a9-849c5d47b5b7'
                },
                {
                  buildHookId: '5eb2f11c2bb55b4b35ea2484',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xopwp5av',
                  apiId: '74abd359-b984-4288-bc66-ddea36c43b7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stacey-mac/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xopwp5av.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
