import React from 'react';
import { View, Image, SafeAreaView, ScrollView, Button } from 'react-native';

const Splashscreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView  
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingTop: 356,
        }}>
        <View 
          style={{
            marginBottom: 10,
            marginHorizontal: 147,
          }}>
          {/* Aquí van tus imágenes y contenido del Splashscreen */}
        </View>
        
        {/* Botón para navegar a PantallaDeInicio */}
        <View style={{ marginTop: 50, marginHorizontal: 30 }}>
          <Button
            title="Ir a Pantalla de Inicio"
            onPress={() => navigation.navigate('PantallaDeInicio')}
            color="#DB1F27" // Cambia el color si es necesario
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Splashscreen;
