import { FC } from 'react';
import { Monument } from 'types';

interface PopoverProps {
  monument: Monument;
}

const Popover: FC<PopoverProps> = ({ monument }) => {
  const { name, location, date_established, area, description } = monument;
  const formattedArea = area.toLocaleString('en-US');

  return (
    <div className="pin-popover">
      <div className="header">
        <div className="title">
          <b>{name}</b>
        </div>
        <div>
          <span>{date_established}</span>
        </div>
        <div>
          <span>{location}</span>
        </div>
        <div>
          <span>{formattedArea} acres</span>
        </div>
      </div>
      <div className="body">
        {description}
      </div>
    </div>
  )
};

export default Popover;
