import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';
import { List } from './ContactList.Styled';
import { Headline } from 'components/Title';
import ContactItem from 'components/ContactItem';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      {contacts.length > 0 ? (
        <>
          <Headline>Contacts</Headline>
          <List>
            <Filter />
            {visibleContacts.map(contact => (
              <ContactItem key={contact.id} contact={contact}></ContactItem>
            ))}
          </List>
        </>
      ) : null}
    </>
  );
};

export default ContactList;
