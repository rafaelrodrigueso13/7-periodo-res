import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig';

export function FormScreen() {
  const [carName, setCarName] = useState('');
  const [clientName, setClientName] = useState('');
  const [rentalValue, setRentalValue] = useState('');
  const [rentalDate, setRentalDate] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!carName || !clientName || !rentalValue || !rentalDate) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      await addDoc(collection(db, 'carro'), {
        carName,
        clientName,
        rentalValue: parseFloat(rentalValue),
        rentalDate,
        createdAt: new Date(),
      });
      Alert.alert('Sucesso', 'Aluguel registrado com sucesso!');
      setCarName('');
      setClientName('');
      setRentalValue('');
      setRentalDate('');
      navigation.navigate('Lista de Aluguéis' as never);
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registrar Aluguel de Carro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Carro"
        value={carName}
        onChangeText={setCarName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Cliente"
        value={clientName}
        onChangeText={setClientName}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor do Aluguel"
        value={rentalValue}
        onChangeText={setRentalValue}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data do Aluguel (DD/MM/YYYY)"
        value={rentalDate}
        onChangeText={setRentalDate}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Lista de Aluguéis' as never)}>
        <Text style={styles.secondaryButtonText}>Ver Lista de Aluguéis</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});