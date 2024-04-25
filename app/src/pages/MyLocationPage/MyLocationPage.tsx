import { FC } from 'react';
import { MapContainer, PageContainer } from 'components';
import MyLocationMap from './MyLocationMap';

const MyLocationPage: FC = () => (
  <PageContainer>
    <MapContainer>
      <MyLocationMap />
    </MapContainer>
  </PageContainer>
);

export default MyLocationPage;
