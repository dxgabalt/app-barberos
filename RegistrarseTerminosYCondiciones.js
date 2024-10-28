import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RegistroFinalScreen = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate('InicioHome'); // Navega a InicioHome.js
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>

        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={styles.headerIcon}
          />
          <Text style={styles.headerText}>{"Regístrate"}</Text>
        </View>

        {/* Title */}
        <Text style={styles.titleText}>{"Casi terminamos"}</Text>

        {/* Instructions */}
        <Text style={styles.instructions}>
          {"Estás a un paso de completar el registro, para finalizarlo puedes aceptar nuestros Términos y Condiciones."}
        </Text>
        
        <Text style={styles.instructions}>
          {"Publicamos la Política de privacidad del nombre de la empresa para que usted sepa qué esperar al utilizar nuestros servicios."}
        </Text>
        
        <Text style={styles.instructions}>
          {"Al marcar la casilla a continuación, usted acepta estos términos."}
        </Text>

        {/* Terms and Conditions */}
        <View style={styles.termsContainer}>
          <View style={styles.checkbox} />
          <Text style={styles.termsText}>{"Acepto los términos y condiciones."}</Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>{"Registrarse"}</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 19,
    paddingHorizontal: 30,
    marginBottom: 31,
  },
  headerIcon: {
    width: 6,
    height: 13,
    marginRight: 114,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 14,
    flex: 1,
  },
  titleText: {
    color: "#1D1D1D",
    fontSize: 24,
    marginBottom: 26,
    marginLeft: 92,
  },
  instructions: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 18,
    marginHorizontal: 39,
    width: 282,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 393,
    marginHorizontal: 38,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "#00000012",
    borderRadius: 5,
    marginRight: 12,
  },
  termsText: {
    color: "#000000",
    fontSize: 12,
    flex: 1,
  },
  registerButton: {
    alignItems: "center",
    backgroundColor: "#C82127",
    borderRadius: 100,
    paddingVertical: 20,
    marginHorizontal: 30,
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});

export default RegistroFinalScreen;
