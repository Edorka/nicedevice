import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow'
import DeviceMarker from "./DeviceMarker";

describe('basic rendering', () => {

  it("renders mark on position with info", () => {
    const Geometry= { Coordinates: [0, 1] },
      Temperature = 10,
      Battery = 50,
      Name = 'device_test',
      data = {Geometry, Temperature, Battery, Name};
    const component = enzyme.shallow(<DeviceMarker {...data} ></DeviceMarker>);
    const marker = component.find('ForwardRef(Leaflet(Marker))')
    expect(marker.props().position).toMatchObject(Geometry.Coordinates);
    const info = marker.find('DeviceInfo')
    expect(info.props()).toMatchObject({Name, Battery, Temperature});
  });
});
describe('different battery icons', () => {
  it("icon for empty", () => {
    const obtained = '';
    expect(obtained).toBe('battery-empty');
  });
  it("icon for quarter", () => {
    const obtained = '';
    expect(obtained).toBe('battery-quarter');
  });
  it("icon for half", () => {
    const obtained = '';
    expect(obtained).toBe('battery-half');
  });
  it("icon for three quarters", () => {
    const obtained = '';
    expect(obtained).toBe('battery-three-quarters');
  });
  it("icon for full", () => {
    const obtained = '';
    expect(obtained).toBe('battery-full');
  });
});

describe('different color for temperatures', () => {
  it("icon for cold", () => {
    const obtained = '';
    expect(obtained).toBe('blue');
  });
  it("icon for almost cold", () => {
    const obtained = '';
    expect(obtained).toBe('green');
  });
  it("icon for warm", () => {
    const obtained = '';
    expect(obtained).toBe('orange'); 
  });
  it("icon for three quarters", () => {
    const obtained = '';
    expect(obtained).toBe('red'); 
  });
});
