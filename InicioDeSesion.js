import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';

const InicioDeSesion = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF", paddingTop: 86 }}>
        
        {/* Logo Section */}
        <View style={{ marginBottom: 22, marginHorizontal: 147 }}>
          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#DB1F27",
            borderColor: "#5E27FD",
            borderWidth: 1,
            paddingVertical: 3,
          }}>
            <View style={{ flex: 1 }}>
              <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ height: 41 }} />
              <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ height: 39, marginHorizontal: 7 }} />
              <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ width: 40, height: 61, marginTop: -23 }} />
            </View>
          </View>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ position: "absolute", top: -36, left: 7, width: 45, height: 84 }} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ position: "absolute", bottom: 10, left: -9, width: 83, height: 24 }} />
        </View>

        {/* Welcome Text */}
        <Text style={{ color: "#1D1D1D", fontSize: 24, marginBottom: 22, marginLeft: 70 }}>Bienvenido de vuelta</Text>

        {/* Input Fields */}
        <View style={{
          backgroundColor: "#00000012",
          borderColor: "#0000001C",
          borderRadius: 100,
          borderWidth: 1,
          paddingVertical: 22,
          paddingHorizontal: 21,
          marginBottom: 12,
          marginHorizontal: 30,
        }}>
          <Text style={{ color: "#000000", fontSize: 12 }}>Nombre o teléfono</Text>
        </View>
        <View style={{
          backgroundColor: "#00000012",
          borderColor: "#0000001C",
          borderRadius: 100,
          borderWidth: 1,
          paddingVertical: 22,
          paddingHorizontal: 20,
          marginBottom: 16,
          marginHorizontal: 30,
        }}>
          <Text style={{ color: "#000000", fontSize: 12 }}>Contraseña</Text>
        </View>

        {/* Forgot Password */}
        <Text style={{ color: "#000000", fontSize: 12, marginBottom: 22, marginLeft: 32 }}>¿Olvidaste tu contraseña?</Text>

        {/* Login Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("InicioHome")} // Navega a InicioHome
          style={{
            alignItems: "center",
            backgroundColor: "#C82127",
            borderRadius: 100,
            paddingVertical: 19,
            marginBottom: 285,
            marginHorizontal: 30,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 14 }}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 72 }}>
          <Text style={{ color: "#000000", fontSize: 12 }}>¿No tienes una cuenta?</Text>
          <Text style={{ color: "#000000", fontSize: 12 }}>Regístrate ahora</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default InicioDeSesion;
