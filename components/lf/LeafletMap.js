import { MapContainer, TileLayer, GeoJSON, 
  ImageOverlay, LayersControl, LayerGroup, 
  Circle, Popup, Marker, FeatureGroup, 
  Rectangle} from "react-leaflet";
import LeafletLocateButton from "./LeafletLocateButton";
import styles from '../../styles/LeafletMap.module.css'
import "leaflet/dist/leaflet.css"
import L from "leaflet";

const LeafletMap = ({mapData}) => {

    // const geoJsonBounds = L.geoJSON(mapData.geo).getBounds()
    
    const imageBounds = [ [mapData.map_png_bnds.Ymin, mapData.map_png_bnds.Xmin], 
                          [mapData.map_png_bnds.Ymax, mapData.map_png_bnds.Xmax]]
                          
    return (
          <MapContainer
            bounds={imageBounds}
            zoom={mapData.defaultZoom} 
            tap={false}
            className={styles.mapcontainer}>
              <LayersControl position="topleft">
      <LayersControl.BaseLayer checked name="USGS Topo">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://basemap.nationalmap.gov/ArcGIS/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Black & White">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
    </LayersControl>
          <ImageOverlay attribution={mapData.map_png_attr}
            url={mapData.map_png} bounds={imageBounds}>
            </ImageOverlay>
            <LeafletLocateButton 
          title={"+"}/>
          {/* <GeoJSON key={mapData.slug} data={mapData.geo}></GeoJSON>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>  */}
        </MapContainer>
    )
}


export default LeafletMap;