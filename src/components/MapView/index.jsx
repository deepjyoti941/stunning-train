import React, { Component } from 'react';

let map;

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.selectedPin = null;
    this.infobox = null;
  }

  componentDidMount() {
    console.log('locations =>', this.props);
    const { locations } = this.props;
    // Create an infobox at the center of the map but don't show it.
    map = new Microsoft.Maps.Map('#map', {
      credentials: ''
    });

    // Assign the infobox to a map instance.
    this.infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
      visible: false
    });

    this.infobox.setMap(map);
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

  pushpinClicked = (e) => {
    // console.log(this);
    console.log(e);
    // if (e.target == null) {
    //   return;
    // }

    // setTimeout(()=> {
    //   console.log('this.selectedPin=>>>', this.selectedPin);
    // })

    if (this.selectedPin == null) {
      console.log('select pin');
      console.log(e.target);
      this.selectedPin = e.target;
      this.selectedPin.setOptions({
        color: 'red'
      });
      this.infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: true
      });
    } else if (e.target != this.selectedPin) {
      console.log('other pin selected');
      this.selectedPin.setOptions({
        color: 'green'
      });
      e.target.setOptions({
        color: 'red'
      });
      this.infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: true
      });
      this.selectedPin = e.target;
      // console.log(this.selectedPin);
      // this.selectedPin.setOptions({enableClickedStyle: false});
      // this.selectedPin.setOptions({enableClickedStyle: true});
      // this.selectedPin = e.target;
    }
    // if the pin that triggered the event is equal to the selected pin then we set everything to null.
    else {
      console.log('deselect pin');
      this.selectedPin = null;
      e.target.setOptions({
        color: 'green'
      });
      this.infobox.setOptions({
        location: e.target.getLocation(),
        title: e.target.metadata.title,
        description: e.target.metadata.description,
        visible: false
      });
    }

    // Make sure the infobox has metadata to display.
    // if (e.target.metadata) {
    //   // Set the infobox options with the metadata of the pushpin.
    //   infobox.setOptions({
    //     location: e.target.getLocation(),
    //     title: e.target.metadata.title,
    //     description: e.target.metadata.description,
    //     visible: true
    //   });
    // }
  };

  setPushPins(locations) {
    for (let i = 0; i < locations.length; i++) {
      const pin = new Microsoft.Maps.Pushpin(locations[i]);

      // Store some metadata with the pushpin.
      pin.metadata = {
        title: 'Pin ' + i,
        description: 'Discription for pin' + i
      };
      pin.setOptions({
        color: 'green'
      });
      // Add a click event handler to the pushpin.
      Microsoft.Maps.Events.addHandler(pin, 'click', this.pushpinClicked);
      // Add pushpin to the map.
      map.entities.push(pin);
    }
  }

  render() {
    return (
      <div>
        <div id="map" style={{ width: '95vw', height: '100vh' }} />
        <button type="button" onClick={() => console.log(this.selectedPin)}>
          Get selected Pin
        </button>
      </div>
    );
  }
}
