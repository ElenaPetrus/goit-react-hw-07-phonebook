import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from './actions';

axios.defaults.baseURL = 'https://618a9d5f34b4f400177c47c6.mockapi.io/api/v1';

const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(getContactsSuccess(data)))
  //   .catch(error => dispatch(getContactsError(error)));
};

const addContact = (name, number, id) => dispatch => {
  const Contact = {
    name,
    number,
    id,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', Contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContacts,
  addContact,
  deleteContact,
};
