import React from "react";
import ShallowRenderer from 'react-test-renderer/shallow'
import DeviceMarker from "./DeviceMarker";

describe('basic rendering', () => {

    it("renders mark", () => {
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
