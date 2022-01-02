import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Receive component
// Operation 1: Find the component property defined on props (Note: lowercase component) and assign it to a new location in state we call Component (Note: capital Component).
// Operation 2: Then, take all remaining properties defined on the props object and collect them inside an argument called rest.
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
  //   if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;

  return <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
