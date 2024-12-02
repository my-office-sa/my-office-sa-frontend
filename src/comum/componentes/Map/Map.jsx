import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ salas }) => {
  const [coordinates, setCoordinates] = useState([]);

  const fetchCoordinatesFromCEP = async (cep) => {
    try {

      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: cep,
          format: 'json',         
          addressdetails: 1,      
        },
      });

      const { lat, lon } = response.data[0];  

      return { lat: parseFloat(lat), lng: parseFloat(lon) };
    } catch (error) {
      console.error('Erro ao obter coordenadas:', error);
      return { lat: 0, lng: 0 }; 
    }
  };

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coords = await Promise.all(
        salas.map(async (sala) => {
          const { lat, lng } = await fetchCoordinatesFromCEP(sala.cep);
          return { lat, lng, title: sala.nome };
        })
      );
      setCoordinates(coords);  
    };

    fetchCoordinates();
  }, [salas]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDjT2WABBTtCsB6n_yKSO3iLH1v5woOh6U">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={{ lat: -23.55052, lng: -46.633308 }} 
        zoom={12}
      >
        {/* Adiciona os marcadores (pins) no mapa com base nas coordenadas */}
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            position={{ lat: coord.lat, lng: coord.lng }}
            title={coord.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
