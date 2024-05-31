import { FC, PropsWithChildren } from 'react';

const PageContainer: FC<PropsWithChildren> = (props) => (
  <div className="w-full h-[calc(100vh-60px)]" {...props} />
);

export default PageContainer;
