import { FC, PropsWithChildren } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { Loader } from 'components';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

const MapContainer: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper apiKey={VITE_GOOGLE_MAPS_API_KEY} render={Loader}>
    {children}
  </Wrapper>
);

export default MapContainer;
