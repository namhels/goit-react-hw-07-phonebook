import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { List } from './ContactList.Styled';
import { Headline } from 'components/Title';
import ContactItem from 'components/ContactItem';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {contacts.length > 0 ? (
        <>
          {isLoading && !error && <Loader />}
          <Headline>Contacts</Headline>
          <List>
            <Filter />
            {/* {isLoading && !error && <Loader />} */}
            {getVisibleContacts().map(contact => (
              <ContactItem key={contact.id} contact={contact}></ContactItem>
            ))}
          </List>
        </>
      ) : null}
    </>
  );
};

export default ContactList;
