// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'MailDoll',
    description: 'The best place to start your documentation.',
    image: '/cover.png',

    socials: {
      twitter: 'nuxt_js',
      github: 'nuxt-themes/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },

    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },

    aside: {
      level: '',
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'MailDoll'
    },

    titleTemplate: 'MailDoll'
  }
})