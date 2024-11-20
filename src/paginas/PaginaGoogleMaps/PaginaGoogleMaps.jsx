import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import './PaginaGoogleMaps.css';

const PaginaGoogleMaps = () => {
  const { lat, long } = useParams();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDr-x1guHO0RxiZvKej1onlzBOUO6NDlLs', // Sua chave de API
  });

  const position = {
    lat: parseFloat(lat),
    lng: parseFloat(long), 
  };

  return (
    <div className='map'>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
            options={{
              label: {
                text: "Sua sala aqui!",
                className: "marker-point"
              }
            }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PaginaGoogleMaps;
