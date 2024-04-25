import { FC } from 'react';

interface PopoverProps {
  coords: GeolocationCoordinates;
}

const Popover: FC<PopoverProps> = ({ coords }) => {
  const { latitude, longitude, altitude, accuracy, altitudeAccuracy } = coords;

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
          <span>Accuracy: {accuracy}</span>
        </div>
        {
          altitude && altitudeAccuracy && ([
            <div key={0}>
              <span>Altitude: {altitude}m</span>
            </div>,
            <div key={1}>
              <span>Altitude: {altitudeAccuracy}m</span>
            </div>
          ])
        }
      </div>
    </div>
  )
};

export default Popover;
