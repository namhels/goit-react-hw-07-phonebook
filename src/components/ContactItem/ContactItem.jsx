import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/operations';
import { Button, ContactData, Item } from './ContactItem.Styled';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
    toast.warn(`${name} was deleted from contacts`);
  };

  return (
    <Item>
      <ContactData>
        <p>{name}:</p>
        <p>{number}</p>
      </ContactData>
      <Button type="button" onClick={onDeleteContact}>
        delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
