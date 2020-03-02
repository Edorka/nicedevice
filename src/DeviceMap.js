import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./DeviceMap.module.css";
import "leaflet/dist/leaflet.css";
import DeviceMarker from "./DeviceMarker";
import devices from "./devices.json";

class DevicesMap extends React.Component {
  constructor() {
    super();
    const sample = devices[0];
    const [lat, lng] = sample.Geometry.Coordinates;
    this.state = {
      lat,
      lng,
      zoom: 4
    };
    this.updateBoundaries = this.updateBoundaries.bind(this);
  }

  updateBoundaries({ target }) {
    const bounds = target.getBounds();
    this.setState(state => ({
      ...state,
      coordinates: {
        northWest: bounds.getNorthWest(),
        southEasth: bounds.getSouthEast()
      }
    }));
  }

  render() {
    const { filter } = this.props;
    const filterDirective =
      filter.onlyActive !== true ? () => true : ({ Active }) => Active === true;
    const position = [this.state.lat, this.state.lng];
    return (
      <div className={styles.wrapper}>
        <Map
          center={position}
          zoom={this.state.zoom}
          whenReady={this.updateBoundaries}
          onMoveEnd={this.updateBoundaries}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {devices.filter(filterDirective).map(({ ID, ...device }) => (
            <DeviceMarker key={ID} {...device}>
              {" "}
            </DeviceMarker>
          ))}
        </Map>
      </div>
    );
  }
}

export default DevicesMap;
