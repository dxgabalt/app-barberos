import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

const InicioBuscar = () => {
  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#192F60",
          paddingVertical: 16,
          paddingHorizontal: 24,
          marginBottom: 18,
        }}
      >
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ width: 6, height: 12 }}
        />
        <View style={{ flex: 1, alignSelf: "stretch" }} />
        <Text style={{ color: "#FFFFFF", fontSize: 14, marginRight: 87 }}>
          {"Perfil"}
        </Text>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ width: 18, height: 18, marginRight: 18 }}
        />
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ width: 18, height: 18 }}
        />
      </View>

      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 23,
          marginHorizontal: 36,
        }}
      >
        <View
          style={{
            width: 240,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderColor: "#D9D9D9",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 11,
            paddingHorizontal: 16,
          }}
        >
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={{ width: 18, height: 18, marginRight: 9 }}
          />
          <Text style={{ color: "#000000", fontSize: 14, flex: 1 }}>
            {"Barberias"}
          </Text>
        </View>
        <Image
          source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
          resizeMode="stretch"
          style={{ width: 22, height: 14 }}
        />
      </View>

      {/* Recommendations Section */}
      <Text style={{ color: "#000000", fontSize: 14, marginBottom: 19, marginLeft: 37 }}>
        {"Nuestros recomendados para ti"}
      </Text>

      {/* Recommended Barbershops */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 11,
          marginHorizontal: 42,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <Image
            key={i}
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={{ width: 60, height: 60 }}
          />
        ))}
      </View>

      {/* Barber Names */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 21,
          marginHorizontal: 53,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <Text key={i} style={{ color: "#000000", fontSize: 14 }}>
            {"Carlos"}
          </Text>
        ))}
      </View>

      {/* Barbershop List */}
      {[...Array(3)].map((_, i) => (
        <View key={i}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={{ height: 95, marginHorizontal: 36 }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              paddingVertical: 14,
              paddingHorizontal: 12,
              marginBottom: 12,
              marginHorizontal: 36,
              shadowColor: "#00000040",
              shadowOpacity: 0.3,
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Text style={{ color: "#000000", fontSize: 12, marginRight: 4, flex: 1 }}>
              {"Barbería “Pedros”"}
            </Text>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode="stretch"
              style={{ width: 10, height: 10, marginRight: 4 }}
            />
            <Text style={{ color: "#000000", fontSize: 8 }}>
              {i === 1 ? "4.5" : "4.2"}
            </Text>
          </View>
        </View>
      ))}

      {/* Footer */}
      <View>
        <View style={{ height: 60, backgroundColor: "#FFFFFF" }} />
      </View>
    </ScrollView>
  );
};

export default InicioBuscar;
