import { SESv2Client, SendEmailCommand, SendEmailCommandInput, CreateContactCommand } from "@aws-sdk/client-sesv2"
import { useRef } from 'react'
import SignupButton from './SignupButton'
import emailSignUp from '../../styles/EmailSignUp.module.css'

const EmailSignUp = () => {
   const emailValue = useRef('')

   const client = new SESv2Client({region: 'us-east-2',
                                   credentials: { 
                                   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                                   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY}});
    

    const registerEmail = async event => {

        event.preventDefault() // don't redirect the page

                //  docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-sesv2/index.html#promises
        const createContactParams = 
        {
            ContactListName: 'longitudez', /* required */
            EmailAddress: emailValue.current.value, /* required */
            TopicPreferences: [
                {
                SubscriptionStatus: 'OPT_IN', /* required */
                TopicName: 'all' /* required */
                },
                /* more items */
            ],
            UnsubscribeAll: false
            };

        const createContactCmd = new CreateContactCommand(createContactParams);

        const sendInput =  {
            ConfigurationSetName: "longitudez_all",
            Content: { /* required */
            Template: {
                TemplateName: 'longitudez_sign_up',
                TemplateData: "{}"
            }
            },
            FromEmailAddress: process.env.SIGNUP_FROM_EMAIL, 
            Destination: {ToAddresses:[ emailValue.current.value
                                    ]},
            ListManagementOptions: {
            ContactListName: 'longitudez', /* required */
            TopicName: 'all'
                }
        };

        async function sendSingUpEmail() {
            try{
                const sendEmailCommand = new SendEmailCommand(sendInput)
                const createContactres = await client.send(sendEmailCommand);
            }
            catch (error){
                const { requestId, cfId, extendedRequestId } = error.$metadata;
                console.log({ requestId, cfId, extendedRequestId });
            }
            finally{

            }

        };

        async function addContact(){
            try {
                const createContactres = await client.send(createContactCmd);
                //const addContactResponse = await createContactres.json();
                if (createContactres.$metadata.httpStatusCode == 200){
                    sendSingUpEmail();
                }
                }
            catch (error){
                if (error.name == 'AlreadyExistsException'){
                alert(`You're already singed up, email ${process.env.SIGNUP_FROM_EMAIL} for inquiries.`)
                }
                else{
                    console.log(error.name)
                    const { requestId, cfId, extendedRequestId } = error.$metadata;
                    console.log({ requestId, cfId, extendedRequestId });
                }
                }
            finally{
    
            }
        };

        addContact();
        sendSingUpEmail();

        emailValue.current.value = ""

      }

    return (
        
        <form onSubmit={registerEmail}>
        <div className={emailSignUp.container}>
        <input className={emailSignUp.inputTextBox} ref={emailValue} id="email" name="email" htmlFor="email" type="text" autoComplete="Email" placeholder="Enter your email!"></input>
        <SignupButton className={emailSignUp.signUpButton} />
        </div>
        </form>
    )
}

export default EmailSignUp