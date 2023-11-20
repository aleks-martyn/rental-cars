import { useState, useEffect } from 'react';
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

export const CustomSelect = ({
  title,
  id,
  items,
  onValueChange,
  currentValue,
}) => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [left, setLeft] = useState(null);
  const [top, setTop] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const leftSelect = left - scrollX;
  const topSelect = top + height + 4 - scrollY;

  useEffect(() => {
    const handleScroll = () => {
      setIsToggleOn(false);
    };
    if (isToggleOn) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isToggleOn]);

  return (
    <SelectWrap id={id}>
      <Subtitle>{title}</Subtitle>

      <Select
        onClick={e => {
          setLeft(e.currentTarget.offsetLeft);
          setTop(e.currentTarget.offsetTop);
          setWidth(e.currentTarget.offsetWidth);
          setHeight(e.currentTarget.offsetHeight);
          setScrollX(window.scrollX);
          setScrollY(window.scrollY);
        }}
      >
        <SelectHeader
          onClick={() => {
            setIsToggleOn(prev => !prev);
          }}
          tabIndex={0}
        >
          <SelectCurrent>{currentValue}</SelectCurrent>
          {isToggleOn ? <SelectArrowUpIcon /> : <SelectArrowDownIcon />}
        </SelectHeader>

        {createPortal(
          <Overlay
            isToggleOn={isToggleOn.toString()}
            onClick={e => {
              if (e.currentTarget === e.target) setIsToggleOn(false);
            }}
          >
            <SelectBody left={leftSelect} top={topSelect} width={width}>
              {items?.map(item => (
                <SelectItem
                  key={item}
                  tabIndex={0}
                  currentValue={currentValue}
                  item={item}
                  onClick={e => {
                    const { textContent } = e.target;
                    onValueChange(id, textContent);
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
