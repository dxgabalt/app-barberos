import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ReservaDeServicioScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerIcon} />
        <Text style={styles.headerText}>{"Reserva de servicio"}</Text>
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerImage} />
      </View>

      {/* Barber Card */}
      <Text style={styles.sectionTitle}>{"Barbero"}</Text>
      <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.barberCard} />

      {/* Choose Service */}
      <Text style={styles.sectionTitle}>{"Elige un servicio"}</Text>
      <View style={styles.serviceOptions}>
        {[
          { name: "Cabello", price: "$30 USD", time: "1 hora", bgColor: "#991C2AB0", titleBgColor: "#C3283A" },
          { name: "Barba", price: "$30 USD", time: "1 hora", bgColor: "#0000004D", titleBgColor: "#00000099" },
          { name: "Skincare", price: "$30 USD", time: "1 hora", bgColor: "#0000004D", titleBgColor: "#00000099" },
        ].map((service, index) => (
          <View key={index} style={[styles.serviceContainer, { backgroundColor: service.bgColor }]}>
            <View style={[styles.serviceTitleContainer, { backgroundColor: service.titleBgColor }]}>
              <Text style={styles.serviceTitle}>{service.name}</Text>
            </View>
            <Text style={styles.servicePrice}>{service.price}</Text>
            <Text style={styles.serviceTime}>{service.time}</Text>
          </View>
        ))}
      </View>

      {/* Calendar */}
      <Text style={styles.sectionTitle}>{"Calendario"}</Text>
      <View style={styles.calendarContainer}>
        <View style={styles.calendarHeader}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.calendarArrow} />
          <Text style={styles.calendarMonth}>{"Octubre 2024"}</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.calendarArrow} />
        </View>

        <View style={styles.weekdaysContainer}>
          {["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"].map((day, index) => (
            <Text key={index} style={styles.weekday}>{day}</Text>
          ))}
        </View>

        {[...Array(6)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.daysContainer}>
            {[...Array(7)].map((_, index) => (
              <Text key={index} style={styles.day}>{"12"}</Text>
            ))}
          </View>
        ))}
      </View>

      {/* Payment Methods */}
      <Text style={styles.sectionTitle}>{"Métodos de pago"}</Text>
      {[...Array(3)].map((_, index) => (
        <View key={index} style={styles.paymentMethod}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.paymentIcon} />
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.paymentLogo} />
          <Text style={styles.paymentText}>{"Visa... 9283"}</Text>
        </View>
      ))}


      {/* Additional Notes */}
      <Text style={styles.sectionTitle}>{"Notas adicionales"}</Text>
      <View style={styles.notesContainer}>
        <Text style={styles.notesText}>{"No hay notas adicionales"}</Text>
      </View>

      {/* Confirmation of Appointment */}
      <View style={styles.confirmationContainer}>
        <Text style={styles.confirmationTitle}>{"Confirmación de su cita"}</Text>
        <View style={styles.confirmationDetails}>
          <Text style={styles.barberName}>{"Carlos Aspilcueta"}</Text>
          <Text style={styles.barberShop}>{"Barbería “Opa2s”"}</Text>
          <Text style={styles.appointmentDate}>{"Jueves 10 de oct"}</Text>
          <Text style={styles.serviceSelected}>{"Corte de barba"}</Text>
          <Text style={styles.productPrice}>{"$30"}</Text>
        </View>
      </View>

      {/* Total and Payment Button */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>{"Total $30"}</Text>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>{"Hacer pago"}</Text>
        </TouchableOpacity>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: { backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 23,
  },
  headerIcon: { width: 6, height: 12 },
  headerText: { color: "#FFFFFF", fontSize: 14, flex: 1, marginRight: 78 },
  headerImage: { width: 14, height: 18 },
  sectionTitle: { color: "#000000", fontSize: 14, marginBottom: 13, marginLeft: 33 },
  barberCard: { height: 95, marginHorizontal: 36 },
  serviceOptions: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23,
    marginHorizontal: 32,
  },
  serviceContainer: { width: 70, borderRadius: 8, marginRight: 12 },
  serviceTitleContainer: {
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 10,
  },
  serviceTitle: { color: "#FFFFFF", fontSize: 12 },
  servicePrice: { color: "#FFFFFF", fontSize: 12, marginBottom: 7, marginLeft: 11 },
  serviceTime: { color: "#FFFFFF", fontSize: 12, marginLeft: 18 },
  calendarContainer: {
    backgroundColor: "#FFFFFF",
    borderColor: "#00000099",
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 29,
    paddingHorizontal: 38,
    marginBottom: 24,
    marginHorizontal: 23,
  },
  calendarHeader: { flexDirection: "row", alignItems: "center", marginBottom: 19 },
  calendarArrow: { width: 4, height: 9 },
  calendarMonth: { color: "#000000", fontSize: 11, flex: 1, textAlign: "center", marginRight: 83 },
  weekdaysContainer: { flexDirection: "row", alignItems: "center", marginBottom: 21 },
  weekday: { color: "#000000", fontSize: 11, marginRight: 18 },
  daysContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  day: { color: "#000000", fontSize: 11, marginRight: 24 },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    marginHorizontal: 28,
  },
  paymentIcon: { width: 18, height: 18, marginRight: 12 },
  paymentLogo: { width: 32, height: 24, marginRight: 12 },
  paymentText: { color: "#000000", fontSize: 12, flex: 1 },
  notesContainer: {
    backgroundColor: "#00000012",
    borderColor: "#0000001C",
    borderRadius: 100,
    borderWidth: 1,
    padding: 21,
    marginBottom: 18,
    marginHorizontal: 28,
  },
  notesText: { color: "#000000", fontSize: 12 },
  confirmationContainer: {
    backgroundColor: "#EBD2D4",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 28,
  },
  confirmationTitle: { color: "#991C2A", fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  confirmationDetails: { paddingVertical: 10 },
  barberName: { color: "#000000", fontSize: 16, fontWeight: "bold" },
  barberShop: { color: "#991C2A", fontSize: 12 },
  appointmentDate: { color: "#8C8C8C", fontSize: 12 },
  serviceSelected: { color: "#000000", fontSize: 12 },
  productPrice: { color: "#000000", fontSize: 16 },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 28,
    marginBottom: 20,
  },
  totalLabel: { color: "#000000", fontSize: 16, fontWeight: "bold" },
  paymentButton: {
    backgroundColor: "#991C2A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  paymentButtonText: { color: "#FFFFFF", fontSize: 14 },
  footer: { backgroundColor: "#FFFFFF", paddingVertical: 15, paddingHorizontal: 56 },
  footerIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  footerTextContainer: { flexDirection: "row", alignItems: "center" },
  footerText: { color: "#000000", fontSize: 10, marginRight: 28 },
});

export default ReservaDeServicioScreen;
