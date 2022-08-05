import sanityClient from '@sanity/client'

const options = {
  dataset: 'production',
  projectId: 'g2awppcf',
  useCdn: process.env.NODE_ENV === 'production',
  ignoreBrowserTokenWarning: true,
  apiVersion: '2021-08-31',
}

export default sanityClient(options)
