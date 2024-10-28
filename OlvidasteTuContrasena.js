import React from 'react';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';

const OlvidasteTuContrasena = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF", paddingTop: 356 }}>
        <View style={{ marginBottom: 10, marginHorizontal: 147 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#DB1F27",
              borderColor: "#5E27FD",
              borderWidth: 1,
              paddingVertical: 3,
            }}
          >
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode="stretch"
                style={{ height: 41 }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode="stretch"
                style={{ height: 39, marginHorizontal: 6 }}
              />
              <Image
                source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
                resizeMode="stretch"
                style={{ width: 40, height: 61, marginTop: -23 }}
              />
            </View>
          </View>

          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={{
              position: "absolute",
              top: -35,
              left: 7,
              width: 45,
              height: 84,
            }}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={{
              position: "absolute",
              bottom: 10,
              right: -8,
              width: 83,
              height: 24,
            }}
          />
        </View>

        {/* Footer Icons */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 109 }}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={{ width: 16, height: 17, marginTop: 6 }}
          />
          {/* Additional footer images */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OlvidasteTuContrasena;
