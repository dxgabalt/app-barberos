import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importación de todas las pantallas
import Splashscreen from './Splashscreen';
import PantallaDeInicio from './PantallaDeInicio';
import InicioDeSesion from './InicioDeSesion';
import ConfirmacionDePago from './ConfirmacionDePago';
import InicioBuscar from './InicioBuscar';
import InicioHome from './InicioHome';
import MensajesChat from './MensajesChat';
import MensajesInicio from './MensajesInicio';
import OlvidasteTuContrasena from './OlvidasteTuContrasena';
import Perfil from './Perfil';
import RegistrarseCodigoDeVerificacion from './RegistrarseCodigoDeVerificacion';
import RegistrarseInformacionPersonal from './RegistrarseInformacionPersonal';
import RegistrarseSubirTuFotoDePerfil from './RegistrarseSubirTuFotoDePerfil';
import RegistrarseTerminosYCondiciones from './RegistrarseTerminosYCondiciones';
import Reservaciones from './Reservaciones';
import ReservarCitaPt2 from './ReservarCitaPt2';
import ReservarCita from './ReservarCita';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splashscreen" screenOptions={{ headerShown: false }}>
        {/* Pantallas de navegación */}
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
}
