import { MapContainer, TileLayer, GeoJSON, 
  ImageOverlay, LayersControl, LayerGroup, 
  Circle, Popup, Marker, FeatureGroup, 
  Rectangle} from "react-leaflet";
import LeafletLocateButton from "./LeafletLocateButton";
import LeafletBuyMapButton from "./LeafletBuyMapButton";
import styles from '../../styles/LeafletMap.module.css';
import { useRef } from "react"
import "leaflet/dist/leaflet.css";

const LeafletMap = ({mapData}) => {
  
  
    const imageBounds = [ [mapData.map_png_bnds.Ymin, mapData.map_png_bnds.Xmin], 
                          [mapData.map_png_bnds.Ymax, mapData.map_png_bnds.Xmax]]

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
          return {
            width,
            height
          };
        }
                          
    return (
      <div className={styles.container} style={{height: window.innerHeight}}> 
          <MapContainer
            bounds={imageBounds}
            zoom={mapData.defaultZoom} 
            // tap={false}
            className={styles.mapcontainer}
            dragging={true}>
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
                  // maxZoom={20}
                  maxNativeZoom={16}
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="OSM">
                <TileLayer
                    maxZoom={18}
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
                    
              </LayersControl.BaseLayer>
            </LayersControl>
            <LeafletLocateButton defaultZoom={mapData.defaultZoom} title={"+"}/>
            <LeafletBuyMapButton etsy_url={mapData.etsy_url} title={"Buy Map"}/>
        </MapContainer>
      </div>
    )
}


export default LeafletMap;