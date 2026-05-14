import React from 'react';
import { View, StyleSheet } from 'react-native';
import Perfil from '@/components/Perfil'; // Importando o componente exportado

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Chamando o componente aqui */}
      <Perfil />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
});