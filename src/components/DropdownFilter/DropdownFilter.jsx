import {
  StyledSection,
  StyledForm,
  Wrap,
  InputWrap,
  InputInnerWrap,
  Subtitle,
  StyledSelect,
  StyledLabel,
  StyledInput,
  SearchBtn,
} from "./DropdownFilter.styled";

export const DropdownFilter = ({ onSubmit }) => {
  const brands = [
    { name: "Buick" },
    { name: "Volvo" },
    { name: "HUMMER" },
    { name: "Subaru" },
    { name: "Mitsubishi" },
    { name: "Nissan" },
    { name: "Lincoln" },
    { name: "GMC" },
    { name: "Hyundai" },
    { name: "MINI" },
    { name: "Bentley" },
    { name: "Mercedes-Benz" },
    { name: "Aston Martin" },
    { name: "Pontiac" },
    { name: "Lamborghini" },
    { name: "Audi" },
    { name: "BMW" },
    { name: "Chevrolet" },
    { name: "Chrysler" },
    { name: "Kia" },
    { name: "Land" },
  ];

  const prices = [
    { quantity: "30" },
    { quantity: "40" },
    { quantity: "50" },
    { quantity: "60" },
    { quantity: "70" },
    { quantity: "80" },
  ];

  return (
    <StyledSection>
      <StyledForm name="car-search-form" onSubmit={onSubmit}>
        <Wrap>
          <Subtitle htmlFor="car-select">Car brand</Subtitle>

          <StyledSelect name="cars" id="car-select">
            <option value="">Enter the text</option>
            {brands.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </StyledSelect>
        </Wrap>

        <Wrap>
          <Subtitle htmlFor="price-select">Price / 1 hour</Subtitle>

          <StyledSelect name="prices" id="price-select">
            <option value="">To $</option>
            {prices.map(({ quantity }) => (
              <option key={quantity} value={quantity}>
                {quantity}
              </option>
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
