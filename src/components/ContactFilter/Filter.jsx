import React from 'react';
import PropTypes from 'prop-types';
import {
  FilterStyledLabel,
  FilterStyledInput,
  FilterLabel,
} from './Filter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <FilterStyledLabel>
      <FilterStyledInput type="text" value={value} onChange={onChange} />
      <FilterLabel>Filter by name</FilterLabel>
    </FilterStyledLabel>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
