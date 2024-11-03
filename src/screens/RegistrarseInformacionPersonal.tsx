import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrarseInformacionPersonal = ({ navigation }) => {
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={{ uri: "https://i.imgur.com/1tMFzp8.png" }} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Regístrate</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressCircleFilled} />
          <View style={styles.progressLine} />
          <View style={styles.progressCircle} />
          <View style={styles.progressLine} />
          <View style={styles.progressCircle} />
        </View>

        {/* Título */}
        <Text style={styles.title}>Información Personal</Text>

        {/* Campos de Entrada */}
        <TextInput
          placeholder="Apellidos"
          value={apellidos}
          onChangeText={setApellidos}
          style={styles.input}
          placeholderTextColor="#666"
        />
        <TextInput
          placeholder="Correo"
          value={correo}
          onChangeText={setCorreo}
          style={styles.input}
          placeholderTextColor="#666"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          style={styles.input}
          placeholderTextColor="#666"
          secureTextEntry
        />
        <TextInput
          placeholder="Número de teléfono"
          value={telefono}
          onChangeText={setTelefono}
          style={styles.input}
          placeholderTextColor="#666"
          keyboardType="phone-pad"
        />

        {/* Botones de Continuar con Google y Facebook */}
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" }} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Continuar con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" }} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Continuar con Facebook</Text>
        </TouchableOpacity>

        {/* Botón de Siguiente */}
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrarseCodigoDeVerificacion')}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>Siguiente</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#192F60",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: "#FFFFFF",
    marginRight: 10,
  },
  headerTitle: {
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
  progressCircleFilled: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#192F60',
  },
  progressLine: {
    width: 40,
    height: 2,
    backgroundColor: '#CCC',
    marginHorizontal: 5,
  },
  progressCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#CCC',
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: "#1D1D1D",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 12,
    fontSize: 16,
    color: "#000",
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#000000E3",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    color: "#000",
    fontSize: 16,
  },
  nextButton: {
    alignItems: "center",
    borderColor: "#000000E3",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 15,
    marginVertical: 20,
  },
  nextButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegistrarseInformacionPersonal;
