import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OlvidasteTuContrasena = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    if (email) {
      // Aquí podrías hacer una llamada a la API para enviar el correo de recuperación
      Alert.alert("Correo enviado", "Te hemos enviado un enlace para restablecer tu contraseña.");
    } else {
      Alert.alert("Error", "Por favor, ingresa un correo válido.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              style={styles.headerIcon}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>¿Olvidaste tu contraseña?</Text>
        </View>

        {/* Logo */}
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Título */}
        <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>

        {/* Subtítulo */}
        <Text style={styles.subtitle}>Ingresa tu correo para nosotros ayudarte</Text>

        {/* Campo de Entrada de Correo */}
        <TextInput
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#666"
        />

        {/* Botón de Ingresar Correo */}
        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Text style={styles.buttonText}>Ingresar correo</Text>
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
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
    marginRight: 10,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  title: {
    color: "#1D1D1D",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: "#666666",
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#000",
    width: '85%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#C82127",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 60,
    alignItems: "center",
    width: '85%',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OlvidasteTuContrasena;
