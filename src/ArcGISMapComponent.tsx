import React, { useRef, useEffect, useState } from 'react';
import { loadModules } from 'esri-loader';
import { Rnd } from 'react-rnd';
import { Button } from '@mui/material';
import Panel from './components/Panel';

const ArcGISMapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false)
  function renderPanel() {
    setState(true)
  }
  useEffect(() => {
    // Load the ArcGIS API modules
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
      .then(([ArcGISMap, MapView]) => {
        // Create a new Map instance
        const map = new ArcGISMap({
          basemap: 'streets' // Basemap layer service
        });

        // Create a new MapView instance
        const mapView = new MapView({
          container: mapRef.current!, // Reference to the DOM node where the map view will be rendered
          map, // Reference to the map object created before the map view
          center: [-118, 34], // Longitude and latitude of the center of the map view
          zoom: 8 // Zoom level
        });
      })
      .catch((err) => {
        console.error('Failed to load ArcGIS API', err);
      });
  }, []);

  return (
    <div className="map-container" style={{ display: 'flex', height: '100vh', width: '100%' }}>
      <div ref={mapRef} style={{ flex: 1 }} />
      <Button
      onClick={renderPanel}>

        Click H1
      </Button>
      {state ? <Panel />: null}
    </div>
  );
};

export default ArcGISMapComponent;
