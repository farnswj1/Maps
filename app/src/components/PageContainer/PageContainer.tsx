import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = (props) => (
  <div className="page-container" {...props} />
);

export default PageContainer;
