import {articles} from '../../../data'

export default function hander(req, res){
    res.status(200).json(articles)
}