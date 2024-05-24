import { FC, useEffect, useState } from 'react';
import { ErrorMessage, Map, PageContainer, Spinner } from 'components';
import { MapProvider } from 'providers';
import MyLocationMarker from './MyLocationMarker';

const MyLocationPage: FC = () => {
  const [coordinates, setCoordinates] = useState<GeolocationCoordinates | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setCoordinates(coords),
      (error) => {
        setError(error);
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 30000 }
    );
  }, []);

  return (
    <PageContainer>
      {loading && <Spinner />}
      {
        error && (
          <ErrorMessage>
            Failed to load map: {error.message}
          </ErrorMessage>
        )
      }
      {
        coordinates && (
          <MapProvider onLoad={() => setLoading(false)}>
            <Map
              mapId="my-location-map"
              defaultCenter={{
                lat: coordinates.latitude,
                lng: coordinates.longitude
              }}
              defaultZoom={16}
            >
              <MyLocationMarker coords={coordinates} />
            </Map>
          </MapProvider>
        )
      }
    </PageContainer>
  );
};

export default MyLocationPage;
