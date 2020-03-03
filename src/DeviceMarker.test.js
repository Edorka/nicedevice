import React from "react";
import { shallow } from 'enzyme';
import DeviceMarker from "./DeviceMarker";
import { Map } from "react-leaflet";

it("renders learn react link", () => {
  const data = {
    Geometry: { Coordinates: [0, 1] }
  };
  const marker = shallow(<DeviceMarker {...data} />);
  console.log(marker.toJSON());
  expect(linkElement).toBeInTheDocument();
});
