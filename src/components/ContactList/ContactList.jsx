import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './ContactList.Styled';
import { Headline } from 'components/Title';
import ContactItem from 'components/ContactItem';
import Filter from 'components/Filter';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log(contacts);
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
          <Headline>Contacts</Headline>
          <List>
            <Filter />
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
