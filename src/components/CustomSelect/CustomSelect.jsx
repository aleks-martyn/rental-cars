import { useState } from 'react';
import { createPortal } from 'react-dom';
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
  Overlay,
} from './CustomSelect.styled';

const selectBodyRoot = document.getElementById('select-body-root');

export const CustomSelect = ({ title, text, items }) => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [currentValue, setCurrentValue] = useState(text);
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const topSelect = top + height + 4;

  return (
    <SelectWrap id={title}>
      <Subtitle>{title}</Subtitle>

      <Select
        onClick={e => {
          setLeft(e.currentTarget.offsetLeft);
          setTop(e.currentTarget.offsetTop);
          setWidth(e.currentTarget.offsetWidth);
          setHeight(e.currentTarget.offsetHeight);
        }}
      >
        <SelectHeader
          onClick={() => {
            setIsToggleOn(prev => !prev);
          }}
        >
          <SelectCurrent>{currentValue}</SelectCurrent>
          {isToggleOn ? <SelectArrowUpIcon /> : <SelectArrowDownIcon />}
        </SelectHeader>

        {createPortal(
          <Overlay
            isToggleOn={isToggleOn.toString()}
            onClick={event => {
              if (event.currentTarget === event.target) setIsToggleOn(false);
            }}
          >
            <SelectBody left={left} top={topSelect} width={width}>
              {items.map(item => (
                <SelectItem
                  key={item}
                  tabIndex={1}
                  currentValue={currentValue}
                  item={item}
                  onClick={e => {
                    setCurrentValue(e.target.textContent);
                    setIsToggleOn(false);
                  }}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectBody>
          </Overlay>,
          selectBodyRoot
        )}
      </Select>
    </SelectWrap>
  );
};