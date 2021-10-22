import Link from 'next/link'
import showCaseCardSty from '../../styles/ShowcaseCard.module.css'

const ShowcaseCard = (props) => {

    const text = props.text || ''
    const link = props.link || ''
    return (
        <Link href={link} className={showCaseCardSty.link}><div className={showCaseCardSty.card}>
            <h3>{text}</h3>
            </div></Link>
    )
}

export default ShowcaseCard;