import { FC } from 'react';
import { MapContainer, PageContainer } from 'components';
import MonumentsMap from './MonumentsMap';

const MonumentsPage: FC = () => (
  <PageContainer>
    <MapContainer>
      <MonumentsMap />
    </MapContainer>
  </PageContainer>
);

export default MonumentsPage;
