import React, { Component, useState } from "react";
import { useMap } from "react-leaflet";
import { useRouter } from 'next/router';
import L, { LeafletMouseEvent, Map } from "leaflet";

class LeafletBuyMapButton extends React.Component {
  btnDiv;

  createButtonControl() {

    const DisplayBuyMapButtonDom = L.Control.extend({
      onAdd: (map) => {
        const btnDiv = L.DomUtil.create("button", "buymap");
        this.btnDiv = btnDiv;
        btnDiv.innerHTML = this.props.title;
        
        btnDiv.addEventListener("click", () => {
          window.open(this.props.etsy_url, "_blank");  
         });

        return btnDiv;
      }
    });
    return new DisplayBuyMapButtonDom({ position: "bottomright" });
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

export default withMap(LeafletBuyMapButton);
