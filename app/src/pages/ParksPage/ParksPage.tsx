import { FC, useState } from 'react';
import { Map, MapContainer, PageContainer, Spinner } from 'components';
import { PARKS } from 'data';
import ParkMarker from './ParkMarker';

const ParksPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <PageContainer>
      <MapContainer onLoad={() => setLoading(false)}>
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
      </MapContainer>
    </PageContainer>
  );
};

export default ParksPage;
