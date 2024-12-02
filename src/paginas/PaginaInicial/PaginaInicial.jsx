import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useNavigate } from "react-router-dom";

const MapComponent = ({ salas }) => {
  const [coordinates, setCoordinates] = useState([]);
  const navigate = useNavigate();  // Hook dentro do componente

  useEffect(() => {
    const fetchCoordinates = async () => {
      const coords = await Promise.all(
        salas.map(async (sala) => {
          const { lat, lng } = await fetchCoordinatesFromCEP(sala.cep);
          return { lat, lng, title: sala.nome, id: sala.id };  // Inclui o ID da sala
        })
      );
      setCoordinates(coords);  
    };

    fetchCoordinates();
  }, [salas]);

  return (
    <LoadScript googleMapsApiKey="Sua_Chave_De_API">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '200px' }}  
        center={{ lat: -27.593500, lng: -48.558540 }}  
        zoom={12}
      >
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            position={{ lat: coord.lat, lng: coord.lng }}
            title={coord.title}
            onClick={() => navigate(`/detalhes-sala/${coord.id}`)}
            icon={{
              path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z", // Forma do ícone (círculo)
              fillColor: "#58AF9B", // Cor personalizada
              fillOpacity: 1, // Opacidade do ícone
              strokeWeight: 0, // Sem borda
              scale: 1.5, // Tamanho do ícone
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
