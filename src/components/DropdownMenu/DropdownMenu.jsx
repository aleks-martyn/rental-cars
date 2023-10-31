import { CustomSelect } from 'components/CustomSelect';
import { prices } from 'constants';
import {
  Wrap,
  InputOuterWrap,
  Subtitle,
  InputWrap,
  InputInnerWrap,
  StyledLabel,
  StyledInput,
  FormBtn,
} from './DropdownMenu.styled';

export const DropdownMenu = ({ brands, onBrandChange, onPriceChange }) => {
  return (
    <Wrap>
      <CustomSelect
        title="Car brand"
        text="Enter the text"
        items={brands}
        onValueChange={onBrandChange}
      />

      <CustomSelect
        title="Price / 1 hour"
        text="To $"
        items={prices}
        onValueChange={onPriceChange}
      />

      <InputOuterWrap>
        <Subtitle>Car mileage / km</Subtitle>

        <InputWrap>
          <InputInnerWrap>
            <StyledLabel htmlFor="from">From</StyledLabel>
            <StyledInput type="number" min={0} name="from" id="from" />
          </InputInnerWrap>

          <InputInnerWrap>
            <StyledLabel htmlFor="to">To</StyledLabel>
            <StyledInput type="number" min={0} name="to" id="to" />
          </InputInnerWrap>
        </InputWrap>
      </InputOuterWrap>

      <FormBtn type="button">Reset</FormBtn>
    </Wrap>
  );
};
