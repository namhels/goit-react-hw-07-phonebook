import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FindIcon, Input } from './Filter.Styled';
import Box from 'components/Box';
import { changeFilter } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleChange = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter({ value }));
  };

  return (
    <>
      {contacts.length > 1 ? (
        <Box position="relative" display="flex" width="70%">
          <Input
            type="text"
            value={filter}
            onChange={handleChange}
            placeholder="Find contacts by name"
          />
          <FindIcon />
        </Box>
      ) : null}
    </>
  );
};

export default Filter;
