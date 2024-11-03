import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const RegistrarseSubirTuFotoDePerfil = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para seleccionar la imagen de perfil
  const pickImage = async () => {
    // Solicitar permisos para acceder a la galería
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      Alert.alert("Permiso requerido", "Se necesita permiso para acceder a la galería.");
      return;
    }
  
    // Abrir la galería para seleccionar una imagen
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
  
    // Verificar si se seleccionó una imagen
    if (!result.canceled && result.assets && result.assets.length > 0) {
      // Acceder a la URI de la imagen seleccionada
      setSelectedImage(result.assets[0].uri);
    }
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Regístrate</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressCircle} />
          <View style={styles.progressLine} />
          <View style={styles.progressCircle} />
          <View style={styles.progressLine} />
          <View style={styles.progressCircleFilled} />
        </View>

        {/* Título */}
        <Text style={styles.titleText}>Sube tu foto de perfil</Text>

        {/* Sección de Subir Imagen de Perfil */}
        <TouchableOpacity onPress={pickImage} style={styles.uploadSection}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.profileImage} />
          ) : (
            <>
              <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.uploadIcon} />
              <Text style={styles.uploadText}>Sube una imagen de perfil</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Botón de Siguiente */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrarseTerminosYCondiciones')}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '100%',
  },
  headerIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
    marginRight: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  progressCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#CCC',
    backgroundColor: '#FFFFFF',
  },
  progressLine: {
    width: 40,
    height: 2,
    backgroundColor: '#CCC',
    marginHorizontal: 5,
  },
  progressCircleFilled: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#192F60',
  },
  titleText: {
    color: "#1D1D1D",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  uploadSection: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#000000E3",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: "center",
    marginBottom: 20,
  },
  uploadIcon: {
    width: 20,
    height: 20,
    tintColor: "#000000",
    marginRight: 10,
  },
  uploadText: {
    color: "#000000",
    fontSize: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nextButton: {
    alignItems: "center",
    borderColor: "#000000E3",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginTop: 30,
  },
  nextButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrarseSubirTuFotoDePerfil;
