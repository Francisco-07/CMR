import client from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const temas = `
  title,
  author,
  spotify,
  youtube,
  'slug': slug.current,
  'mainImage': mainImage.asset->url,
  publishedAt,
`

const hero = `
  'mainImage': mainImage.asset->url,
  description,
`

const artistas = `
  name,
  puesto,
  instagram,
  spotify,
  'slug': slug.current,
  'mainImage': mainImage.asset->url,
`
const events = `
  title,
  ciudad,
  publishedAt,
  disponible,
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

export async function getHeroImg() {
  const results = await client.fetch(`*[_type == "hero"] {${hero}}`)
  return results
}

export async function getAllEvents() {
  const results = await client.fetch(
    `*[_type == "eventos"] | order(publishedAt desc) {${events}}`
  )
  return results
}
