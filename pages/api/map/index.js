import { maps } from '../../../mapdata/data'

export default function handler(req, res) {
  res.status(200).json(maps)
}