import React, { Component, useState } from "react";
import { useMap } from "react-leaflet";
import L, { LeafletMouseEvent, Map } from "leaflet";

class LeafletLocateButton extends React.Component {
  btnDiv;

  createButtonControl() {

    const DisplayLocationButtonDom = L.Control.extend({
      onAdd: (map) => {
        const btnDiv = L.DomUtil.create("button", "locate-btn");
        this.btnDiv = btnDiv;
        const marker = null
        this.marker = marker
        btnDiv.innerHTML = this.props.title;

        const iconOptions = {
            iconUrl: '../blue_bold_aim.png',
            iconSize: [50, 50]
         }

        const aim_icon = L.icon(iconOptions);

        // Options for the marker
        const markerOptions = {
            title: "Loc",
            icon: aim_icon
        }

        
        btnDiv.addEventListener("click", () => {
          
          
          map.locate().on("locationfound", (e) =>{
            map.flyTo(e.latlng, 17);
            if (this.marker !== null) {
                // remove the marker
                this.marker.setLatLng(e.latlng);
            }
            else {
                this.marker = L.marker(e.latlng, markerOptions)
                this.marker.addTo(map)
           }
          })
        });

        //a bit clueless how to add a click event listener to this button and then
        // open a popup div on the map
        return btnDiv;
      }
    });
    return new DisplayLocationButtonDom({ position: "bottomleft" });
  }

  componentDidMount() {
    const { map } = this.props;
    const control = this.createButtonControl();
    control.addTo(map);
  }

  componentWillUnmount() {
    this.btnDiv.remove();
  }

  render() {
    return null;
  }
}

function withMap(Component) {
  return function WrappedComponent(props) {
    const map = useMap();
    return <Component {...props} map={map} />;
  };
}

export default withMap(LeafletLocateButton);
