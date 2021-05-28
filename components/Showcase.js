
import Image from 'next/image'
import homeSty from '../styles/Home.module.css'
import Meta from './Meta'

  const Showcase = () => {
    return (
        <>
        <Meta title={Meta.defaultProps.title + ' | Home'} />
        <div className={homeSty.showcase}>
          <div className={homeSty.content}>
            <h1 className={homeSty.logo}>longitudez</h1>
            <div className={homeSty.motto}>where you</div>
            <div className={homeSty.motto}>wanna be</div>
            </div>

      </div>

      </>
    )
}
export default Showcase