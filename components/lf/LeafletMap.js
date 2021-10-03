import { MapContainer, TileLayer} from "react-leaflet";
import LeafletLocateButton from "./LeafletLocateButton";
import sty from "../../styles/Maps.module.css"

const LeafletMap = () => {

    const defaultPosition = [38.232227, -85.729113]

    return (
        <div className={sty.container}> 
        <MapContainer
        center={defaultPosition}
        zoom={10} className={sty.container}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> 
      <LeafletLocateButton 
        title={"+"}/>
      </MapContainer>
      </div>
    )
}


export default LeafletMap;