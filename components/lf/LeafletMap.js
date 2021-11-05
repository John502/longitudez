import { MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import LeafletLocateButton from "./LeafletLocateButton";
import styles from '../../styles/LeafletMap.module.css'
import "leaflet/dist/leaflet.css"
import { map } from "leaflet";

const LeafletMap = ({mapData}) => {


    return (
      <div className={styles.container}>
          <MapContainer
          center={mapData.defaultPosition}
          zoom={mapData.defaultZoom} 
          tap={false}
          className={styles.mapContainer}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
        <LeafletLocateButton 
          title={"+"}/>
        </MapContainer>
        </div>
    )
}


export default LeafletMap;