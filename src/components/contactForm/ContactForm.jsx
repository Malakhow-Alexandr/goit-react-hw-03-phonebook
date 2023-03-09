import { Component } from 'react';

import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  StyledForm,
  Label,
  StyledErrorMessage,
  StyledField,
  Button,
  StyledLabel,
} from './ContactForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export class ContactForm extends Component {
  state = {
    initialValues: {
      name: '',
      number: '',
    },
  };

  handleSubmit = (values, { resetForm }) => {
    resetForm();

    this.props.onSubmit(values.name, values.number);
  };

  render() {
    return (
      <Formik
        validationSchema={validationSchema}
        initialValues={this.state.initialValues}
        onSubmit={this.handleSubmit}
      >
        <StyledForm>
          <Label>
            <StyledField type="text" name="name" />
            <StyledLabel>Name</StyledLabel>
            <ErrorMessage component={StyledErrorMessage} name="name" />
          </Label>

          <Label>
            <StyledField type="tell" name="number" />
            <StyledLabel>Number</StyledLabel>
            <ErrorMessage component={StyledErrorMessage} name="number" />
          </Label>

          <Button type="submit" disabled={this.buttonDisabled}>
            Add Contact
          </Button>
        </StyledForm>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
