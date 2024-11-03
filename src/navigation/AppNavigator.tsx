// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de todas las pantallas desde `src/screens`
import Splashscreen from '../screens/Splashscreen';
import PantallaDeInicio from '../screens/PantallaDeInicio';
import InicioDeSesion from '../screens/InicioDeSesion';
import ConfirmacionDePago from '../screens/ConfirmacionDePago';
import InicioBuscar from '../screens/InicioBuscar';
import InicioHome from '../screens/InicioHome';
import MensajesChat from '../screens/MensajesChat';
import MensajesInicio from '../screens/MensajesInicio';
import OlvidasteTuContrasena from '../screens/OlvidasteTuContrasena';
import Perfil from '../screens/Perfil';
import RegistrarseCodigoDeVerificacion from '../screens/RegistrarseCodigoDeVerificacion';
import RegistrarseInformacionPersonal from '../screens/RegistrarseInformacionPersonal';
import RegistrarseSubirTuFotoDePerfil from '../screens/RegistrarseSubirTuFotoDePerfil';
import RegistrarseTerminosYCondiciones from '../screens/RegistrarseTerminosYCondiciones';
import Reservaciones from '../screens/Reservaciones';
import ReservarCitaPt2 from '../screens/ReservarCitaPt2';
import ReservarCita from '../screens/ReservarCita';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splashscreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="PantallaDeInicio" component={PantallaDeInicio} />
        <Stack.Screen name="InicioDeSesion" component={InicioDeSesion} />
        <Stack.Screen name="OlvidasteTuContrasena" component={OlvidasteTuContrasena} options={{ title: 'Olvidaste tu Contraseña' }} />
        <Stack.Screen name="RegistrarseInformacionPersonal" component={RegistrarseInformacionPersonal} options={{ title: 'Información Personal' }} />
        <Stack.Screen name="RegistrarseCodigoDeVerificacion" component={RegistrarseCodigoDeVerificacion} options={{ title: 'Código de Verificación' }} />
        <Stack.Screen name="RegistrarseSubirTuFotoDePerfil" component={RegistrarseSubirTuFotoDePerfil} options={{ title: 'Subir Foto de Perfil' }} />
        <Stack.Screen name="InicioHome" component={InicioHome} options={{ title: 'Inicio - Home' }} />
        <Stack.Screen name="InicioBuscar" component={InicioBuscar} options={{ title: 'Buscar' }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Perfil' }} />
        <Stack.Screen name="ReservarCita" component={ReservarCita} options={{ title: 'Reservar Cita' }} />
        <Stack.Screen name="ReservarCitaPt2" component={ReservarCitaPt2} options={{ title: 'Reservar Cita (2)' }} />
        <Stack.Screen name="ConfirmacionDePago" component={ConfirmacionDePago} options={{ title: 'Confirmación de Pago' }} />
        <Stack.Screen name="Reservaciones" component={Reservaciones} options={{ title: 'Reservaciones' }} />
        <Stack.Screen name="MensajesInicio" component={MensajesInicio} options={{ title: 'Mensajes' }} />
        <Stack.Screen name="MensajesChat" component={MensajesChat} options={{ title: 'Chat' }} />
        <Stack.Screen name="RegistrarseTerminosYCondiciones" component={RegistrarseTerminosYCondiciones} options={{ title: 'Términos y Condiciones' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
