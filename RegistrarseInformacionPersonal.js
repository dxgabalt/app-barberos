import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';

const RegistrarseInformacionPersonal = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#192F60", paddingVertical: 19, paddingHorizontal: 30, marginBottom: 20 }}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ width: 6, height: 13, marginRight: 114 }} />
          <Text style={{ color: "#FFFFFF", fontSize: 14, flex: 1 }}>{"Regístrate"}</Text>
        </View>

        {/* Profile Picture Section */}
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 19, marginHorizontal: 30 }}>
          <View style={{ width: 50, marginRight: 75 }}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ borderRadius: 8, height: 50 }} />
            <View style={{ position: "absolute", bottom: 23, left: 50, width: 75, height: 1 }} />
          </View>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ borderRadius: 8, width: 50, height: 50 }} />
          <View style={{ width: 75, height: 1 }} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ borderRadius: 8, width: 50, height: 50 }} />
        </View>

        <Text style={{ color: "#1D1D1D", fontSize: 24, marginBottom: 84, marginLeft: 68 }}>{"Información Personal"}</Text>

        {/* Input Fields */}
        <View style={{ backgroundColor: "#00000012", borderColor: "#0000001C", borderRadius: 100, borderWidth: 1, padding: 21, marginBottom: 12, marginHorizontal: 30 }}>
          <Text style={{ color: "#000000", fontSize: 12 }}>{"Apellidos"}</Text>
        </View>
        <View style={{ backgroundColor: "#00000012", borderColor: "#0000001C", borderRadius: 100, borderWidth: 1, padding: 21, marginBottom: 12, marginHorizontal: 30 }}>
          <Text style={{ color: "#000000", fontSize: 12 }}>{"Correo"}</Text>
        </View>
        <View style={{ backgroundColor: "#00000012", borderColor: "#0000001C", borderRadius: 100, borderWidth: 1, padding: 21, marginBottom: 12, marginHorizontal: 30 }}>
          <Text style={{ color: "#000000", fontSize: 12 }}>{"Contraseña"}</Text>
        </View>

        {/* Phone Number Field */}
        <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#00000012", borderColor: "#0000001C", borderRadius: 100, borderWidth: 1, padding: 20, marginBottom: 8, marginHorizontal: 30 }}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ width: 6, height: 3, marginRight: 10 }} />
          <Text style={{ color: "#000000", fontSize: 12, flex: 1 }}>{"Número de teléfono"}</Text>
        </View>

        {/* Continue with Google Button */}
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", borderColor: "#000000E3", borderRadius: 100, borderWidth: 1, paddingVertical: 15, paddingHorizontal: 20, marginBottom: 75, marginHorizontal: 30 }}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode={"stretch"} style={{ width: 20, height: 19, marginRight: 13 }} />
          <Text style={{ color: "#000000", fontSize: 12, flex: 1 }}>{"Continuar con Google"}</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrarseCodigoDeVerificacion')} // Navega a RegistrarseCodigoDeVerificacion
          style={{ alignItems: "center", borderColor: "#000000E3", borderRadius: 100, borderWidth: 1, paddingVertical: 20, marginHorizontal: 30 }}>
          <Text style={{ color: "#000000", fontSize: 14 }}>{"Siguiente"}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrarseInformacionPersonal;
