import { FC, PropsWithChildren } from 'react';

const ErrorMessage: FC<PropsWithChildren> = (props) => (
  <div className="w-full h-full flex justify-center items-center">
    <span className="text-red-500" {...props} />
  </div>
);

export default ErrorMessage;
