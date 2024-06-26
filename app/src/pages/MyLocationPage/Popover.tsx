import { FC } from 'react';

interface PopoverProps {
  coords: GeolocationCoordinates;
}

const LOCALE = 'en-US';

const Popover: FC<PopoverProps> = ({ coords }) => {
  const { latitude, longitude, altitude, accuracy, altitudeAccuracy } = coords;
  const formattedAccuracy = Math.round(accuracy).toLocaleString(LOCALE);
  let formattedAltitude: string | null = null;
  let formattedAltitudeAccuracy: string | null = null;

  if (altitude) {
    formattedAltitude = Math.round(altitude).toLocaleString(LOCALE);
  }

  if (altitudeAccuracy) {
    formattedAltitudeAccuracy = Math.round(altitudeAccuracy).toLocaleString(LOCALE);
  }

  return (
    <div className="max-w-[300px]">
      <div className="mb-4">
        <div className="text-base font-bold">
          <b>My Location</b>
        </div>
      </div>
      <div>
        <div>
          <span>Latitude: {latitude}</span>
        </div>
        <div>
          <span>Longitude: {longitude}</span>
        </div>
        <div>
          <span>Accuracy: {formattedAccuracy}m</span>
        </div>
        {
          (formattedAltitude && formattedAltitudeAccuracy) && ([
            <div key={0}>
              <span>Altitude: {formattedAltitude}m</span>
            </div>,
            <div key={1}>
              <span>Altitude Accuracy: {formattedAltitudeAccuracy}m</span>
            </div>
          ])
        }
      </div>
    </div>
  );
};

export default Popover;
