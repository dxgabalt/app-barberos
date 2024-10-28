import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const InicioHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>{"Inicio"}</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={styles.headerIcon} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={styles.searchIcon} />
            <Text style={styles.searchPlaceholder}>{"Buscar..."}</Text>
          </View>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={styles.searchButtonIcon} />
        </View>

        {/* Horizontal Scroll */}
        <ScrollView horizontal style={styles.horizontalScroll}>
          <View style={styles.scrollItem} />
        </ScrollView>

        {/* Popularity Indicator */}
        <View style={styles.popularityIndicator}>
          <View style={styles.popularityDot} />
          <View style={styles.popularityDot} />
          <View style={styles.popularityDot} />
        </View>

        {/* Category Buttons */}
        <View style={styles.categoryButtons}>
          <TouchableOpacity style={styles.categoryButtonActive}>
            <Text style={styles.categoryButtonText}>{"Populares"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>{"Cabello"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>{"Barba"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>{"Mejor calificado"}</Text>
          </TouchableOpacity>
        </View>

        {/* Barbería Cards */}
        {Array(3).fill().map((_, index) => (
          <View key={index} style={styles.barberCard}>
            <Text style={styles.barberName}>{"Barbería “Pedros”"}</Text>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={styles.ratingIcon} />
            <Text style={styles.ratingText}>{index === 1 ? "4.5" : "4.2"}</Text>
          </View>
        ))}

        {/* Navbar */}
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate('InicioHome')}>
            <Text style={styles.navbarText}>{"Inicio"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Reservaciones')}>
            <Text style={styles.navbarText}>{"Reservaciones"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MensajesInicio')}>
            <Text style={styles.navbarText}>{"Mensajes"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ajustes')}>
            <Text style={styles.navbarText}>{"Ajustes"}</Text>
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
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 17,
    paddingLeft: 164,
    paddingRight: 30,
    marginBottom: 18,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginRight: 4,
    flex: 1,
  },
  headerIcon: {
    width: 14,
    height: 18,
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    marginHorizontal: 36,
  },
  searchBar: {
    width: 240,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#D9D9D9",
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 9,
  },
  searchPlaceholder: {
    color: "#BDBDBD",
    fontSize: 14,
    flex: 1,
  },
  searchButtonIcon: {
    width: 22,
    height: 14,
  },
  horizontalScroll: {
    flexDirection: "row",
    marginBottom: 12,
    marginHorizontal: 16,
  },
  scrollItem: {
    width: 300,
    height: 100,
    backgroundColor: "#991C2A",
    borderRadius: 25,
    marginRight: 24,
  },
  popularityIndicator: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    marginHorizontal: 139,
  },
  popularityDot: {
    width: 38,
    height: 8,
    backgroundColor: "#991C2A",
    borderRadius: 7,
    marginRight: 6,
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 16,
  },
  categoryButtonActive: {
    width: 82,
    alignItems: "center",
    backgroundColor: "#991C2A",
    borderRadius: 8,
    paddingVertical: 11,
  },
  categoryButton: {
    width: 70,
    alignItems: "center",
    borderColor: "#00000099",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 11,
  },
  categoryButtonText: {
    color: "#000000",
    fontSize: 12,
  },
  barberCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 12,
    marginHorizontal: 36,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  barberName: {
    color: "#000000",
    fontSize: 12,
    marginRight: 4,
    flex: 1,
  },
  ratingIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  ratingText: {
    color: "#000000",
    fontSize: 8,
  },
  navbar: {
    height: 47,
    marginHorizontal: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarText: {
    color: "#000000",
    fontSize: 10,
  },
});

export default InicioHome;