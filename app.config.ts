export default defineAppConfig({
  alpine: {
    title: 'brainTrust',
    description: 'The ThinkTank`s blog ',
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/0000.png', // path of the logo
        pathDark: '/0001.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'brainTrust' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Get Connected' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'jatin_sharma_d',
      instagram: 'jatin_sharma_d',
      github: 'jatin-sharma-11',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/'
      }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
