import { FC, useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server';
import { MarkerManager } from '@googlemaps/markermanager';
import { Map } from 'components';
import { MONUMENTS } from 'data';
import Popover from './Popover';

const MonumentsMap: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const options: google.maps.MapOptions = {
        mapId: "us-monuments-map",
        center: { lat: 37, lng: -135 },
        zoom: 3
      };
      const map = new google.maps.Map(ref.current, options);
      const manager = new MarkerManager(map, {});
      const listeners: google.maps.MapsEventListener[] = [];

      google.maps.event.addListener(manager, 'loaded', async () => {
        const { AdvancedMarkerElement, PinElement } = (
          await google.maps.importLibrary('marker') as google.maps.MarkerLibrary
        );
        const infoWindow = new google.maps.InfoWindow();

        MONUMENTS.forEach((monument) => {
          const { name, latitude, longitude } = monument;
          const position = { lat: latitude, lng: longitude };
          const pin = new PinElement({
            borderColor: 'black',
            background: 'gold',
            glyphColor: 'black'
          });
          const marker = new AdvancedMarkerElement({
            map,
            title: name,
            position,
            content: pin.element
          });

          const listener = marker.addListener('click', () => {
            infoWindow.close();
            infoWindow.setContent(renderToString(<Popover monument={monument} />));
            infoWindow.open(marker.map, marker);
          });

          listeners.push(listener);
        });

        manager.refresh();
      });

      return () => listeners.forEach(listener => (
        google.maps.event.removeListener(listener)
      ));
    }
  }, [ref]);

  return <Map ref={ref} />;
};

export default MonumentsMap;
