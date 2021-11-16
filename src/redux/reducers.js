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
import operations from './operations';
import { filterContact } from './actions';

const items = createReducer([], {
  [operations.getContacts.fulfilled]: (_, { payload }) => payload,
  [operations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [operations.getContacts.pending]: () => true,
  [operations.getContacts.fulfilled]: () => false,
  [operations.getContacts.rejected]: () => false,
  [operations.addContact.pending]: () => true,
  [operations.addContact.fulfilled]: () => false,
  [operations.addContact.rejected]: () => false,
  [operations.deleteContact.pending]: () => true,
  [operations.deleteContact.fulfilled]: () => false,
  [operations.deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [filterContact]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [operations.getContacts.rejected]: (_, action) => action.payload,
  [operations.getContacts.pending]: () => null,
});

const rootReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default rootReducer;
