const initialStateLoading = {
  randomUsers: {
    users: [
      {
        name: {
          title: 'mr',
          first: 'brad',
          last: 'gibson',
        },
        location: {
          street: { name: '9278 new road' },
          city: 'kilcoole',
          state: 'waterford',
          postcode: '93027',
        },
        email: 'qwerty@example.com',
        login: {
          uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
          username: 'silverswan131',
        },
        phone: '011-962-7516',
        cell: '081-454-0666',
        id: {
          name: 'PPS',
          value: '0390511T',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/75.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
        },
        nat: 'ES',
      },
    ],
    loading: true,
    scrolling: false,
  },
};

export default initialStateLoading;
