
import Image from 'next/image'
import showcaseSty from '../styles/Showcase.module.css'
import Meta from './Meta'

  const Showcase = () => {
    return (
        <>
        <Meta title={Meta.defaultProps.title + ' | Home'} />
        <div className={showcaseSty.showcase}>
          <div className={showcaseSty.content}>
            <div id={showcaseSty.head}>
              <h1>longitudez</h1>
            </div>
            <div id={showcaseSty.butt}>
              <h1>sometext</h1>
            </div>
          </div>

      </div>

      </>
    )
}
export default Showcase