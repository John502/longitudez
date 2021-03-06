
import Meta from './Meta'
import showcaseSty from '../styles/Showcase.module.css'
import EmailSignUp from '../components/showcaseitems/EmailSignUp'
import ShowcaseCard from '../components/showcaseitems/ShowcaseCard'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'



  const Showcase = () => {
    return (
        <>
        <Meta title={Meta.defaultProps.title + ' | Home'} />
        <div className={showcaseSty.showcase}>
          <div className={showcaseSty.content}>
            <div className={showcaseSty.head}>
              <div id={showcaseSty.logo}>longitudez</div>
              <div id={showcaseSty.motto}>where u wanna be</div>
              <div className={showcaseSty.socialLinks}>
                <a href='https://www.facebook.com/latituduezlongitudez'><FaFacebookSquare id={showcaseSty.socialIcon} size={30} /></a>
                <a href='https://instagram.com/_longitudez_'><FaInstagramSquare id={showcaseSty.socialIcon} size={30}/></a>
                <a href='https://twitter.com/longitudez3'><FaTwitterSquare id={showcaseSty.socialIcon} size={30}/></a>
              </div>
              <div className={showcaseSty.formContainer}>
                <EmailSignUp></EmailSignUp>
              </div>
              <div className={showcaseSty.butt}>
                <ShowcaseCard text="Maps" link='maps'></ShowcaseCard>
                <ShowcaseCard text="About me" link='about'></ShowcaseCard>
                <ShowcaseCard text="More..." link='more'></ShowcaseCard>
              </div>
            </div>
          </div>

      </div>

      </>
    )
}
export default Showcase