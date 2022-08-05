import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const temas = `
  title,
  author,
  'slug': slug.current,
  'mainImage': mainImage.asset->url,
  publishedAt,
`
const artistas = `
  name,
  puesto,
  'slug': slug.current,
  'mainImage': mainImage.asset->url,
`
const events = `
  title,
  ciudad,
  'slug': slug.current,
  publishedAt,
`

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export async function getAllSongs() {
  const results = await client.fetch(
    `*[_type == "temas"] | order(publishedAt desc) {${temas}}`
  )
  return results
}

export async function getAllArtistas() {
  const results = await client.fetch(`*[_type == "artistas"] {${artistas}}`)
  return results
}

export async function getAllEvents() {
  const results = await client.fetch(
    `*[_type == "eventos"] | order(publishedAt desc) {${events}}`
  )
  return results
}
