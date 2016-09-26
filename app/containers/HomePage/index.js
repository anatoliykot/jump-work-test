/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';

import {
  selectUserData,
} from 'containers/App/selectors';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.userData, null, 2) }</pre>
      </div>
    );
  }
}

HomePage.propTypes = {
  userData: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
};

const mapStateToProps = createStructuredSelector({
  userData: selectUserData(),
});

export default connect(mapStateToProps)(HomePage);
