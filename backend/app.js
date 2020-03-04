const express = require("express");
const fs = require('fs');
const cors = require('cors');

const app = express();


let rawdata = fs.readFileSync('devices.json');
let devices = JSON.parse(rawdata);

const port = process.env.port || 6001;
app.use(cors())

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const isInsideCoords = (northWest, southEast) => {
  const [north, west] = northWest.split(',').map(parseFloat);
  const [south, east] = southEast.split(',').map(parseFloat);

  return  (item) => {
    const [lon, lat] = item.Geometry.Coordinates;
    return south > lat && lat > north
      && west > lon && lon > east; 
  }
}

const filterFor = ({active, southEast, northWest}) => {
  // Please Wardog forgive me.
  const activity = active === 'true' 
    ? (item) => item.Active === true
    : (item) => true;
  const inside = southEast && northWest
    ? isInsideCoords(northWest, southEast)
    : (item) => true;
  return (item) => activity(item) && inside(item); //more to come

}

app.get("/devices", (req, res, next) => {
  console.log(req.query);
  const all = devices;
  const selected = Object.keys(req.query).length === 0
    ? devices
    : devices.filter(filterFor(req.query));
  res.json({'items': selected, 'total': all.length });
});
