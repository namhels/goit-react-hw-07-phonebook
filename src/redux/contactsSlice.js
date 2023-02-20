import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {
  fetchContacts,
  addContact,
  deleteContact,
  // toggleCompleted,
} from 'redux/operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  //   reducers: {
  //     addContact: {
  //       reducer(state, action) {
  //         state.items.unshift(action.payload);
  //         // state.contacts = [action.payload, ...state.contacts];
  //       },
  //       prepare(name, number) {
  //         return {
  //           payload: {
  //             id: nanoid(),
  //             name,
  //             number,
  //           },
  //         };
  //       },
  //     },
  //     deleteContact(state, action) {
  //       state.items = state.items.filter(
  //         contact => contact.id !== action.payload.id
  //       );
  //     },
  //   },
  // });
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: {
      reducer(state, action) {
        state.items.unshift(action.payload);
        // state.items = [action.payload, ...state.items];
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    //   (state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      // const index = state.items.findIndex(
      //   task => task.id === action.payload.id
      // );
      // state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    // [toggleCompleted.pending]: handlePending,
    // [toggleCompleted.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     task => task.id === action.payload.id
    //   );
    //   state.items.splice(index, 1, action.payload);
    // },
    // [toggleCompleted.rejected]: handleRejected,
  },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
