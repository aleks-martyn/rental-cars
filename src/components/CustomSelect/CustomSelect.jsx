import { useState } from 'react';
import {
  SelectWrap,
  Subtitle,
  Select,
  SelectHeader,
  SelectCurrent,
  SelectArrowDownIcon,
  SelectArrowUpIcon,
  SelectBody,
  SelectItem,
} from './CustomSelect.styled';

export const CustomSelect = ({ title, text, items }) => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [currentValue, setCurrentValue] = useState(text);

  return (
    <SelectWrap>
      <Subtitle>{title}</Subtitle>

      <Select>
        <SelectHeader
          onClick={() => {
            setIsToggleOn(prev => !prev);
          }}
        >
          <SelectCurrent>{currentValue}</SelectCurrent>
          {isToggleOn ? <SelectArrowUpIcon /> : <SelectArrowDownIcon />}
        </SelectHeader>

        <SelectBody isToggleOn={isToggleOn.toString()}>
          {items.map(item => (
            <SelectItem
              key={item}
              tabIndex={1}
              currentValue={currentValue}
              item={item}
              onFocus={e => {
                setCurrentValue(e.target.textContent);
                setIsToggleOn(false);
              }}
            >
              {item}
            </SelectItem>
          ))}
        </SelectBody>
      </Select>
    </SelectWrap>
  );
};
