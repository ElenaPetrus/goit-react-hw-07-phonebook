// import axios from 'axios';
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   getContactsRequest,
//   getContactsSuccess,
//   getContactsError,
// } from './actions';

// axios.defaults.baseURL = 'https://618a9d5f34b4f400177c47c6.mockapi.io/api/v1';

// const getContacts = () => async dispatch => {
//   dispatch(getContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');

//     dispatch(getContactsSuccess(data));
//   } catch (error) {
//     dispatch(getContactsError(error));
//   }

//   // axios
//   //   .get('/contacts')
//   //   .then(({ data }) => dispatch(getContactsSuccess(data)))
//   //   .catch(error => dispatch(getContactsError(error)));
// };

// const addContact =
//   ({ name, number }) =>
//   dispatch => {
//     const contact = {
//       name,
//       number,
//     };

//     dispatch(addContactRequest());

//     axios
//       .post('/contacts', contact)
//       .then(({ data }) => dispatch(addContactSuccess(data)))
//       .catch(error => dispatch(addContactError(error)));
//   };

// const deleteContact = contactId => dispatch => {
//   dispatch(deleteContactRequest());

//   axios
//     .delete(`/contacts/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => dispatch(deleteContactError(error)));
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   getContacts,
//   addContact,
//   deleteContact,
// };

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as ContactsAPI from '../components/services/api';

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await ContactsAPI.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contacts = await ContactsAPI.addContact(newContact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const contacts = await ContactsAPI.deleteContact(contactId);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getContacts,
  addContact,
  deleteContact,
};
