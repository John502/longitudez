import { MapContainer, TileLayer} from "react-leaflet";
import LeafletLocateButton from "./LeafletLocateButton";
import sty from "../../styles/LeafletMap.module.css"

const LeafletMap = ({mapData}) => {
  

    return (
          <MapContainer
          center={mapData.defaultPosition}
          zoom={mapData.defaultZoom} 
          tap={false}
          className={sty.container}>
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