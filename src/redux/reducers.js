// import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   filterContact,
//   getContactsRequest,
//   getContactsSuccess,
//   getContactsError,
// } from './actions';

// const items = createReducer([], {
//   [getContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const loading = createReducer(false, {
//   [getContactsRequest]: () => true,
//   [getContactsSuccess]: () => false,
//   [getContactsError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

// const filter = createReducer('', {
//   [filterContact]: (_, action) => action.payload,
// });

// const error = createReducer(null, {});

// const rootReducer = combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });

// export default rootReducer;

import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  filterContact,
} from './operations';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [filterContact]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [getContacts.rejected]: (_, action) => action.payload,
  [getContacts.pending]: () => null,
});

const rootReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default rootReducer;
