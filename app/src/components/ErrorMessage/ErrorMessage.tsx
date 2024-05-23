import { FC, PropsWithChildren } from 'react';

const ErrorMessage: FC<PropsWithChildren> = (props) => (
  <div className="loading-container">
    <span className="color-error" {...props} />
  </div>
);

export default ErrorMessage;
