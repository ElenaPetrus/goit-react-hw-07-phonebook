import axios from 'axios';

// const API_KEY = '22c199c70cf21c77ac06b5d74d444545';
// const language = 'en-US';
axios.defaults.baseURL = 'https://618a9d5f34b4f400177c47c6.mockapi.io/api/v1';

export async function getContacts() {
  const response = await axios.get(`/contacts`);
  return await response.data;
}

export const addContact = async value => {
  const { data } = await axios.post('/contacts', value);
  return data;
};

export const deleteContact = async contactId => {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
};
