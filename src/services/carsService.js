import {API} from './baseService/index';

export async function getAllCars() {
  try {
    const response = await API.get('/api/cars');
    return Promise.resolve(response);
  } catch (error) {
    console.log('error get cars', error);
  }
}

export async function getCarInfo(id) {
  try {
    const response = await API.get(`/api/cars/${id}`);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error get car info', error);
  }
}

export async function createCar(info) {
  try {
    const response = await API.post('/api/cars', info);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error create car', error);
  }
}

export async function deleteCar(id) {
  try {
    const response = await API.delete(`/api/cars/${id}`);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error delete car', error);
  }
}

export async function editCar(id, info) {
  try {
    const response = await API.put(`/api/cars/${id}`, info);
    return Promise.resolve(response);
  } catch (error) {
    console.log('error edit car', error);
  }
}
