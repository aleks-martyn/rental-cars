import { prices } from 'constants';
import {
  StyledSection,
  StyledForm,
  Wrap,
  InputWrap,
  InputInnerWrap,
  Subtitle,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledInput,
  FormBtn,
} from './DropdownFilter.styled';

export const DropdownFilter = ({ onSubmit, brands }) => {
  return (
    <StyledSection>
      <StyledForm name="car-search-form" onSubmit={onSubmit}>
        <Wrap>
          <Subtitle htmlFor="car-select">Car brand</Subtitle>

          <StyledSelect name="cars" id="car-select">
            <option value="">Enter the text</option>
            {brands.map(brand => (
              <StyledOption key={brand} value={brand}>
                {brand}
              </StyledOption>
            ))}
          </StyledSelect>
        </Wrap>

        <Wrap>
          <Subtitle htmlFor="price-select">Price / 1 hour</Subtitle>

          <StyledSelect name="prices" id="price-select">
            <option value="">To $</option>
            {prices.map(price => (
              <StyledOption key={price} value={price}>
                {price}
              </StyledOption>
            ))}
          </StyledSelect>
        </Wrap>

        <Wrap>
          <Subtitle>Car mileage / km</Subtitle>

          <InputWrap>
            <InputInnerWrap>
              <StyledLabel htmlFor="from">From</StyledLabel>
              <StyledInput type="number" name="from" id="from" />
            </InputInnerWrap>

            <InputInnerWrap>
              <StyledLabel htmlFor="to">To</StyledLabel>
              <StyledInput type="number" name="to" id="to" />
            </InputInnerWrap>
          </InputWrap>
        </Wrap>

        <FormBtn type="submit">Search</FormBtn>

        <FormBtn type="reset">Reset</FormBtn>
      </StyledForm>
    </StyledSection>
  );
};
