import { createSelector } from 'reselect';

const selectLoginPageDomain = () => (state) => state.get('loginPage');

const selectUsername = () => createSelector(
  selectLoginPageDomain(),
  (LoginPageDomainState) => LoginPageDomainState.get('username')
);

const selectUserpassword = () => createSelector(
  selectLoginPageDomain(),
  (LoginPageDomainState) => LoginPageDomainState.get('userpassword')
);

export {
  selectLoginPageDomain,
  selectUsername,
  selectUserpassword,
};
