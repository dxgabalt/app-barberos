import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const BarberRecommendation = ({ imageUri, name }) => (
  <View style={styles.recommendationContainer}>
    <Image source={{ uri: imageUri }} style={styles.recommendationImage} />
    <Text style={styles.recommendationText}>{name}</Text>
  </View>
);

const BarbershopCard = ({ barbershop }) => (
  <View style={styles.barbershopCardContainer}>
    <Image source={{ uri: barbershop.imageUri }} style={styles.barbershopImage} />
    <View style={styles.barbershopInfo}>
      <Text style={styles.barbershopName}>{barbershop.name}</Text>
      <View style={styles.ratingContainer}>
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.ratingIcon} />
        <Text style={styles.ratingText}>{barbershop.rating}</Text>
      </View>
    </View>
  </View>
);

const InicioBuscar = () => {
  const recommendedBarbers = [
    { name: "Carlos", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "Carlos", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "Carlos", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "Carlos", imageUri: "https://i.imgur.com/1tMFzp8.png" },
  ];

  const barbershops = [
    { name: "Barbería “Pedros”", rating: "4.2", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "Barbería “Pedros”", rating: "4.5", imageUri: "https://i.imgur.com/1tMFzp8.png" },
    { name: "Barbería “Pedros”", rating: "4.2", imageUri: "https://i.imgur.com/1tMFzp8.png" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Perfil</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.headerIcon} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.headerIcon} />
        </View>

        {/* Barra de Búsqueda */}
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Barberias"
            style={styles.searchInput}
            placeholderTextColor="#BDBDBD"
          />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.filterIcon} />
        </View>

        {/* Título de Recomendaciones */}
        <Text style={styles.recommendationsTitle}>Nuestros recomendados para ti</Text>

        {/* Sección de Barberos Recomendados */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendationsContainer}>
          {recommendedBarbers.map((barber, index) => (
            <BarberRecommendation key={index} imageUri={barber.imageUri} name={barber.name} />
          ))}
        </ScrollView>

        {/* Lista de Barberías */}
        {barbershops.map((barbershop, index) => (
          <BarbershopCard key={index} barbershop={barbershop} />
        ))}

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
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#D9D9D9",
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  recommendationsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 20,
    marginBottom: 10,
  },
  recommendationsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  recommendationContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  recommendationImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  recommendationText: {
    fontSize: 14,
    color: "#000000",
    marginTop: 5,
  },
  barbershopCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  barbershopImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  barbershopInfo: {
    flex: 1,
  },
  barbershopName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
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
});

export default InicioBuscar;
