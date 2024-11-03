import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const BarberCard = ({ barber }) => (
  <View style={styles.barberCard}>
    <Image source={{ uri: barber.image }} style={styles.barberImage} />
    <View style={styles.barberInfo}>
      <Text style={styles.barberName}>{barber.name}</Text>
      <Text style={styles.barberShop}>{barber.shop}</Text>
      <View style={styles.ratingContainer}>
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.ratingIcon} />
        <Text style={styles.ratingText}>{barber.rating}</Text>
      </View>
    </View>
  </View>
);

const InicioHome = ({ navigation }) => {
  const barbers = [
    { name: 'Carlos Aspilicueta', shop: 'Barbería “Pedros”', rating: '4.2', image: 'https://i.imgur.com/1tMFzp8.png' },
    { name: 'Jorge Mendez', shop: 'Barbería “Pedros”', rating: '4.5', image: 'https://i.imgur.com/1tMFzp8.png' },
    // Agrega más barberos si es necesario
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Inicio</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.headerIcon} />
        </View>

        {/* Barra de Búsqueda */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <TextInput
              placeholder="Buscar..."
              style={styles.searchInput}
              placeholderTextColor="#BDBDBD"
            />
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.searchButtonIcon} />
          </View>
        </View>

        {/* Carrusel de Imágenes (Simulación) */}
        <ScrollView horizontal style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
          <View style={styles.scrollItem} />
          <View style={styles.scrollItem} />
          <View style={styles.scrollItem} />
        </ScrollView>

        {/* Categorías */}
        <View style={styles.categoryButtons}>
          <TouchableOpacity style={styles.categoryButtonActive}>
            <Text style={styles.categoryButtonText}>Populares</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Cabello</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Barba</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>Mejor calificado</Text>
          </TouchableOpacity>
        </View>

        {/* Tarjetas de Barbería */}
        {barbers.map((barber, index) => (
          <BarberCard key={index} barber={barber} />
        ))}

        {/* Barra de Navegación */}
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('InicioHome')}>
            <Text style={styles.navbarText}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Reservaciones')}>
            <Text style={styles.navbarText}>Reservaciones</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MensajesInicio')}>
            <Text style={styles.navbarText}>Mensajes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ajustes')}>
            <Text style={styles.navbarText}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 17,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  searchBarContainer: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  searchButtonIcon: {
    width: 18,
    height: 18,
    marginLeft: 10,
  },
  horizontalScroll: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  scrollItem: {
    width: 200,
    height: 100,
    backgroundColor: "#991C2A",
    borderRadius: 15,
    marginRight: 10,
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginBottom: 15,
  },
  categoryButtonActive: {
    backgroundColor: "#991C2A",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryButton: {
    borderColor: "#00000099",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryButtonText: {
    color: "#000",
    fontSize: 14,
  },
  barberCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  barberImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  barberInfo: {
    flex: 1,
  },
  barberName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  barberShop: {
    fontSize: 14,
    color: "#666",
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F8F8F8",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#E8E8E8",
  },
  navbarText: {
    fontSize: 14,
    color: "#333",
  },
});

export default InicioHome;
