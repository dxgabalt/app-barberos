import { createClient } from '@supabase/supabase-js';

// Reemplaza con tus credenciales de Supabase
const SUPABASE_URL = 'https://evjyszzhiciuakcgpvxh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2anlzenpoaWNpdWFrY2dwdnhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MDQ5OTQsImV4cCI6MjA0NjE4MDk5NH0.ZOHFX3Hatg6U7OikPvrJbCtvDNlp6sR44DacR9AyVqA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error('Error al registrar el usuario:', error.message);
      return { error };
    }
    return { data };
  };
  
  export const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Error al iniciar sesión:', error.message);
      return { error };
    }
    return { data };
  };
  
  
  export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  export const fetchNearbyBarbers = async (latitude, longitude, radius) => {
    const { data, error } = await supabase
      .from('barbers')
      .select('*')
      .filter('latitude', 'gte', latitude - radius)
      .filter('latitude', 'lte', latitude + radius)
      .filter('longitude', 'gte', longitude - radius)
      .filter('longitude', 'lte', longitude + radius);
  
    if (error) {
      console.error('Error al obtener barberos cercanos:', error.message);
      return { error };
    }
  
    return { data };
  };

  export const createReservation = async (user_id, barber_id, service, date) => {
    const { data, error } = await supabase
      .from('reservations')
      .insert([
        { user_id, barber_id, service, date, status: 'pendiente' },
      ]);
  
    if (error) {
      console.error('Error al crear reserva:', error.message);
      return { error };
    }
  
    return { data };
  };

  export const fetchBarberReviews = async (barber_id) => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('barber_id', barber_id);
  
    if (error) {
      console.error('Error al obtener reseñas:', error.message);
      return { error };
    }
  
    return { data };
  };
  