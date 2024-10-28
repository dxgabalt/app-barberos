import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RegistrarseSubirTuFotoDePerfil = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerIcon} />
          <Text style={styles.headerText}>{"Regístrate"}</Text>
        </View>

        {/* Profile Picture Section */}
        <View style={styles.profilePictureSection}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.profilePicture} />
          <View style={styles.spacer} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.profilePicture} />
          <View style={styles.spacer} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.profilePicture} />
        </View>

        {/* Title */}
        <Text style={styles.titleText}>{"Sube tu foto de perfil"}</Text>

        {/* Upload Profile Picture */}
        <View style={styles.uploadSection}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.uploadIcon} />
          <Text style={styles.uploadText}>{"Sube una imagen de perfil"}</Text>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrarseTerminosYCondiciones')} // Navega a RegistrarseTerminosYCondiciones
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>{"Siguiente"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollView: { flex: 1, backgroundColor: "#FFFFFF" },
  header: { flexDirection: "row", alignItems: "center", backgroundColor: "#192F60", paddingVertical: 19, paddingHorizontal: 30, marginBottom: 20 },
  headerIcon: { width: 6, height: 13, marginRight: 114 },
  headerText: { color: "#FFFFFF", fontSize: 14, flex: 1 },
  profilePictureSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 19, marginHorizontal: 30 },
  profilePicture: { borderRadius: 8, width: 50, height: 50 },
  spacer: { width: 75, height: 1 },
  titleText: { color: "#1D1D1D", fontSize: 24, marginBottom: 22, marginLeft: 68 },
  uploadSection: { flexDirection: "row", alignItems: "center", borderColor: "#000000E3", borderRadius: 8, borderWidth: 1, paddingVertical: 18, paddingHorizontal: 21, marginBottom: 465, marginHorizontal: 30 },
  uploadIcon: { width: 14, height: 14, marginRight: 18 },
  uploadText: { color: "#000000", fontSize: 12, flex: 1 },
  nextButton: { alignItems: "center", borderColor: "#000000E3", borderRadius: 8, borderWidth: 1, paddingVertical: 20, marginHorizontal: 30 },
  nextButtonText: { color: "#000000", fontSize: 14 },
});

export default RegistrarseSubirTuFotoDePerfil;
