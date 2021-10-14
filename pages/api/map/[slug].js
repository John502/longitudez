import { maps } from '../../../mapdata/data'

export default function handler({ query: { slug } }, res) {
  const filtered = maps.filter((amap) => amap.slug === slug)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Map with the slug of ${slug} is not found` })
  }
}
