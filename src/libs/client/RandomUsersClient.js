import Axios from 'axios';

const randomUsersClient = Axios.create({ baseURL: 'https://randomuser.me/api' });

export const getRandomUsers = async page => {
  const response = await randomUsersClient.get(`/?page=${page}&results=50&inc=picture,name,nat,login,location,phone,cell,email`);
  return response;
};

export default randomUsersClient;
