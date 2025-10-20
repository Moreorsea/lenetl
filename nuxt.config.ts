// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  // modules: ['nuxt-gtag'],
  typescript: {
    typeCheck: false
  },
  app: {
    head: {
      script: [
        {
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8J893K5');
          `,
          type: 'text/javascript'
        }
      ],
      noscript: [
        {
          innerHTML: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8J893K5"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          tagPosition: 'bodyOpen'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID || ""
    }
  }
})
