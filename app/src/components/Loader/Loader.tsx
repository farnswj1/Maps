import { ReactElement } from 'react';
import { Status } from '@googlemaps/react-wrapper';
import { Spinner } from 'components';

const Loader = (status: Status): ReactElement => (
  <div className="loading-container">
    {
      status === Status.FAILURE
        ? <span className="color-error">Failed to load map!</span>
        : <Spinner />
    }
  </div>
);

export default Loader;
