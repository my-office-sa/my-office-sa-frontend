import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Principal from "../../comum/componentes/Principal/Principal";
import CardSalas from "../../comum/componentes/CardSalas/CardSalas";
import ServicosSalas from "../../comum/servicos/ServicosSalas";
import "./PaginaInicial.css";
import FooterResponsivo from "../../comum/componentes/FooterResponsivo/FooterResponsivo";

// Importando axios para buscar as coordenadas
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Função para buscar coordenadas via OpenStreetMap (Nominatim) usando o CEP
const fetchCoordinatesFromCEP = async (cep) => {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: cep,
        format: 'json',
        addressdetails: 1,
      },
    });

    // A resposta vem como um array, pegamos o primeiro item
    const { lat, lon } = response.data[0];
    return { lat: parseFloat(lat), lng: parseFloat(lon) };
  } catch (error) {
    console.error('Erro ao buscar coordenadas:', error);
    return { lat: 0, lng: 0 }; // Retorna valores padrão em caso de erro
  }
};

const MapComponent = ({ salas }) => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      // Para cada sala, buscamos as coordenadas e atualizamos o estado
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
        mapContainerStyle={{ width: '100%', height: '200px' }}  
        center={{ lat: -27.593500, lng: -48.558540 }}  
        zoom={12}
      >
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            position={{ lat: coord.lat, lng: coord.lng }}
            title={coord.title}
            icon={{
              path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z", // Path para o ícone
              fillColor: "#58AF9B", // Cor de preenchimento
              fillOpacity: 1, // Opacidade do ícone
              strokeWeight: 0, // Remove a borda
              scale: 1.5, // Tamanho do ícone
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

const instanciaServicoSalas = new ServicosSalas();

const PaginaInicial = () => {
  const [listaSalas, setListaSalas] = useState([]);
  const [salasFiltradas, setSalasFiltradas] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [buscaRealizada, setBuscaRealizada] = useState(false);

  useEffect(() => {
    const salasDoLocalStorage = instanciaServicoSalas.listar();
    setListaSalas(salasDoLocalStorage);
    setSalasFiltradas(salasDoLocalStorage);
  }, []);

  const filtrarSalas = (e) => {
    const termoPesquisa = e.target.value.toLowerCase();
    setPesquisa(termoPesquisa);
    setBuscaRealizada(true);

    if (termoPesquisa === "") {
      setSalasFiltradas(listaSalas);
    } else {
      const salasFiltradas = listaSalas.filter((sala) => {
        const cidade = sala.cidade ? sala.cidade.toLowerCase() : "";
        const bairro = sala.bairro ? sala.bairro.toLowerCase() : "";

        return cidade.includes(termoPesquisa) || bairro.includes(termoPesquisa);
      });
      setSalasFiltradas(salasFiltradas);
    }
  };

  return (
    <Principal>
      {/* Mapa adicionado acima do campo de busca */}
      <MapComponent salas={salasFiltradas} />
      
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Busque sua sala"
            value={pesquisa}
            onChange={filtrarSalas}
          />
          <FaMagnifyingGlass className="search-icon" />
        </div>
      </div>

      <div>
        {buscaRealizada && salasFiltradas.length === 0 ? (
          <p>Não há salas disponíveis para o filtro informado.</p>
        ) : (
          salasFiltradas.map((sala) => <CardSalas key={sala.id} sala={sala} />)
        )}
      </div>

      <div className="div-responsiva">
        <FooterResponsivo />
      </div>
    </Principal>
  );
};

export default PaginaInicial;
