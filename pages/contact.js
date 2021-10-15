import { useRef } from 'react'
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"
import Meta from '../components/Meta'
import styles from '../styles/Contact.module.css'


const Contact = () => {

  const btn = useRef('')
  const onButtonClick = () => {
      // #3c6363
      btn.current.style.backgroundColor = "#3c6363"
      setTimeout(() => {
          btn.current.style.backgroundColor = "#2f4f4f"
          }, 250)
  };

  const registerEmail = async event => {

  const client = new SESv2Client({region: 'us-east-2',
                                  credentials: { 
                                  accessKeyId: process.env.ACCESS_KEY_ID,
                                  secretAccessKey: process.env.SECRET_ACCESS_KEY}});
                                  const sendInput =  {
                                    ConfigurationSetName: "longitudez_all",
                                    Content: { /* required */
                                    Template: {
                                        TemplateName: 'longitudez_sign_up',
                                        TemplateData: "{}"
                                    }
                                    },
                                    FromEmailAddress: process.env.SIGNUP_FROM_EMAIL, 
                                    Destination: {ToAddresses:[ destEmail
                                                            ]},
                                    ListManagementOptions: {
                                    ContactListName: 'longitudez', /* required */
                                    TopicName: 'all'
                                        }
                                };
                                  }
  return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Contact'} />    
      <div className={styles.container}>
        <div className={styles.aboutMe}>
          <img className={styles.portrait} src="portrait.png" alt="portrait"></img>
          <div className={styles.cv}>Longitudez needs to hear from you! What do you think about the site? Need some maps or coding?</div>
        </div>
        < form className={styles.form} onSubmit={registerEmail}>
          < formGroup className={styles.inputGroup} >
            <label className={styles.label} htmlFor='name'>Name</label>
            <input type='text' name='name' className={styles.inputField} />  
          </formGroup>
          < formGroup className={styles.inputGroup} >
            < label className={styles.label} htmlFor='email'>Email</label>
            < input type='email' name='email' className={styles.inputField} />
          </formGroup>
          < formGroup className={styles.inputGroup} >
            < label className={styles.label} htmlFor='message'>Message</label>
            <textarea type='text' name='message' className={styles.message} />
          </formGroup>
          <button ref={btn} className={styles.button} type="submit" onClick={onButtonClick}>Submit!</button>
        </form >
      </div>
    </>
  )
}

export default Contact;
