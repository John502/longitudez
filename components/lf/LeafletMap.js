import { MapContainer, TileLayer} from "react-leaflet";
import LeafletLocateButton from "./LeafletLocateButton";
import sty from "../../styles/Maps.module.css"

const LeafletMap = () => {

    const defaultPosition = [38.232227, -85.729113]

    return (
          <MapContainer
          center={defaultPosition}
          zoom={10} 
          tap={false}
          style={{ height: '93.7vh', width: '100vw' }}
          className={sty.container}
          >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> 
        <LeafletLocateButton 
          title={"+"}/>
        </MapContainer>
    )
}


export default LeafletMap;