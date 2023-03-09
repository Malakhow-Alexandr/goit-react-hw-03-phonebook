import PropTypes from 'prop-types';
import {
  ListItemStyled,
  ButtonListItem,
  ContactDesc,
} from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <>
      <ListItemStyled>
        <ButtonListItem
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          <span>Delete</span>
        </ButtonListItem>
        <ContactDesc className="pidar">{number}</ContactDesc>
        <ContactDesc>{name} :</ContactDesc>
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
