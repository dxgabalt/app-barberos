import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RegistrarseCodigoDeVerificacion = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerIcon} />
          <Text style={styles.headerText}>{"Regístrate"}</Text>
        </View>

        {/* Profile Picture Section */}
        <View style={styles.profileSection}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.profilePicture} />
          <View style={styles.spacer} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.profilePicture} />
          <View style={styles.spacer} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.profilePicture} />
        </View>

        {/* Title */}
        <Text style={styles.title}>{"Código de Verificación"}</Text>

        {/* Code Input Section */}
        <View style={styles.codeInputSection}>
          {Array(5).fill().map((_, index) => (
            <View key={index} style={styles.codeInputBox} />
          ))}
        </View>

        {/* Instructions */}
        <Text style={styles.instructions}>{"Se envió un código de verificación a tu teléfono. Ingresa el código para continuar"}</Text>

        {/* Resend Code */}
        <Text style={styles.resendCode}>{"¿No has recibido el código de verificación?"}</Text>

        {/* Next Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrarseSubirTuFotoDePerfil')} // Navega a RegistrarseSubirTuFotoDePerfil
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
  profileSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 19, marginHorizontal: 30 },
  profilePicture: { borderRadius: 8, width: 50, height: 50 },
  spacer: { width: 75, height: 1 },
  title: { color: "#1D1D1D", fontSize: 24, marginBottom: 22, marginLeft: 62 },
  codeInputSection: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 27, marginHorizontal: 30 },
  codeInputBox: { width: 50, height: 50, backgroundColor: "#00000012", borderColor: "#0000001C", borderRadius: 8, borderWidth: 1 },
  instructions: { color: "#000000", fontSize: 12, marginBottom: 16, marginHorizontal: 55, width: 250 },
  resendCode: { color: "#000000", fontSize: 12, marginBottom: 386, marginLeft: 68 },
  nextButton: { alignItems: "center", borderColor: "#000000E3", borderRadius: 100, borderWidth: 1, paddingVertical: 20, marginHorizontal: 30 },
  nextButtonText: { color: "#000000", fontSize: 14 },
});

export default RegistrarseCodigoDeVerificacion;
