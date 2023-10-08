import { useState } from 'react';
import {
  StyledSection,
  Wrap,
  Subtitle,
  Select,
  SelectHeader,
  SelectCurrent,
  SelectArrowDownIcon,
  SelectArrowUpIcon,
  SelectBody,
  SelectItem,
} from './DropdownMenu.styled';

export const DropdownMenu = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [currentValue, setCurrentValue] = useState('Enter the text');

  const handleClick = () => {
    setIsToggleOn(prev => !prev);
  };

  const brands = [{ name: 'Audi' }, { name: 'Volvo' }, { name: 'Buick' }];

  return (
    <StyledSection>
      <Wrap>
        <Subtitle>Car brand</Subtitle>

        <Select>
          <SelectHeader onClick={handleClick}>
            <SelectCurrent>{currentValue}</SelectCurrent>
            {isToggleOn ? <SelectArrowUpIcon /> : <SelectArrowDownIcon />}
          </SelectHeader>

          <SelectBody isToggleOn={isToggleOn.toString()}>
            {brands.map(({ name }) => (
              <SelectItem
                key={name}
                tabIndex={1}
                currentValue={currentValue}
                name={name}
                onFocus={e => {
                  setCurrentValue(e.target.textContent);
                  setIsToggleOn(false);
                }}
              >
                {name}
              </SelectItem>
            ))}
          </SelectBody>
        </Select>
      </Wrap>
    </StyledSection>
  );
};
