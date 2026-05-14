import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Este é o componente que você vai exportar
export default function Perfil() {
  return (
    <View style={styles.card}>
      {/* Imagem de Perfil */}
      <Image 
        source={{ uri: 'https://github.com/github.com.png' }} 
        style={styles.avatar} 
      />

      <Text style={styles.nome}>Seu Nome Aqui</Text>
      
      {/* Campo de entrada de texto */}
      <TextInput 
        style={styles.input} 
        placeholder="Editar biografia..." 
      />

      {/* Botão clicável */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Perfil Salvo!')}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});