import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import formAction from '../actions/FormActions'

class Form extends Component {
  renderInput = (type, value, name, setName ) => (
    <input
    type={ type }
    value={ value }
    name={ name }
    onChange={ setName }
    required
    />
  )

  render() {
    const { name, email, CPF, setName } = this.props;
    return (
      <Fragment>
        <form>
          { this.renderInput('text', name, 'name', setName) }
          { this.renderInput('text', email, 'email', setName) }
          { this.renderInput('text', CPF, 'cpf', setName) }
          <button type='submit'>Enviar</button>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.formReducer.name,
  email: state.formReducer.email,
  CPF: state.formReducer.CPF,
});

const mapDispatchToProps = (dispatch) => ({
  setName: ({ target: { value, name } }) => dispatch(
    formAction(value, name),
  ),
});

export default connect (mapStateToProps, mapDispatchToProps)(Form);