import React, { Component } from 'react';

let map;
let infobox;

export default class MapView extends Component {
  componentDidMount() {
    console.log('locations =>', this.props);
    const { locations } = this.props;
    // Create an infobox at the center of the map but don't show it.
    map = new Microsoft.Maps.Map('#map', {
      credentials: ''
    });

    // Assign the infobox to a map instance.
    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
      visible: false
    });

    infobox.setMap(map);
    this.setPushPins(locations);
  }

  componentWillReceiveProps(newProps) {
    console.log('newProps =>', newProps);
    map.entities.clear();
    this.setPushPins(newProps.locations);

    // Show the suggestion as a pushpin and center map over it.
    // var pin = new Microsoft.Maps.Pushpin(result.location);
    // map.entities.push(pin);
    // map.setView({ bounds: result.bestView });
  }

  shouldComponentUpdate() {
    return false;
  }

  pushpinClicked(e) {
    // Make sure the infobox has metadata to display.
    if (e.target.metadata) {
      // Set the infobox options with the metadata of the pushpin.
      infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: true
      });
    }
  }

  setPushPins(locations) {
    for (let i = 0; i < locations.length; i++) {
      const pin = new Microsoft.Maps.Pushpin(locations[i]);

      // Store some metadata with the pushpin.
      pin.metadata = {
        title: 'Pin ' + i,
        description: 'Discription for pin' + i
      };
      // Add a click event handler to the pushpin.
      Microsoft.Maps.Events.addHandler(pin, 'click', this.pushpinClicked);
      // Add pushpin to the map.
      map.entities.push(pin);
    }
  }

  render() {
    return <div id="map" style={{ width: '95vw', height: '100vh' }} />;
  }
}
