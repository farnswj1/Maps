import { FC, PropsWithChildren } from 'react';
import { APIProvider, APIProviderProps } from '@vis.gl/react-google-maps';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

type MapContainerProps = Omit<APIProviderProps, 'apiKey'> & PropsWithChildren;

const MapContainer: FC<MapContainerProps> = (props) => (
  <APIProvider apiKey={VITE_GOOGLE_MAPS_API_KEY} {...props} />
);

export default MapContainer;
