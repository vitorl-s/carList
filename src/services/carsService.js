import {API} from './baseService/index';

export async function getAllCars() {
  try {
    const response = await API.get('/api/cars');
    console.log('pegou cars list', response);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error get cars', error);
  }
}
