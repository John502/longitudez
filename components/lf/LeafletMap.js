import { MapContainer, TileLayer, GeoJSON} from "react-leaflet";
import LeafletLocateButton from "./LeafletLocateButton";
import styles from '../../styles/LeafletMap.module.css'
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const LeafletMap = ({mapData}) => {

    const geoJsonBounds = L.geoJSON(mapData.geo).getBounds()
    
    return (
          <MapContainer
          bounds={geoJsonBounds}
          // center={mapData.defaultPosition}
          zoom={mapData.defaultZoom} 
          tap={false}
          className={styles.container}>
          <GeoJSON key={mapData.slug} data={mapData.geo}></GeoJSON> */}
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
        <LeafletLocateButton 
          title={"+"}/>
        </MapContainer>
    )
}


export default LeafletMap;