import Link from 'next/link'
import showCaseCardSty from '../../styles/ShowcaseCard.module.css'

const ShowcaseCard = (props) => {

    const text = props.text || ''
    const link = props.link || ''
    return (
        <div className={showCaseCardSty.card}>
            <Link href={link} className={showCaseCardSty.link}><h3>{text}</h3></Link>
            </div>
    )
}

export default ShowcaseCard;