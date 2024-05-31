import { FC, PropsWithChildren } from 'react';
import {
  Map as GoogleMap,
  MapProps as GoogleMapProps
} from '@vis.gl/react-google-maps';

type MapProps = GoogleMapProps & PropsWithChildren;

const Map: FC<MapProps> = (props) => (
  <GoogleMap className="h-full m-0" {...props} />
);

export default Map;
