import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className="page-container">
    {children}
  </div>
);

export default PageContainer;
