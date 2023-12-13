import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalWin,
  Image,
  ModalInnerWrap,
  BrandName,
  ModelName,
  AddDataWrap,
  OtherDataWrap,
  Description,
  Subtitle,
  InfoText,
  ConditionsWrap,
  ConditionsTextWrap,
  ConditionsInnerWrap,
  ConditionsText,
  ConditionsAccent,
  RentalCarLink,
  CloseBtn,
  CloseIcon,
} from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  shortAddress,
  rentalConditions,
  mileage,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') onClose();
    };

    document.body.classList.add('no-scroll');

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);

      document.body.classList.remove('no-scroll');
    };
  }, [onClose]);

  const modifiedRentalConditions = rentalConditions.split('\n');
  const minAge = modifiedRentalConditions[0].split(': ');
  const modifiedMileage = Intl.NumberFormat('en-US').format(mileage);

  return createPortal(
    <Overlay
      onClick={event => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <ModalWin>
        <Image src={img} alt={description} loading="lazy" />

        <ModalInnerWrap>
          <BrandName>
            {make}
            <ModelName> {model}, </ModelName>
            {year}
          </BrandName>

          <AddDataWrap>
            <OtherDataWrap>
              <InfoText>{shortAddress[0]}</InfoText>
              <InfoText>{shortAddress[1]}</InfoText>
              <InfoText>Id: {id}</InfoText>
              <InfoText>Year: {year}</InfoText>
              <InfoText>Type: {type}</InfoText>
            </OtherDataWrap>

            <OtherDataWrap>
              <InfoText>Fuel Consumption: {fuelConsumption}</InfoText>
              <InfoText>Engine Size: {engineSize}</InfoText>
            </OtherDataWrap>
          </AddDataWrap>

          <Description>{description}</Description>
        </ModalInnerWrap>

        <ModalInnerWrap>
          <Subtitle>Accessories and functionalities:</Subtitle>

          <AddDataWrap>
            <OtherDataWrap>
              {accessories.map((item, index) => (
                <InfoText key={index}>{item}</InfoText>
              ))}
            </OtherDataWrap>

            <OtherDataWrap>
              {functionalities.map((item, index) => (
                <InfoText key={index}>{item}</InfoText>
              ))}
            </OtherDataWrap>
          </AddDataWrap>
        </ModalInnerWrap>

        <ModalInnerWrap>
          <Subtitle>Rental Conditions:</Subtitle>

          <ConditionsWrap>
            <ConditionsInnerWrap>
              <ConditionsTextWrap>
                <ConditionsText>
                  Minimum age: <ConditionsAccent>{minAge[1]}</ConditionsAccent>
                </ConditionsText>
              </ConditionsTextWrap>

              <ConditionsTextWrap>
                <ConditionsText>{modifiedRentalConditions[1]}</ConditionsText>
              </ConditionsTextWrap>
            </ConditionsInnerWrap>

            <ConditionsInnerWrap>
              <ConditionsTextWrap>
                <ConditionsText>{modifiedRentalConditions[2]}</ConditionsText>
              </ConditionsTextWrap>

              <ConditionsTextWrap>
                <ConditionsText>
                  Mileage:{' '}
                  <ConditionsAccent>{modifiedMileage}</ConditionsAccent>
                </ConditionsText>
              </ConditionsTextWrap>

              <ConditionsTextWrap>
                <ConditionsText>
                  Price: <ConditionsAccent>{rentalPrice}$</ConditionsAccent>
                </ConditionsText>
              </ConditionsTextWrap>
            </ConditionsInnerWrap>
          </ConditionsWrap>
        </ModalInnerWrap>

        <RentalCarLink href="tel:+380730000000">Rental car</RentalCarLink>

        <CloseBtn type="button" onClick={() => onClose()}>
          <CloseIcon />
        </CloseBtn>
      </ModalWin>
    </Overlay>,
    modalRoot
  );
};
