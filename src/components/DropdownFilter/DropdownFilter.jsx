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
  SearchBtn,
} from "./DropdownFilter.styled";

export const DropdownFilter = ({ onSubmit, brands, prices }) => {

  return (
    <StyledSection>
      <StyledForm name="car-search-form" onSubmit={onSubmit}>
        <Wrap>
          <Subtitle htmlFor="car-select">Car brand</Subtitle>

          <StyledSelect name="cars" id="car-select">
            <option value="">Enter the text</option>
            {brands.map(({ name }) => (
              <StyledOption key={name} value={name}>
                {name}
              </StyledOption>
            ))}
          </StyledSelect>
        </Wrap>

        <Wrap>
          <Subtitle htmlFor="price-select">Price / 1 hour</Subtitle>

          <StyledSelect name="prices" id="price-select">
            <option value="">To $</option>
            {prices.map(({ quantity }) => (
              <StyledOption key={quantity} value={quantity}>
                {quantity}
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

        <SearchBtn type="submit">Search</SearchBtn>
      </StyledForm>
    </StyledSection>
  );
};
