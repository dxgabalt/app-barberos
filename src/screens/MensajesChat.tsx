import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TextInput } from 'react-native';

const MensajesChat = () => {
  return (
    <ScrollView style={styles.scrollView}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={styles.headerIcon}
        />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <Text style={styles.headerText}>Carlos Aspilcueta</Text>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={styles.searchIcon}
        />
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={styles.moreIcon}
        />
      </View>

      {/* Chat Messages */}
      <View style={styles.messageContainer}>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={styles.imageMessage}
        />
        <Text style={styles.messageText}>Este soy yo trabajando</Text>
        <Text style={styles.timeText}>16.46</Text>
      </View>

      {/* Additional Chat Messages */}
      <View style={styles.userMessage}>
        <Text style={styles.userMessageText}>Tengo tiempo de ir hoy?</Text>
        <Text style={styles.userTimeText}>16.46</Text>
      </View>
      
      <Text style={styles.receivedMessage}>Si, claro, puedo hacerme tiempo</Text>
      <Text style={styles.timeText}>16.46</Text>
      
      <View style={styles.userMessage}>
        <Text style={styles.userMessageText}>Ok, ahí estoy 5m</Text>
        <Text style={styles.userTimeText}>16.50 - Visto</Text>
      </View>

      <View style={styles.audioMessage}>
        <Text style={styles.audioDuration}>0:20</Text>
        <Text style={styles.audioTimestamp}>09:13 - Visto</Text>
      </View>

      <Text style={styles.receivedMessage}>Buenos días, me puedes dejar una reseña?</Text>
      <Text style={styles.timeText}>09.45</Text>

      {/* Input Bar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe un mensaje"
        />
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={styles.sendIcon}
        />
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
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  headerIcon: {
    width: 6,
    height: 12,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 14,
    marginRight: 55,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 16,
  },
  moreIcon: {
    width: 18,
    height: 12,
  },
  messageContainer: {
    width: 304,
    backgroundColor: "#FFFFFF",
    padding: 9,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  imageMessage: {
    height: 143,
    marginBottom: 12,
  },
  messageText: {
    color: "#0F1828",
    fontSize: 14,
    marginBottom: 10,
  },
  timeText: {
    color: "#ADB5BD",
    fontSize: 10,
  },
  userMessage: {
    backgroundColor: "#EBD2D4",
    borderRadius: 8,
    padding: 10,
    alignSelf: "flex-end",
    marginBottom: 10,
    marginRight: 20,
  },
  userMessageText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  userTimeText: {
    color: "#FFFFFF",
    fontSize: 10,
    alignSelf: "flex-end",
  },
  receivedMessage: {
    color: "#0F1828",
    fontSize: 14,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
    alignSelf: "flex-start",
    marginBottom: 10,
    marginLeft: 20,
  },
  audioMessage: {
    backgroundColor: "#991C2A",
    borderRadius: 8,
    padding: 10,
    width: 160,
    alignSelf: "flex-end",
    marginBottom: 10,
    marginRight: 20,
  },
  audioDuration: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  audioTimestamp: {
    color: "#FFFFFF",
    fontSize: 10,
    alignSelf: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#0F1828",
  },
  sendIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
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

export default MensajesChat;
