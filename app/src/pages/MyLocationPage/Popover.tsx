import { FC } from 'react';

interface PopoverProps {
  coords: GeolocationCoordinates;
}

const Popover: FC<PopoverProps> = ({ coords }) => {
  const { latitude, longitude, altitude, accuracy, altitudeAccuracy } = coords;
  const formattedAccuracy = Math.round(accuracy).toLocaleString('en-US');
  let formattedAltitude: string | null = null;
  let formattedAltitudeAccuracy: string | null = null;

  if (altitude) {
    formattedAltitude = Math.round(altitude).toLocaleString('en-US');
  }

  if (altitudeAccuracy) {
    formattedAltitudeAccuracy = Math.round(altitudeAccuracy).toLocaleString('en-US');
  }

  return (
    <div className="pin-popover">
      <div className="header">
        <div className="title">
          <b>My Location</b>
        </div>
      </div>
      <div className="body">
        <div>
          <span>Latitude: {latitude}</span>
        </div>
        <div>
          <span>Longitude: {longitude}</span>
        </div>
        <div>
          <span>Accuracy: {formattedAccuracy} m</span>
        </div>
        {
          (formattedAltitude && formattedAltitudeAccuracy) && ([
            <div key={0}>
              <span>Altitude: {formattedAltitude} m</span>
            </div>,
            <div key={1}>
              <span>Altitude Accuracy: {formattedAltitudeAccuracy} m</span>
            </div>
          ])
        }
      </div>
    </div>
  )
};

export default Popover;
