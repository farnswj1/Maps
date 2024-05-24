import { FC, useState } from 'react';
import { Map, PageContainer, Spinner } from 'components';
import { MapProvider } from 'providers';
import { PARKS } from 'data';
import ParkMarker from './ParkMarker';

const ParksPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <PageContainer>
      <MapProvider onLoad={() => setLoading(false)}>
        {
          loading ? (
            <Spinner />
          ) : (
            <Map
              mapId="us-parks-map"
              defaultCenter={{ lat: 37.0902, lng: -95.7129 }}
              defaultZoom={3}
            >
              {
                PARKS.map(park => (
                  <ParkMarker key={park.title} park={park} />
                ))
              }
            </Map>
          )
        }
      </MapProvider>
    </PageContainer>
  );
};

export default ParksPage;
