import Meta from '../components/Meta'
import aboutSty from '../styles/About.module.css'

const about = () => {
  return (
    <>
    <Meta title={Meta.defaultProps.title + ' | About'} />
    <div className={aboutSty.container}>      
      <h1>About</h1>
    </div>
    </>
  )
}

export default about