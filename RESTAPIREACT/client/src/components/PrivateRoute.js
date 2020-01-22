import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

const PrivateRoute = ({children,isAuth, ...rest }) => {
    console.log(isAuth)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          isAuth.userName? (
            children
          ) : (
            <Redirect
              to="/login"
            />
          )
        }
      />
    );
  }

const mapStateToProps = (state) => {
    return {isAuth: state.auth}
}

export default connect(mapStateToProps)(PrivateRoute);