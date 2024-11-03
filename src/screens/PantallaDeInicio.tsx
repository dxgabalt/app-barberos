import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Asegúrate de tener 'expo-linear-gradient' instalado

const PantallaDeInicio = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        {/* Gradiente de Fondo e Imagen */}
        <View style={styles.backgroundContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={['#FFFFFF00', '#FFFFFF00', '#FFFFFF']}
            style={styles.gradient}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        {/* Texto del Título */}
        <Text style={styles.title}>Reserva tu corte en segundos</Text>

        {/* Texto del Subtítulo */}
        <Text style={styles.subtitle}>Agenda tu siguiente corte en segundos. Fácil de reservar y manejar tus citas.</Text>

        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity
          onPress={() => navigation.navigate("InicioDeSesion")}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Botón de Registrarse */}
        <TouchableOpacity
          onPress={() => navigation.navigate("RegistrarseInformacionPersonal")}
          style={styles.registerButton}
        >
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>

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
    flexGrow: 1,
    alignItems: 'center',
  },
  backgroundContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  logoImage: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
  },
  title: {
    color: "#1D1D1D",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 40,
  },
  subtitle: {
    color: "#1D1D1D",
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    marginHorizontal: 50,
  },
  loginButton: {
    backgroundColor: "#C82127",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 80,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    borderColor: "#1D1D1D",
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 80,
    alignItems: "center",
  },
  registerButtonText: {
    color: "#1D1D1D",
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PantallaDeInicio;
