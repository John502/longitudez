import { useRef } from 'react'
import { useRouter } from 'next/router'
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"
import Meta from '../components/Meta'
import styles from '../styles/Contact.module.css'


const Contact = () => {

  const name = useRef('')
  const email = useRef('')
  const message = useRef('')
  const router = useRouter();

  const sendContactEmail = async event => {

        event.preventDefault()



        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
          if (!pattern.test(email.current.value)) {
        
            alert("Please enter valid email address.");
            return false
          }
          else{

        const client = new SESv2Client({region: 'us-east-2',
                                  credentials: { 
                                  accessKeyId: process.env.ACCESS_KEY_ID,
                                  secretAccessKey: process.env.SECRET_ACCESS_KEY}});
        
        const emailContent = `
           name: ${name.current.value} 
           email: ${email.current.value}
           message: ${message.current.value}                        
        `

        const sendInput =  {
          Content: { /* required */
           "Simple": { 
              "Body": { 
                 "Text": { 
                    "Charset": "UTF-8",
                    "Data": emailContent 
                 }
              },
              "Subject": { 
                 "Charset": "UTF-8",
                 "Data": `Longitudez Contact Form Submission ${name.current.value}`
              }
           }
          },
          FromEmailAddress: process.env.SIGNUP_FROM_EMAIL, 
          Destination: {ToAddresses:[ process.env.CONTACT_EMAIL],
          ReplyToAddresses: process.env.CONTACT_EMAIL}
          };    

          async function sendSingUpEmail() {
            try{
                const sendEmailCommand = new SendEmailCommand(sendInput)
                const sendEmailres = await client.send(sendEmailCommand);
        
                if (sendEmailres.$metadata.httpStatusCode === 200){
                  router.push('/')
                }
            }
            catch (error){
                const { requestId, cfId, extendedRequestId } = error.$metadata;
                console.log({ requestId, cfId, extendedRequestId });
                router.push('/')
            }
          };
          
          sendSingUpEmail();

        }

                                  }
  return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Contact'} />    
      <div className={styles.container}>
        <div className={styles.aboutMe}>
          <img className={styles.portrait} src="portrait.png" alt="portrait"></img>
          <div className={styles.cv}>Longitudez needs to hear from you! What do you think about the site? Need some maps or coding?</div>
        </div>
        < form className={styles.form}>
          < div className={styles.inputGroup} >
            <label className={styles.label} htmlFor='name'>Name</label>
            <input ref={name} type='text' name='name' className={styles.inputField} required/>  
          </div>
          < div className={styles.inputGroup} >
            < label className={styles.label} htmlFor='email'>Email</label>
            < input ref={email} type='e}mail' name='email' className={styles.inputField} required/>
          </div>
          < div className={styles.inputGroup} >
            < label className={styles.label} htmlFor='message'>Message</label>
            <textarea ref={message} type='text' name='message' className={styles.message} required/>
          </div>
          <button className={styles.button} onClick={sendContactEmail}>Submit!</button>
        </form >
      </div>
    </>
  )
}

export default Contact;
