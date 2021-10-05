import { ListContactListsCommand } from '@aws-sdk/client-sesv2'
import Meta from '../components/Meta'
import sty from '../styles/Contact.module.css'

export default function Contact (){
  return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Contact'} />    
      <h1>Contact me</h1>
    </>
  )
}
