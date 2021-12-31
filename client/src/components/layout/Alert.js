import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Create the alert component to display the alert
// alerttype: danger
export const Alert = ({ alerts }) =>
  alerts != null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  alerts: state.alert, // index.js
});

// Take mapStateToProps as the parameter
export default connect(mapStateToProps)(Alert);
