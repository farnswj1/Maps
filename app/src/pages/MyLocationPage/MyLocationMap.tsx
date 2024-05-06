import { FC, useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server';
import { MarkerManager } from '@googlemaps/markermanager';
import { Map } from 'components';
import Popover from './Popover';

const MyLocationMap: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const current = ref.current;
      const listeners: google.maps.MapsEventListener[] = [];

      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        const { latitude, longitude } = coords;
        const location = { lat: latitude, lng: longitude };
        const options: google.maps.MapOptions = {
          mapId: "my-location-map",
          center: location,
          zoom: 16
        };
        const map = new google.maps.Map(current, options);
        const manager = new MarkerManager(map, {});

        google.maps.event.addListener(manager, 'loaded', async () => {
          const { AdvancedMarkerElement } = (
            await google.maps.importLibrary('marker') as google.maps.MarkerLibrary
          );
          const infoWindow = new google.maps.InfoWindow();
          const marker = new AdvancedMarkerElement({ map, position: location });

          const listener = marker.addListener('click', () => {
            infoWindow.close();
            infoWindow.setContent(renderToString(<Popover coords={coords} />));
            infoWindow.open(marker.map, marker);
          });

          listeners.push(listener);
          manager.refresh();
        });
      });

      return () => listeners.forEach(listener => (
        google.maps.event.removeListener(listener)
      ));
    }
  }, [ref]);

  return <Map ref={ref} />;
};

export default MyLocationMap;
