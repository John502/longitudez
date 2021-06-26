import Meta from '../components/Meta'
import  Showcase from '../components/Showcase'
import { SESv2Client, SendEmailCommand, CreateContactCommand, DeleteContactCommand, EventDestinationDefinition } from "@aws-sdk/client-sesv2"
import mapsSty from '../styles/Maps.module.css'


const Maps = () => {
    return (
    <>
    <Meta title={Meta.defaultProps.title + ' | Maps'} />
        <div className={mapsSty.container}>
            <h1>Maps</h1>
            <button className={mapsSty.btn}></button>
        </div>
    </>
    )
}

export default Maps;