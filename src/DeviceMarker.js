import React from 'react';
import L from 'leaflet';
import {Marker, Popup} from 'react-leaflet';
//import icon from 'leaflet/dist/images/marker-icon.png';
//import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import '@fortawesome/fontawesome-free/css/all.css';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import styles from './DeviceMarker.module.css';

const iconForBattery = value =>
  value < 0.05
    ? 'battery-empty'
    : value < 0.25
    ? 'battery-quarter'
    : value < 0.6
    ? 'battery-half'
    : value < 0.9
    ? 'battery-three-quarters'
    : 'battery-full';

const colorForTemperature = value =>
  value < 10
    ? 'blue'
    : value < 20
    ? 'green'
    : value < 35
    ? 'orange'
    : 'red';

const appropiateIcon = ({ Battery, Temperature, Active }) => {
  const icon = iconForBattery(Battery);
  const bgColor = colorForTemperature(Temperature);
  const extraClasses = Active === false ? 'inactive' : 'active';

  return L.AwesomeMarkers.icon({
    icon,
    iconColor: 'white',
    prefix: 'fa',
    markerColor: bgColor,
    extraClasses
  });
};

const DeviceInfo = ({ Battery, Temperature, Name, Active, Share }) => (
  <div className={styles.deviceInfo}>
    <div className='title'>{Name}</div>
    <div className='fact'>
      <label alt='Temperature'>
        <i className='fas fa-thermometer-three-quarters'></i>
      </label>
      <span>{(Temperature).toFixed(1)} C</span>
    </div>
    <div className='fact'>
      <label>
        <i alt='Battery' className={`fas fa-${iconForBattery(Battery)}`}></i>
      </label>
      <span>{(Battery * 100).toFixed(0)}%</span>
    </div>
    <a href={Share}>More info</a>
  </div>
);

const DeviceMarker = ({ Geometry, ...props }) => (
  <Marker position={Geometry.Coordinates} icon={appropiateIcon(props)}>
    <Popup>
      <DeviceInfo {...props}></DeviceInfo>
    </Popup>
  </Marker>
);

export default DeviceMarker;
