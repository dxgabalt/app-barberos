import React from "react";
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProfileHeader = ({ navigation }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.backIcon} />
    </TouchableOpacity>
    <Text style={styles.headerText}>Perfil</Text>
    <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.icon} />
    <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.icon} />
  </View>
);

const ProfileInfo = () => (
  <View style={styles.profileInfo}>
    <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.profileImage} />
    <Text style={styles.profileName}>Carlos Aspilicueta</Text>
    <Text style={styles.profileSpecialty}>Especialista en Barbas</Text>
    <Text style={styles.barbershopName}>Barbería "Opa2s"</Text>
    <View style={styles.profileStats}>
      <View style={styles.stat}>
        <Text style={styles.statValue}>4.2</Text>
        <Text style={styles.statLabel}>Valoraciones</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>3</Text>
        <Text style={styles.statLabel}>Años de experiencia</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statValue}>305</Text>
        <Text style={styles.statLabel}>No. de reseñas</Text>
      </View>
    </View>
  </View>
);

const BiographySection = () => (
  <View style={styles.biography}>
    <Text style={styles.sectionTitle}>Biografía</Text>
    <Text style={styles.biographyText}>
      Apasionado por el arte de la barbería y comprometido en crear estilos únicos que reflejan tu personalidad. ¡Ven por un buen corte y una gran conversación!
    </Text>
  </View>
);

const ServiceItem = ({ service }) => (
  <View style={styles.serviceItem}>
    <Text style={styles.serviceName}>{service.name}</Text>
    <Text style={styles.servicePrice}>{service.price}</Text>
    <Text style={styles.serviceDuration}>{service.duration}</Text>
  </View>
);

const ServicesSection = () => {
  const services = [
    { name: "Cabello", price: "$30 USD", duration: "1 hora" },
    { name: "Barba", price: "$30 USD", duration: "1 hora" },
    { name: "Skincare", price: "$30 USD", duration: "1 hora" },
  ];

  return (
    <View style={styles.servicesSection}>
      <Text style={styles.sectionTitle}>Servicios ofrecidos</Text>
      <View style={styles.servicesContainer}>
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} />
        ))}
      </View>
    </View>
  );
};

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header */}
        <ProfileHeader navigation={navigation} />

        {/* Perfil Información */}
        <ProfileInfo />

        {/* Biografía */}
        <BiographySection />

        {/* Servicios */}
        <ServicesSection />

        {/* Botones de Acción */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.buttonText}>Enviar mensaje</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reserveButton}>
            <Text style={styles.buttonText}>Reserva ahora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollView: { paddingBottom: 20 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  backIcon: { width: 20, height: 20, tintColor: "#FFFFFF" },
  headerText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold", flex: 1, textAlign: "center" },
  icon: { width: 20, height: 20, tintColor: "#FFFFFF", marginLeft: 15 },

  profileInfo: {
    alignItems: "center",
    paddingVertical: 20,
  },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  profileName: { fontSize: 22, fontWeight: "bold", color: "#333" },
  profileSpecialty: { fontSize: 16, color: "#666", marginBottom: 5 },
  barbershopName: { fontSize: 14, color: "#999", marginBottom: 20 },
  profileStats: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginVertical: 10 },
  stat: { alignItems: "center" },
  statValue: { fontSize: 18, fontWeight: "bold", color: "#333" },
  statLabel: { fontSize: 12, color: "#666" },

  biography: { paddingHorizontal: 20, marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 10 },
  biographyText: { fontSize: 14, color: "#666" },

  servicesSection: { paddingHorizontal: 20, marginVertical: 10 },
  servicesContainer: { flexDirection: "row", justifyContent: "space-between" },
  serviceItem: {
    alignItems: "center",
    backgroundColor: "#991C2A",
    borderRadius: 8,
    padding: 10,
    width: "30%",
  },
  serviceName: { fontSize: 14, color: "#FFFFFF", fontWeight: "bold" },
  servicePrice: { fontSize: 12, color: "#FFFFFF", marginVertical: 5 },
  serviceDuration: { fontSize: 12, color: "#FFFFFF" },

  actionButtonsContainer: { flexDirection: "row", justifyContent: "space-around", marginVertical: 20 },
  messageButton: { backgroundColor: "#DDD", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 20 },
  reserveButton: { backgroundColor: "#C82127", borderRadius: 8, paddingVertical: 10, paddingHorizontal: 20 },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});

export default Profile;
