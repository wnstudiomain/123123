export default {
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Staatliches'
      }
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '@assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~/plugins/uikit.js',
    ssr: false
  }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },
  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'http://localhost:1337/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          register: {
            url: 'http://localhost:1337/auth/local/register',
            method: 'post'
          },
          user: {
            url: 'http://localhost:1337/users/me',
            method: 'get',
            propertyName: null
          },
          logout: null
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					 //loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
  babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
