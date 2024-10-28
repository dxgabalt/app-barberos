import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.backIcon} />
        <Text style={styles.headerText}>{"Perfil"}</Text>
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.icon} />
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.icon} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.searchIcon} />
          <Text style={styles.searchText}>{"Barberias"}</Text>
        </View>
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.searchArrow} />
      </View>

      {/* Recommendations Section */}
      <Text style={styles.sectionTitle}>{"Nuestros recomendados para ti"}</Text>

      {/* Recommended Barbershops */}
      <View style={styles.recommendedContainer}>
        {[...Array(4)].map((_, i) => (
          <Image key={i} source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.recommendedImage} />
        ))}
      </View>

      {/* Barber Names */}
      <View style={styles.namesContainer}>
        {[...Array(4)].map((_, i) => (
          <Text key={i} style={styles.nameText}>{"Carlos"}</Text>
        ))}
      </View>

      {/* Barbershop List */}
      {[...Array(3)].map((_, i) => (
        <View key={i} style={styles.barbershopContainer}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.barbershopImage} />
          <View style={styles.barbershopDetails}>
            <Text style={styles.barbershopName}>{"Barbería “Pedros”"}</Text>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.ratingIcon} />
            <Text style={styles.ratingText}>{i === 1 ? "4.5" : "4.2"}</Text>
          </View>
        </View>
      ))}

      {/* Footer */}
      <View style={styles.footer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 18,
  },
  backIcon: { width: 6, height: 12 },
  headerText: { color: "#FFFFFF", fontSize: 14, marginRight: 87, flex: 1 },
  icon: { width: 18, height: 18, marginRight: 18 },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 23,
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
  searchIcon: { width: 18, height: 18, marginRight: 9 },
  searchText: { color: "#000000", fontSize: 14, flex: 1 },
  searchArrow: { width: 22, height: 14 },

  sectionTitle: { color: "#000000", fontSize: 14, marginBottom: 19, marginLeft: 37 },

  recommendedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 11,
    marginHorizontal: 42,
  },
  recommendedImage: { width: 60, height: 60 },

  namesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 21,
    marginHorizontal: 53,
  },
  nameText: { color: "#000000", fontSize: 14 },

  barbershopContainer: { marginBottom: 12 },
  barbershopImage: { height: 95, marginHorizontal: 36 },
  barbershopDetails: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginHorizontal: 36,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  barbershopName: { color: "#000000", fontSize: 12, marginRight: 4, flex: 1 },
  ratingIcon: { width: 10, height: 10, marginRight: 4 },
  ratingText: { color: "#000000", fontSize: 8 },

  footer: { height: 60, backgroundColor: "#FFFFFF" },
});
