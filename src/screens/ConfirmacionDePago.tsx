import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native';

const PaymentDetail = ({ label, value }) => (
  <View style={styles.paymentDetailContainer}>
    <Text style={styles.paymentDetailLabel}>{label}</Text>
    <Text style={styles.paymentDetailValue}>{value}</Text>
  </View>
);

const ConfirmationScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerIcon} />
          <Text style={styles.headerText}>{"Confirmación de pago"}</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerIcon} />
        </View>

        {/* Icono de Confirmación y Detalle del Pago */}
        <View style={styles.confirmationContainer}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.logoIcon} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.checkIcon} />
          <Text style={styles.amountText}>{"$30"}</Text>
          <Text style={styles.successText}>{"Pago exitoso"}</Text>
          <Text style={styles.receiptText}>{"Número de recibo: NCZC7ZT"}</Text>
          <Text style={styles.dateText}>{"12 Jun, 2024 11:50 AM"}</Text>
          <Text style={styles.thankYouText}>
            {"¡Muchas gracias por su compra, le adjuntamos su recibo a su correo o a sus reservaciones!"}
          </Text>
        </View>

        {/* Información de Pago */}
        <View style={styles.paymentInfoContainer}>
          <View style={styles.paymentInfoHeader}>
            <Text style={styles.paymentInfoTitle}>{"Concepto"}</Text>
            <Text style={styles.paymentInfoType}>{"Pago en línea"}</Text>
          </View>
          <PaymentDetail label="Pagaste a" value="Barbero’s app" />
          <PaymentDetail label="Método de pago" value="Visa *****3282" />
          <PaymentDetail label="Monto total" value="$30" />
        </View>

        {/* Footer con navegación */}
        <View style={styles.footer}>
          <View style={styles.footerIconsContainer}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.footerIcon} />
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.footerIcon} />
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.footerIcon} />
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.footerIcon} />
          </View>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>{"Inicio"}</Text>
            <Text style={styles.footerText}>{"Reservaciones"}</Text>
            <Text style={styles.footerText}>{"Mensajes"}</Text>
            <Text style={styles.footerText}>{"Ajustes"}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#192F60',
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 48,
  },
  headerIcon: {
    width: 14,
    height: 18,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  confirmationContainer: {
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 32,
  },
  logoIcon: {
    width: 50,
    height: 50,
    marginBottom: 12,
  },
  checkIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  amountText: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  successText: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 10,
  },
  receiptText: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 12,
    color: '#6c757d',
    marginBottom: 10,
  },
  thankYouText: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  paymentInfoContainer: {
    marginHorizontal: 24,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 32,
  },
  paymentInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  paymentInfoTitle: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
  },
  paymentInfoType: {
    fontSize: 12,
    color: '#6c757d',
  },
  paymentDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  paymentDetailLabel: {
    fontSize: 12,
    color: '#6c757d',
  },
  paymentDetailValue: {
    fontSize: 12,
    color: '#000000',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 56,
  },
  footerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  footerIcon: {
    width: 18,
    height: 18,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: '#000000',
    fontSize: 10,
  },
});

export default ConfirmationScreen;
