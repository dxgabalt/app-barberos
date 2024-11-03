import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RegistroFinalScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = () => {
    if (isChecked) {
      navigation.navigate('InicioHome'); // Navega a InicioHome.js solo si se aceptan los términos
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Regístrate</Text>
        </View>

        {/* Title */}
        <Text style={styles.titleText}>Casi terminamos</Text>

        {/* Instructions */}
        <Text style={styles.instructions}>
          Estás a un paso de completar el registro, para finalizarlo puedes aceptar nuestros <Text style={styles.boldText}>Términos y Condiciones</Text>.
        </Text>
        
        <Text style={styles.instructions}>
          Publicamos la Política de privacidad del nombre de la empresa para que usted sepa qué esperar al utilizar nuestros servicios.
        </Text>
        
        <Text style={styles.instructions}>
          Al marcar la casilla a continuación, usted acepta estos términos.
        </Text>

        {/* Terms and Conditions */}
        <View style={styles.termsContainer}>
          <TouchableOpacity onPress={toggleCheckbox} style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
            {isChecked && <View style={styles.innerCheckbox} />}
          </TouchableOpacity>
          <Text style={styles.termsText}>Acepto los términos y condiciones.</Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={[styles.registerButton, !isChecked && styles.registerButtonDisabled]}
          onPress={handleRegister}
          disabled={!isChecked}
        >
          <Text style={styles.registerButtonText}>Registrarse</Text>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
    marginRight: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  titleText: {
    color: "#1D1D1D",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  instructions: {
    color: "#000000",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#C82127",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#C82127",
  },
  innerCheckbox: {
    width: 12,
    height: 12,
    backgroundColor: "#FFFFFF",
  },
  termsText: {
    color: "#000000",
    fontSize: 14,
  },
  registerButton: {
    alignItems: "center",
    backgroundColor: "#C82127",
    borderRadius: 25,
    paddingVertical: 15,
  },
  registerButtonDisabled: {
    backgroundColor: "#C8212755", // Color más claro para indicar deshabilitado
  },
  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistroFinalScreen;
