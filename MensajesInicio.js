import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet } from 'react-native';

const MensajesInicio = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={styles.headerIcon}
          />
          <View style={{ flex: 1 }} />
          <Text style={styles.headerText}>Mensajes</Text>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={styles.iconLarge}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={styles.iconSmall}
          />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Buscar...</Text>
        </View>

        {/* Chat List */}
        <View style={styles.chatContainer}>
          <View style={styles.chatItem}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode="stretch"
                style={styles.avatar}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode="stretch"
                style={styles.onlineStatus}
              />
            </View>
            <View style={styles.messageContainer}>
              <Text style={styles.senderName}>Athalia Putri</Text>
              <Text style={styles.messageText}>Que tal te parecio?</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>Hoy</Text>
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>1</Text>
              </View>
            </View>
          </View>

          {/* Additional Chat Items */}
          <View style={styles.chatItem}>
            <View style={styles.initialsContainer}>
              <Text style={styles.initials}>RD</Text>
            </View>
            <View style={styles.messageContainer}>
              <Text style={styles.senderName}>Raki Devon</Text>
              <Text style={styles.messageText}>Puede postergar mi cita?</Text>
            </View>
            <Text style={styles.timeText}>17/6</Text>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={styles.avatar}
            />
            <View style={styles.messageContainer}>
              <Text style={styles.senderName}>Carlos Aspilcueta</Text>
              <Text style={styles.messageText}>Nos vemos en la Barberia</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>17/6</Text>
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>1</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerIcons}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.footerIcon} />
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.footerIcon} />
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.footerIcon} />
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={styles.footerIcon} />
          </View>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>Inicio</Text>
            <Text style={styles.footerText}>Reservaciones</Text>
            <Text style={styles.footerTextActive}>Mensajes</Text>
            <Text style={styles.footerText}>Ajustes</Text>
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
    marginBottom: 16,
  },
  headerIcon: {
    width: 6,
    height: 12,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginRight: 78,
  },
  iconLarge: {
    width: 19,
    height: 19,
    marginRight: 12,
  },
  iconSmall: {
    width: 19,
    height: 12,
  },
  searchBar: {
    width: 327,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7FC",
    borderRadius: 65,
    paddingVertical: 9,
    paddingHorizontal: 11,
    marginBottom: 20,
    marginHorizontal: 9,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 14,
  },
  searchText: {
    color: "#ADB5BD",
    fontSize: 14,
    flex: 1,
  },
  chatContainer: {
    marginBottom: 426,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    marginHorizontal: 24,
  },
  avatarContainer: {
    width: 48,
    marginRight: 15,
  },
  avatar: {
    borderRadius: 37,
    height: 48,
  },
  onlineStatus: {
    position: "absolute",
    top: -2,
    right: -1,
    width: 11,
    height: 12,
  },
  messageContainer: {
    flex: 1,
    marginRight: 4,
  },
  senderName: {
    color: "#0F1828",
    fontSize: 14,
    marginBottom: 10,
  },
  messageText: {
    color: "#ADB5BD",
    fontSize: 10,
  },
  timeContainer: {
    width: 22,
  },
  timeText: {
    color: "#A4A4A4",
    fontSize: 8,
    marginBottom: 12,
    marginLeft: 1,
  },
  unreadBadge: {
    alignItems: "center",
    backgroundColor: "#EBD2D4",
    borderRadius: 40,
    paddingVertical: 7,
  },
  unreadText: {
    color: "#991C2A",
    fontSize: 10,
  },
  initialsContainer: {
    width: 48,
    alignItems: "center",
    backgroundColor: "#166FF6",
    borderRadius: 77,
    paddingVertical: 20,
    marginRight: 16,
  },
  initials: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 56,
  },
  footerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  footerIcon: {
    width: 15,
    height: 15,
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
  footerTextActive: {
    color: "#991C2A",
    fontSize: 10,
    marginRight: 36,
  },
});

export default MensajesInicio;
