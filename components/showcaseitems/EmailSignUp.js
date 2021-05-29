import { useRef } from 'react'
import SignupButton from './SignupButton'
import emailSignUp from '../../styles/EmailSignUp.module.css'

const EmailSignUp = () => {
   const emailValue = useRef('')

    const registerEmail = async event => {
        event.preventDefault() // don't redirect the page
        emailValue.current.value = ""
      }

    return (
        
        <form onSubmit={registerEmail}>
        <div className={emailSignUp.container}>
        <input className={emailSignUp.inputTextBox} ref={emailValue} id="email" name="email" htmlFor="email" type="text" autoComplete="Email" placeholder="Enter your email!" requried></input>
        <SignupButton className={emailSignUp.signUpButton} />
        </div>
        </form>
    )
}

export default EmailSignUp