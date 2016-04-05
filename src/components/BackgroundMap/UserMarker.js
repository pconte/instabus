import { Marker } from 'react-leaflet';
import { marker, DivIcon } from 'leaflet';

import styles from './styles.scss';

export default class UserMarker extends Marker {
  componentWillMount() {
    this.leafletElement = marker(this.props.position, {
      ...this.props,
      icon: new DivIcon({
        className: styles.user,
        iconSize: [24, 24],
        html: `<div class="${styles.userPulse}"></div><div class="${styles.userDot}"></div>`,
      }),
    });
  }
}
