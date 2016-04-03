import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import {
  RouteType,
} from 'constants/OBAPropTypes';
import {
  routeForStopSelector,
} from 'selectors/oba';

class StopRouteItem extends Component {
  static propTypes = {
    routeId: PropTypes.string.isRequired,
    route: RouteType,
  };

  render() {
    const { route } = this.props;
    if (!route) {
      return null;
    }
    return (
      <div>
        {route.shortName}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  route: createSelector(
    (state) => state.oba.references.routes,
    (state, props) => props.routeId,
    (routes, routeId) => routes[routeId]
  ),
});

export default connect(mapStateToProps)(StopRouteItem);
