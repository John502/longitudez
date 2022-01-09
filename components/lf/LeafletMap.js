import { MapContainer, TileLayer, GeoJSON, ImageOverlay} from "react-leaflet";
import LeafletLocateButton from "./LeafletLocateButton";
import styles from '../../styles/LeafletMap.module.css'
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const LeafletMap = ({mapData}) => {

    // const geoJsonBounds = L.geoJSON(mapData.geo).getBounds()
    
    const imageBounds = [ [mapData.map_png_bnds.Ymin, mapData.map_png_bnds.Xmin], 
                          [mapData.map_png_bnds.Ymax, mapData.map_png_bnds.Xmax]]

    console.log(mapData.map_png)
    return (
      <div style={{paddingTop: "6.3vh"}}>
          <MapContainer
          bounds={imageBounds}
          // center={mapData.defaultPosition}
          zoom={mapData.defaultZoom} 
          tap={false}
          className={styles.mapcontainer}
          style={{ height: '93.7vh'  }}>
          <ImageOverlay attribution={mapData.map_png_attr}
            url={mapData.map_png} bounds={imageBounds}>
            </ImageOverlay>
          <GeoJSON key={mapData.slug} data={mapData.geo}></GeoJSON>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
        {/* <LeafletLocateButton 
          title={"+"}/> */}
        </MapContainer>
    </div>
    )
}


export default LeafletMap;