import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Asegúrate de tener 'expo-linear-gradient' instalado

const PantallaDeInicio = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <View style={{ flexDirection: "row", marginBottom: 62 }}>
        
        {/* Gradiente de fondo */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#FFFFFF00", "#FFFFFF00", "#FFFFFF"]}
          style={{ width: '100%', height: 400 }}
        />

        {/* Imagen */}
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ position: "absolute", bottom: 0, left: 155, width: 45, height: 84 }}
        />
      </View>

      {/* Título */}
      <Text style={{ color: "#1D1D1D", fontSize: 24, marginBottom: 19, marginHorizontal: 78, textAlign: 'center' }}>
        Reserva tu corte en Segundos
      </Text>

      {/* Subtítulo */}
      <Text style={{ color: "#1D1D1D", fontSize: 12, marginBottom: 25, marginHorizontal: 56, textAlign: 'center' }}>
        Agenda tu siguiente corte en segundos. Fácil de reservar y manejar tus citas.
      </Text>

      {/* Botón Iniciar Sesión */}
      <TouchableOpacity
        onPress={() => navigation.navigate("InicioDeSesion")}
        style={{
          alignItems: "center",
          backgroundColor: "#C82127",
          borderRadius: 100,
          paddingVertical: 19,
          marginBottom: 12,
          marginHorizontal: 30,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 14 }}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* Botón Registrarse */}
      <TouchableOpacity
        onPress={() => navigation.navigate("RegistrarseInformacionPersonal")}
        style={{
          alignItems: "center",
          borderColor: "#1D1D1D",
          borderRadius: 100,
          borderWidth: 2,
          paddingVertical: 20,
          marginHorizontal: 30,
        }}
      >
        <Text style={{ color: "#1D1D1D", fontSize: 14 }}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PantallaDeInicio;
