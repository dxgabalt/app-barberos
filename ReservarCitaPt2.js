import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ConfirmacionDeCitaScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Payment Section */}
        <View style={styles.paymentSection}>
          <View style={styles.paymentHeader}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerIcon} />
            <Text style={styles.headerText}>{"Reserva de servicio"}</Text>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerImage} />
          </View>
        </View>

        {/* Additional Notes */}
        <Text style={styles.sectionTitle}>{"Notas adicionales"}</Text>
        <View style={styles.notesContainer}>
          <Text style={styles.notesText}>{"No hay notas adicionales"}</Text>
        </View>

        {/* Confirmation Section */}
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>{"Confirmación de su cita"}</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.confirmationIcon} />
        </View>

        {/* Barber Details */}
        <View style={styles.barberDetailsContainer}>
          <View style={styles.barberInfo}>
            <Text style={styles.barberName}>{"Carlos Aspilcueta"}</Text>
            <Text style={styles.barberShop}>{"Barbería “Opa2s”"}</Text>
            <Text style={styles.appointmentDate}>{"Jueves 10 de oct"}</Text>
          </View>
          <View style={styles.appointmentTimeContainer}>
            <Text style={styles.appointmentTime}>{"14:00 pm - 15:00 pm"}</Text>
          </View>
        </View>

        {/* Product Total */}
        <Text style={styles.totalLabel}>{"Total en productos:"}</Text>
        <View style={styles.productTotalContainer}>
          <Text style={styles.productText}>{"Corte de barba"}</Text>
          <Text style={styles.productPrice}>{"$30"}</Text>
        </View>

        {/* Final Total and Payment Button */}
        <View style={styles.finalTotalContainer}>
          <Text style={styles.totalText}>{"Total $30"}</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.separator} />
          <View style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>{"Hacer pago"}</Text>
          </View>
        </View>

        {/* Footer Navigation */}
        <View style={styles.footer}>
          <View style={styles.footerIconsContainer}>
            {[15, 17, 18, 18].map((size, index) => (
              <Image
                key={index}
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode="stretch"
                style={{ width: size, height: index === 2 ? 16 : size }}
              />
            ))}
          </View>
          <View style={styles.footerTextContainer}>
            {["Inicio", "Reservaciones", "Mensajes", "Ajustes"].map((text, index) => (
              <Text key={index} style={styles.footerText}>
                {text}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    marginHorizontal: 23,
  },
  paymentSection: {
    position: "absolute",
    top: 0,
    right: -23,
    width: 360,
    height: 50,
    backgroundColor: "#192F60",
    paddingHorizontal: 24,
  },
  paymentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 17,
  },
  headerIcon: {
    width: 6,
    height: 12,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginRight: 78,
    flex: 1,
  },
  headerImage: {
    width: 14,
    height: 18,
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 14,
    marginLeft: 29,
  },
  notesContainer: {
    backgroundColor: "#00000012",
    borderColor: "#0000001C",
    borderRadius: 100,
    borderWidth: 1,
    padding: 21,
    marginBottom: 18,
    marginHorizontal: 28,
  },
  notesText: {
    color: "#000000",
    fontSize: 12,
  },
  confirmationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBD2D4",
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 18,
  },
  confirmationText: {
    color: "#991C2A",
    fontSize: 13,
    marginRight: 4,
    flex: 1,
  },
  confirmationIcon: {
    width: 18,
    height: 18,
  },
  barberDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginHorizontal: 24,
  },
  barberInfo: {
    width: 119,
  },
  barberName: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 8,
  },
  barberShop: {
    color: "#991C2A",
    fontSize: 11,
    marginBottom: 13,
    marginLeft: 1,
  },
  appointmentDate: {
    color: "#8C8C8C",
    fontSize: 11,
  },
  appointmentTimeContainer: {
    width: 146,
    alignItems: "center",
    backgroundColor: "#EBD2D4",
    borderRadius: 21,
    paddingVertical: 18,
    shadowColor: "#E6EEEF",
    shadowOpacity: 1.0,
    shadowOffset: { width: 0, height: 0 },
  },
  appointmentTime: {
    color: "#991C2A",
    fontSize: 12,
  },
  totalLabel: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 24,
  },
  productTotalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
    marginHorizontal: 24,
  },
  productText: {
    color: "#8C8C8C",
    fontSize: 11,
    marginRight: 4,
    flex: 1,
  },
  productPrice: {
    color: "#000000",
    fontSize: 14,
  },
  finalTotalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 25,
  },
  totalText: {
    color: "#000000",
    fontSize: 16,
    marginRight: 13,
  },
  separator: {
    width: 8,
    height: 2,
  },
  paymentButton: {
    flex: 1,
    alignSelf: "stretch",
    width: 184,
    alignItems: "center",
    backgroundColor: "#991C2A",
    borderRadius: 31,
    paddingVertical: 13,
  },
  paymentButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  footer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 56,
  },
  footerIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  footerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: {
    color: "#000000",
    fontSize: 10,
    marginRight: 28,
  },
});

export default ConfirmacionDeCitaScreen;
