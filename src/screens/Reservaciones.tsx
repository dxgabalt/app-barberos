import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ReservacionesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerIcon} />
          <Text style={styles.headerText}>Reservaciones</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerImage} />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <Text style={styles.activeTab}>Próximas Citas</Text>
          <Text style={styles.inactiveTab}>Reservas Pasadas</Text>
        </View>
        <View style={styles.activeTabIndicator} />

        {/* Reservation Section */}
        <Text style={styles.sectionTitle}>Reservaciones</Text>
        <View style={styles.reservationCard}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="cover" style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Especialista en cortes de barba</Text>
            <Text style={styles.cardSubtitle}>Carlos Aspilcueta</Text>
            <Text style={styles.cardLocation}>Barbería “Opa2s”</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.cardRating}>4.2</Text>
              <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.starIcon} />
            </View>
          </View>
        </View>

        {/* Calendar Section */}
        <Text style={styles.sectionTitle}>Calendario</Text>
        <View style={styles.calendarContainer}>
          <View style={styles.calendarHeader}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.calendarArrow} />
            <Text style={styles.calendarMonth}>Octubre 2024</Text>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.calendarArrow} />
          </View>

          <View style={styles.weekdaysContainer}>
            {["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"].map((day, index) => (
              <Text key={index} style={styles.weekday}>{day}</Text>
            ))}
          </View>

          {Array(4).fill(0).map((_, rowIndex) => (
            <View key={rowIndex} style={styles.daysContainer}>
              {Array(7).fill("12").map((day, index) => (
                <Text key={index} style={[styles.day, rowIndex === 2 && index === 3 && styles.selectedDay]}>
                  {day}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Next Appointment */}
        <View style={styles.nextAppointmentContainer}>
          <Text style={styles.nextAppointmentText}>Siguiente cita</Text>
          <Text style={styles.serviceTypeText}>Corte de barba</Text>
        </View>
        <View style={styles.appointmentDetailsContainer}>
          <Text style={styles.appointmentName}>Carlos Aspilcueta</Text>
          <Text style={styles.appointmentLocation}>Barbería “Opa2s”</Text>
          <Text style={styles.appointmentDate}>Jueves 10 de oct</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>14:00 pm - 15:00 pm</Text>
          </View>
        </View>

      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('InicioHome')}>
          <Text style={styles.navbarText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reservaciones')}>
          <Text style={[styles.navbarText, styles.activeNavbarText]}>Reservaciones</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MensajesInicio')}>
          <Text style={styles.navbarText}>Mensajes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Ajustes')}>
          <Text style={styles.navbarText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 17,
  },
  headerIcon: {
    width: 6,
    height: 12,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 14,
    flex: 1,
    marginRight: 93,
  },
  headerImage: {
    width: 14,
    height: 18,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    marginHorizontal: 71,
  },
  activeTab: {
    color: "#991C2A",
    fontSize: 14,
  },
  inactiveTab: {
    color: "#000000",
    fontSize: 14,
  },
  activeTabIndicator: {
    width: 10,
    height: 2,
    backgroundColor: "#991C2A",
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 106,
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 13,
    marginLeft: 25,
  },
  reservationCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 13,
    marginBottom: 22,
    marginHorizontal: 39,
    shadowColor: "#00000040",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 4,
  },
  cardSubtitle: {
    color: "#991C2A",
    fontSize: 12,
    marginBottom: 4,
  },
  cardLocation: {
    color: "#8C8C8C",
    fontSize: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  cardRating: {
    color: "#000000",
    fontSize: 10,
  },
  starIcon: {
    width: 10,
    height: 10,
    marginLeft: 2,
  },
  calendarContainer: {
    marginBottom: 46,
    marginHorizontal: 23,
    backgroundColor: "#FFFFFF",
    borderColor: "#00000099",
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 29,
    paddingHorizontal: 38,
  },
  calendarHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 19,
  },
  calendarArrow: {
    width: 4,
    height: 9,
  },
  calendarMonth: {
    color: "#000000",
    fontSize: 11,
    flex: 1,
    textAlign: "center",
    marginRight: 83,
  },
  weekdaysContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 21,
  },
  weekday: {
    color: "#000000",
    fontSize: 11,
    marginRight: 18,
  },
  daysContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },
  day: {
    color: "#000000",
    fontSize: 11,
    marginRight: 24,
  },
  selectedDay: {
    backgroundColor: "#991C2A",
    color: "#FFFFFF",
    borderRadius: 15,
    textAlign: "center",
    paddingVertical: 5,
    width: 30,
    height: 30,
  },
  nextAppointmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5E3E5",
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginHorizontal: 24,
    marginBottom: 10,
  },
  nextAppointmentText: {
    color: "#991C2A",
    fontSize: 12,
  },
  serviceTypeText: {
    color: "#000000",
    fontSize: 12,
  },
  appointmentDetailsContainer: {
    marginHorizontal: 24,
    padding: 10,
  },
  appointmentName: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 4,
  },
  appointmentLocation: {
    color: "#991C2A",
    fontSize: 12,
    marginBottom: 4,
  },
  appointmentDate: {
    color: "#8C8C8C",
    fontSize: 12,
    marginBottom: 10,
  },
  timeContainer: {
    alignItems: "center",
    backgroundColor: "#EBD2D4",
    borderRadius: 20,
    paddingVertical: 10,
  },
  timeText: {
    color: "#991C2A",
    fontSize: 12,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 56,
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
  },
  navbarText: {
    color: "#A4A4A4",
    fontSize: 10,
  },
  activeNavbarText: {
    color: "#991C2A",
  },
});

export default ReservacionesScreen;
