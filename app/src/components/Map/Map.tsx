import { forwardRef, HTMLAttributes } from 'react';

type MapProps = HTMLAttributes<HTMLDivElement>;

const Map = forwardRef<HTMLDivElement, MapProps>(
  (props, ref) => <div id="map" {...props} ref={ref} />
);

export default Map;
