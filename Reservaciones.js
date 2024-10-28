import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const ReservacionesScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>

        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerIcon} />
          <Text style={styles.headerText}>{"Reservaciones"}</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.headerImage} />
        </View>

        {/* Navigation Tabs */}
        <View style={styles.tabsContainer}>
          <Text style={styles.activeTab}>{"Próximas Citas"}</Text>
          <Text style={styles.inactiveTab}>{"Reservas Pasadas"}</Text>
        </View>
        <View style={styles.activeTabIndicator} />

        {/* Section Title */}
        <Text style={styles.sectionTitle}>{"Reservaciones"}</Text>
        <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.imagePlaceholder} />

        {/* Reservation Detail */}
        <View style={styles.reservationDetail}>
          <Text style={styles.reservationText}>{"Barbería “Opa2s”"}</Text>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.ratingIcon} />
          <Text style={styles.ratingText}>{"4.2"}</Text>
        </View>

        {/* Calendar Section */}
        <Text style={styles.sectionTitle}>{"Calendario"}</Text>
        <View style={styles.calendarContainer}>

          {/* Calendar Header */}
          <View style={styles.calendarHeader}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.calendarArrow} />
            <Text style={styles.calendarMonth}>{"Octubre 2024"}</Text>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.calendarArrow} />
          </View>

          {/* Weekdays */}
          <View style={styles.weekdaysContainer}>
            {["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"].map((day, index) => (
              <Text key={index} style={styles.weekday}>{day}</Text>
            ))}
          </View>

          {/* Days */}
          {Array(4).fill(0).map((_, rowIndex) => (
            <View key={rowIndex} style={styles.daysContainer}>
              {Array(7).fill("12").map((day, index) => (
                index === 3 && rowIndex === 1 ? (
                  <Image key={index} source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.highlightedDay} />
                ) : (
                  <Text key={index} style={styles.day}>{day}</Text>
                )
              ))}
            </View>
          ))}

          {/* Notification */}
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>{"Tienes 2 citas pendientes"}</Text>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.notificationIcon} />
          </View>
        </View>
      </ScrollView>
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
  imagePlaceholder: {
    height: 95,
    marginHorizontal: 39,
  },
  reservationDetail: {
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
  reservationText: {
    color: "#000000",
    fontSize: 12,
    marginRight: 4,
    flex: 1,
  },
  ratingIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  ratingText: {
    color: "#000000",
    fontSize: 8,
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
  highlightedDay: {
    width: 31,
    height: 31,
    marginRight: 15,
  },
  notificationContainer: {
    position: "absolute",
    bottom: -28,
    left: -23,
    width: 360,
    height: 51,
    backgroundColor: "#EBD2D4",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  notificationText: {
    color: "#991C2A",
    fontSize: 11,
  },
  notificationIcon: {
    width: 14,
    height: 18,
    marginLeft: 4,
  },
});

export default ReservacionesScreen;
