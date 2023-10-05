import { useState } from 'react';
import {
  Select,
  SelectHeader,
  SelectCurrent,
  SelectIcon,
  SelectBody,
  SelectItem,
} from './DropdownMenu.styled';

export const DropdownMenu = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleClick = () => {
    setIsToggleOn(prev => !prev);
  };

  return (
    <Select>
      <SelectHeader onClick={handleClick}>
        <SelectCurrent>Enter the text</SelectCurrent>
        <SelectIcon />
      </SelectHeader>

      <SelectBody>
        <SelectItem>Car 1</SelectItem>
        <SelectItem>Car 2</SelectItem>
        <SelectItem>Car 3</SelectItem>
      </SelectBody>
    </Select>
  );
};
