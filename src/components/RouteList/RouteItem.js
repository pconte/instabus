import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { GlobalHistory } from 'libs/routing';
import { RouteType } from 'constants/OBAPropTypes';

import styles from './styles.scss';


class RouteItem extends Component {
  static propTypes = {
    route: RouteType.isRequired,
    vehicleCount: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.showStops = () => {
      const routeId = this.props.route.id;
      GlobalHistory.push(`/route/${routeId}/stop`);
    };
  }

  render() {
    const { route, vehicleCount } = this.props;
    return (
      <div key={route.id} className={styles.item} onClick={this.showStops}>
        <div className={styles.id}>{route.shortName}</div>
        <div className={styles.info}>
          <div className={styles.name}>{route.longName}</div>
          <div className={styles.trips}>{vehicleCount} buses running</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({
  vehicleCount: 8,
});

export default connect(mapStateToProps)(RouteItem);
