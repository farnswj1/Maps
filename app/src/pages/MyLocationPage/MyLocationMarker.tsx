import { FC, useState } from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import Popover from './Popover';

interface MyLocationMarkerProps {
  coords: GeolocationCoordinates;
}

const MyLocationMarker: FC<MyLocationMarkerProps> = ({ coords }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [ref, marker] = useAdvancedMarkerRef();
  const { latitude, longitude } = coords;
  const position = { lat: latitude, lng: longitude };

  const handleClick = () => setOpen(open => !open);
  const handleClose = () => setOpen(false);

  return (
    <AdvancedMarker
      position={position}
      onClick={handleClick}
      ref={ref}
    >
      <Pin />
      {
        open && (
          <InfoWindow anchor={marker} onClose={handleClose} shouldFocus>
            <Popover coords={coords} />
          </InfoWindow>
        )
      }
    </AdvancedMarker>
  );
};

export default MyLocationMarker;
