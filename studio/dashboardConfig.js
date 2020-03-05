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
                  buildHookId: '5e60f1669cd26b039652f109',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-m28vmznp',
                  apiId: '0f3bf1f3-7167-4b8c-b235-3b2cbcdc2be2'
                },
                {
                  buildHookId: '5e60f167cc67dcdeeb7d5c6f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tu1ikq6m',
                  apiId: 'c417ad74-49b1-4cd2-b795-acf5538e4cb1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nosenss/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tu1ikq6m.netlify.com', category: 'apps'}
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
