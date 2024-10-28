import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

const PaymentDetail = ({ label, value }) => (
  <View style={{ flexDirection: 'row', marginBottom: 14 }}>
    <Text style={{ color: '#000000', fontSize: 12, marginRight: 4, flex: 1 }}>{label}</Text>
    <Text style={{ color: '#000000', fontSize: 12 }}>{value}</Text>
  </View>
);

const ConfirmationScreen = () => {
  // Importa la imagen de método de pago de forma local, asegúrate de que el archivo exista
  const paymentMethodIcon = require('.'); // Asegúrate de que el archivo exista en ./assets/

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        {/* Encabezado */}
        <View style={{
          flexDirection: 'row', 
          alignItems: 'center', 
          backgroundColor: '#192F60', 
          paddingVertical: 17, 
          paddingHorizontal: 24, 
          marginBottom: 48 
        }}>
          <Image 
            source={require('./assets/icon1.png')} // Asegúrate de que icon1.png esté en la carpeta de assets
            resizeMode='contain' 
            style={{ width: 6, height: 12 }} 
          />
          <View style={{ flex: 1, alignSelf: 'stretch' }} />
          <Text style={{ color: '#FFFFFF', fontSize: 14, marginRight: 69 }}>{"Confirmación de pago"}</Text>
          <Image 
            source={require('./assets/icon2.png')} // Asegúrate de que icon2.png esté en la carpeta de assets
            resizeMode='contain' 
            style={{ width: 14, height: 18 }} 
          />
        </View>

        {/* Detalle del Pago */}
        <View style={{ marginHorizontal: 24 }}>
          <PaymentDetail label="Método de Pago" value="Tarjeta de Crédito" />
          <PaymentDetail label="Monto" value="$30 USD" />
          {/* Puedes agregar más detalles de pago aquí */}
        </View>

        {/* Footer con navegación */}
        <View style={{ backgroundColor: '#FFFFFF', paddingVertical: 15, paddingHorizontal: 56 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
            <Image 
              source={require('./assets/icon3.png')} // Asegúrate de que icon3.png esté en la carpeta de assets
              resizeMode='contain' 
              style={{ width: 15, height: 15 }} 
            />
            {/* Otros iconos para la navegación */}
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#000000', fontSize: 10, marginRight: 28 }}>{"Inicio"}</Text>
            <Text style={{ color: '#000000', fontSize: 10, marginRight: 19 }}>{"Reservaciones"}</Text>
            <Text style={{ color: '#000000', fontSize: 10, marginRight: 36 }}>{"Mensajes"}</Text>
            <Text style={{ color: '#000000', fontSize: 10, flex: 1 }}>{"Ajustes"}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
