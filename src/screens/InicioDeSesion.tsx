import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InicioDeSesion = ({ navigation }) => {
  // Estado para manejar los inputs
  const [nombreOTelefono, setNombreOTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.logo} />
        </View>

        {/* Texto de bienvenida */}
        <Text style={styles.welcomeText}>Bienvenido de vuelta</Text>

        {/* Campo de Nombre o Teléfono */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nombre o teléfono"
            value={nombreOTelefono}
            onChangeText={setNombreOTelefono}
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

        {/* Campo de Contraseña */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Contraseña"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry
            style={styles.input}
            placeholderTextColor="#666"
          />
        </View>

        {/* ¿Olvidaste tu contraseña? */}
        <TouchableOpacity onPress={() => navigation.navigate("OlvidasteTuContrasena")}>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity
          onPress={() => navigation.navigate("InicioHome")}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Link para Registrarse */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>¿No tienes una cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("RegistrarseInformacionPersonal")}>
            <Text style={styles.registerLink}> Regístrate ahora</Text>
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
    paddingTop: 86,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 22,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: "#1D1D1D",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 12,
    width: '100%',
  },
  input: {
    fontSize: 16,
    color: "#000",
  },
  forgotPasswordText: {
    color: "#000",
    fontSize: 14,
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 22,
  },
  loginButton: {
    backgroundColor: "#C82127",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: '100%',
    marginBottom: 285,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  registerText: {
    color: "#000",
    fontSize: 14,
  },
  registerLink: {
    color: "#C82127",
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default InicioDeSesion;
