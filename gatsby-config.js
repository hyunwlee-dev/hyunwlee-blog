/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hyunwlee's 개발 블로그`,
    description: `프론트엔드 개발자가 되고싶은 hyunwlee의 개발 블로그입니다.`,
    author: `hyunwlee`,
    siteUrl: 'https://hyunwleeblogmain.gatsbyjs.io/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://hyunwleeblogmain.gatsbyjs.io/',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
  ],
};
