import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createAccount} from '../../actions/auth';
import {getIsCreatingAccount, getCreateAccountFailed, getCreateAccountError} from '../../reducers';

class RegistrationForm extends Component {
  state = {
    emailValue: '',
    passwordValue: ''
  };

  updateEmailValue(value) {
    this.setState({emailValue: value});
  }

  updatePasswordValue(value) {
    this.setState({passwordValue: value});
  }

  render() {
    if(this.props.isCreatingAccount) {
      return (<p>Creating account...</p>);
    }

    let errorNotice = null;
    if(this.props.createAccountFailed) {
      const error = this.props.createAccountError;
      errorNotice = (<p>{`${error}`}</p>);
    }

    return (
      <div className="RegistrationForm">
        {errorNotice}
        <p>
          <input 
            onChange={(e) => this.updateEmailValue(e.target.value)}
            value={this.state.emailValue}
            type="email"
            placeholder="email"
          />
        </p>
        <p>
          <input
            onChange={(e) => this.updatePasswordValue(e.target.value)}
            value={this.state.passwordValue}
            type="password"
            placeholder="password"
          />
        </p>
        <p>
          <button onClick={() => this.props.onSignupClicked(this.state.emailValue, this.state.passwordValue)}>Sign Up</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCreatingAccount: getIsCreatingAccount(state),
    createAccountFailed: getCreateAccountFailed(state),
    createAccountError: getCreateAccountError(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSignupClicked: (email, password) => dispatch(createAccount(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
