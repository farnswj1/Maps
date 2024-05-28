import { FC, useState } from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { Park } from 'types';

interface ParkMarkerProps {
  park: Park;
}

const ParkMarker: FC<ParkMarkerProps> = ({ park }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [ref, marker] = useAdvancedMarkerRef();
  const { title, lat, lng } = park;
  const position = { lat, lng };

  const handleClick = () => setOpen(open => !open);
  const handleClose = () => setOpen(false);

  return (
    <AdvancedMarker
      title={title}
      position={position}
      onClick={handleClick}
      ref={ref}
    >
      <Pin borderColor="black" background="#7C3F00" glyphColor="green" />
      {
        open && (
          <InfoWindow anchor={marker} onClose={handleClose} shouldFocus>
            {title}
          </InfoWindow>
        )
      }
    </AdvancedMarker>
  );
};

export default ParkMarker;
