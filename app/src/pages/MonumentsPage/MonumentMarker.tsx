import { FC, useState } from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { Monument } from 'types';
import Popover from './Popover';

interface MonumentMarkerProps {
  monument: Monument;
}

const MonumentMarker: FC<MonumentMarkerProps> = ({ monument }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [ref, marker] = useAdvancedMarkerRef();
  const { name, latitude, longitude } = monument;
  const position = { lat: latitude, lng: longitude };

  const handleClick = () => setOpen(open => !open);
  const handleClose = () => setOpen(false);

  return (
    <AdvancedMarker
      title={name}
      position={position}
      onClick={handleClick}
      ref={ref}
    >
      <Pin borderColor="black" background="gold" glyphColor="black" />
      {
        open && (
          <InfoWindow anchor={marker} onClose={handleClose} shouldFocus>
            <Popover monument={monument} />
          </InfoWindow>
        )
      }
    </AdvancedMarker>
  );
};

export default MonumentMarker;
