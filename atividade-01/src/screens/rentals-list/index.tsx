import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebaseConfig';

interface Rental {
  id: string;
  carName: string;
  clientName: string;
  rentalValue: number;
  rentalDate: string;
}

export function ListScreen() {
  const [carro, setCarro] = useState<Rental[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchCarro();
  }, []);

  const fetchCarro = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'carro'));
      const carroData: Rental[] = [];
      querySnapshot.forEach((doc) => {
        carroData.push({ id: doc.id, ...doc.data() } as Rental);
      });
      setCarro(carroData);
    } catch (error: any) {
      console.error('Erro ao buscar aluguéis:', error);
    }
  };

  const renderItem = ({ item }: { item: Rental }) => (
    <View style={styles.item}>
      <Text style={styles.carName}>{item.carName || ''}</Text>
      <Text>Cliente: {item.clientName || ''}</Text>
      <Text>Valor: R$ {(item.rentalValue ?? 0).toFixed(2)}</Text>
      <Text>Data: {item.rentalDate || ''}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Aluguéis</Text>
      <FlatList
        data={carro}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum aluguel registrado ainda.</Text>}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro de Aluguel' as never)}>
        <Text style={styles.buttonText}>Registrar Novo Aluguel</Text>
      </TouchableOpacity>
    </View>
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
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});