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
      <LayersControl.Overlay checked="true" name="Longitudez">
        <ImageOverlay attribution={mapData.map_png_attr}
            url={mapData.map_png} bounds={imageBounds}>
        </ImageOverlay>
      </LayersControl.Overlay>
      <LayersControl.Overlay name="GPS">
        <GeoJSON key={mapData.slug} data={mapData.geo}></GeoJSON>
      </LayersControl.Overlay>
      <LayersControl.BaseLayer checked name="USGS Topo">
        <TileLayer
          url="https://basemap.nationalmap.gov/ArcGIS/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OSM">
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
      </LayersControl.BaseLayer>
    </LayersControl>
          {/* <ImageOverlay attribution={mapData.map_png_attr}
            url={mapData.map_png} bounds={imageBounds}>
            </ImageOverlay> */}
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