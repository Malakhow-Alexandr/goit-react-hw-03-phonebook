import PropTypes from 'prop-types';
import {
  ListItemStyled,
  ButtonListItem,
  ContactDesc,
} from './ContactListItem.styled';
import css from '../../index.css';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <ListItemStyled>
        <ContactDesc>{name}:</ContactDesc>
        <ContactDesc>{number}</ContactDesc>
        <ButtonListItem
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          <span>Delete</span>
        </ButtonListItem>
      </ListItemStyled>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
