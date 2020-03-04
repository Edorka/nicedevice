import React from "react";
import {Map, TileLayer} from "react-leaflet";
import styles from "./DeviceMap.module.css";
import "leaflet/dist/leaflet.css";
import DeviceMarker from "./DeviceMarker";
import Retrieve from './components/Retrieve';

const asTuple = (coords) => 
  [coords.lng, coords.lat];


const DevicesOnLocation = ({southEast, northWest, active}) =>
  <Retrieve url={'http://localhost:6001/devices'} params={{southEast, northWest, active}}>
    {(response) => 
      (response.items && response.items.map( ({ ID, ...device }) => 
        (<DeviceMarker key={ID} {...device}>
              {" "}
        </DeviceMarker>)
      ))
    }
  </Retrieve>

class DevicesMap extends React.Component {
  constructor() {
    super();
    const [lat, lng] = [ -3, 3]; //TODO retrieve AoI from back-end.
    this.state = {
      lat,
      lng,
      zoom: 4,
      boundaries: null,
    };
    this.updateBoundaries = this.updateBoundaries.bind(this);
  }

  updateBoundaries({ target }) {
    const mapBounds = target.getBounds();
    const boundaries = {
      northWest: asTuple(mapBounds.getNorthWest()),
      southEast: asTuple(mapBounds.getSouthEast()),
    };
    // TODO: debounce for half a second
    this.setState(state => ({
      ...state,
      boundaries,
    }));
  }

  render() {
    const { filter } = this.props;
    const { lat, lng, boundaries } = this.state;
    const position = [lat, lng]; //This tuple is reversed
    const active = filter.onlyActive === true || undefined;
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
          { boundaries !== null
            ? <DevicesOnLocation {...boundaries} active={active}> </DevicesOnLocation> 
            : null
          }

        </Map>
      </div>
    );
  }
}

export default DevicesMap;
