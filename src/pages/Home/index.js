import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {getAllCars, deleteCar} from '../../services/carsService';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

Icon.loadFont();

const Home = ({navigation}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadCars();
    });
    return unsubscribe;
  }, [navigation]);

  const loadCars = async () => {
    const data = await getAllCars();
    setCars(data);
  };

  const handleDeleteButton = async (id) => {
    await deleteCar(id);
    await loadCars();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de veículos</Text>
      {cars && (
        <FlatList
          keyExtractor={(item) => item._id.toString()}
          data={cars}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Register', {
                    isEditting: true,
                    carId: item._id,
                    age: item.age.toString(),
                    price: item.price,
                    brand: item.brand,
                    title: item.title,
                  });
                }}>
                <View style={styles.card}>
                  <View style={styles.leftContainer}>
                    <View>
                      <Text>Marca: {item.brand}</Text>
                      <Text>Ano: {item.age}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                      <Text>{item.title}</Text>
                      <Text>R$ {item.price}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteButton(item._id)}>
                <Icon name="trash-outline" size={30}/>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text style={styles.buttonText}>Cadastrar novo veículo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
