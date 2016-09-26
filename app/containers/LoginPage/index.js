/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

import {
  changeUsername,
  changeUserpassword,
} from './actions';

import { loadUser } from '../App/actions';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  render() {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginFormWrapper}>
          <form action="/login" method="post" onSubmit={this.props.onSubmitForm}>
            <div className={styles.loginHeader}>
              <p><FormattedMessage {...messages.header} /></p>
              <p><FormattedMessage {...messages.subheader} /></p>
            </div>
            <div className={styles.loginForm}>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="userEmail">Email address:</label>
                <input className={styles.input} id="userEmail" type="email" onChange={this.props.onChangeUsername}/>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="userPassword">Password:</label>
                <input className={styles.input} id="userPassword" type="password" onChange={this.props.onChangeUserpassword}/>
              </div>
              <button className={styles.button} type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSubmitForm: React.PropTypes.func,
  onChangeUsername: React.PropTypes.func,
  onChangeUserpassword: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangeUserpassword: (evt) => dispatch(changeUserpassword(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadUser());
    },
    
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
