import { FC, useState } from 'react';
import { Map, MapContainer, PageContainer, Spinner } from 'components';
import { MONUMENTS } from 'data';
import MonumentMarker from './MonumentMarker';

const MonumentsPage: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <PageContainer>
      <MapContainer onLoad={() => setLoading(false)}>
        {
          loading ? (
            <Spinner />
          ) : (
            <Map
              mapId="us-monuments-map"
              defaultCenter={{ lat: 37, lng: -135 }}
              defaultZoom={3}
            >
              {
                MONUMENTS.map(monument => (
                  <MonumentMarker
                    key={monument.name}
                    monument={monument}
                  />
                ))
              }
            </Map>
          )
        }
      </MapContainer>
    </PageContainer>
  );
};

export default MonumentsPage;
