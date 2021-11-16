import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.loading;

export const getFilter = state => state.filter;

export const getAllContacts = state => state.items;

export const getTotalContactsCount = state => {
  const contacts = getAllContacts(state);

  return contacts.length;
};

//мемоизация//
export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase().trim()) ||
        number.includes(filter.trim()),
    );
  },
);
