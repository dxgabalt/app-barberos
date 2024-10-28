import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

const MensajesChat = () => {
  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#192F60",
          paddingVertical: 17,
          paddingHorizontal: 24,
          marginBottom: 12,
        }}
      >
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ width: 6, height: 12 }}
        />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <Text style={{ color: "#FFFFFF", fontSize: 14, marginRight: 55 }}>
          {"Carlos Aspilcueta"}
        </Text>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ width: 16, height: 16, marginRight: 16 }}
        />
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ width: 18, height: 12 }}
        />
      </View>

      {/* Chat Messages */}
      <View style={{ width: 304, height: 210, backgroundColor: "#FFFFFF", padding: 9, marginBottom: 10, marginHorizontal: 15 }}>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ height: 143, marginBottom: 12 }}
        />
        <Text style={{ color: "#0F1828", fontSize: 14, marginBottom: 10 }}>
          {"Este soy yo trabajando"}
        </Text>
        <Text style={{ color: "#ADB5BD", fontSize: 10 }}>
          {"16.46"}
        </Text>
      </View>

      {/* Additional Chat Components */}
      {/* Add the remaining chat elements following the same structure */}
      
      {/* Footer */}
      <View style={{ backgroundColor: "#FFFFFF", paddingVertical: 15, paddingHorizontal: 56 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
          <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} resizeMode="stretch" style={{ width: 15, height: 15 }} />
          {/* Additional footer icons here */}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#000000", fontSize: 10, marginRight: 28 }}>{"Inicio"}</Text>
          {/* Additional footer labels here */}
        </View>
      </View>
    </ScrollView>
  );
};

export default MensajesChat;
