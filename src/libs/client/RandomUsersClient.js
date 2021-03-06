import Axios from 'axios';

const randomUsersClient = Axios.create({ baseURL: 'https://randomuser.me/api' });

export const getRandomUsers = async () => {
  const response = await randomUsersClient.get('/?results=50&inc=picture,name,nat,login,location,phone,cell,email,id');
  return response;
};

export const getRandomUsersByNationality = async (gb, es, ch, fr) => {
  const response = await randomUsersClient.get(
    `/?results=50&inc=picture,name,nat,login,location,phone,cell,email,id&nat=${gb},${es},${ch},${fr}`,
  );
  return response;
};

export default randomUsersClient;
