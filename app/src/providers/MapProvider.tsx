import { FC, PropsWithChildren } from 'react';
import { APIProvider, APIProviderProps } from '@vis.gl/react-google-maps';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

type MapProviderProps = Omit<APIProviderProps, 'apiKey'> & PropsWithChildren;

const MapProvider: FC<MapProviderProps> = (props) => (
  <APIProvider apiKey={VITE_GOOGLE_MAPS_API_KEY} {...props} />
);

export default MapProvider;
