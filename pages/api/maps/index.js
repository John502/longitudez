import { maps } from '../../../mapdata/maps'

export default function handler(req, res) {
  res.status(200).json(maps)
}