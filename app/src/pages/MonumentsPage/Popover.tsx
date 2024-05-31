import { FC } from 'react';
import { Monument } from 'types';

interface PopoverProps {
  monument: Monument;
}

const Popover: FC<PopoverProps> = ({ monument }) => {
  const { name, location, date_established, area, description } = monument;
  const formattedArea = area.toLocaleString('en-US');

  return (
    <div className="max-w-[300px]">
      <div className="mb-4">
        <div className="text-base font-bold">
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
      <div>
        {description}
      </div>
    </div>
  );
};

export default Popover;
