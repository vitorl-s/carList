import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import {createCar, editCar} from '../../services/carsService';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const RegisterCar = ({route, navigation}) => {
  const carId = route.params && route.params.carId;
  const isEditting = route.params && route.params.isEditting;
  const [brand, setBrand] = useState('');
  const [age, setAge] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');

  const handleButtonPress = async () => {
    const data = {
      brand,
      age,
      price,
      title,
    };

    if (isEditting) {
      await editCar(carId, data);
    } else {
      await createCar(data);
    }
    navigation.navigate('Home');
  };

  useEffect(() => {
    const {params} = route;
    if (params) {
      setAge(params.age);
      setBrand(params.brand);
      setPrice(params.price);
      setTitle(params.title);
    }
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <Text style={styles.title}>RegisterCar</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do veículo</Text>
          <TextInput
            value={title}
            underlineColorAndroid="black"
            onChangeText={(value) => setTitle(value)}
            style={styles.input}
            placeholder="Nome do veículo"
            placeholderTextColor="black"
          />
          <Text style={styles.label}>Valor</Text>
          <TextInput
            placeholderTextColor="black"
            underlineColorAndroid="black"
            value={price}
            keyboardType="decimal-pad"
            onChangeText={(value) => setPrice(value)}
            style={styles.input}
            placeholder="Valor"
          />
          <Text style={styles.label}>Ano</Text>
          <TextInput
            placeholderTextColor="black"
            underlineColorAndroid="black"
            value={age}
            keyboardType="decimal-pad"
            placeholder="Ano"
            onChangeText={(value) => setAge(value)}
            style={styles.input}
          />
          <Text style={styles.label}>Marca</Text>
          <TextInput
            placeholderTextColor="black"
            underlineColorAndroid="black"
            value={brand}
            placeholder="Marca"
            onChangeText={(value) => setBrand(value)}
            style={styles.input}
          />
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterCar;
