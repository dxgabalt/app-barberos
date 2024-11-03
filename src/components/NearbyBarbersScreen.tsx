import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import * as supabaseClient from '../../supabaseClient';


const NearbyBarbersScreen = () => {
  // Estado para almacenar los datos de barberos y errores
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ejemplo de coordenadas y radio para la búsqueda
  const latitude = 40.7128; // Cambia esto con los datos actuales
  const longitude = -74.0060;
  const radius = 0.05; // Radio en el que buscar barberos

  // Función para cargar los barberos cercanos
  const loadBarbers = async () => {
    setLoading(true); // Muestra un indicador de carga
    const { data, error } = await supabaseClient.fetchNearbyBarbers(latitude, longitude, radius);
    if (error) {
      console.error('Error al obtener barberos cercanos:', error.message);
    } else {
      setBarbers(data);
    }
    setLoading(false); // Oculta el indicador de carga
  };

  // Llamar a la función cuando el componente se monta
  useEffect(() => {
    loadBarbers();
  }, []);

  // Componente de carga si los datos aún no han llegado
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando barberos cercanos...</Text>
      </View>
    );
  }

  // Renderizar los resultados en una lista
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barberos Cercanos</Text>
      <FlatList
        data={barbers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.barberItem}>
            <Text style={styles.barberName}>{item.full_name}</Text>
            <Text style={styles.barberDetails}>Distancia: {item.distance} km</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No se encontraron barberos cercanos.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  barberItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  barberName: {
    fontSize: 18,
    fontWeight: '500',
  },
  barberDetails: {
    fontSize: 14,
    color: '#555555',
  },
});

export default NearbyBarbersScreen;
