// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mapsData } from "../../data/maps";
export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Conent-Type", "application/json");
  res.end(JSON.stringify({ results: mapsData }));
};
