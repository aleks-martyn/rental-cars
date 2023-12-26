import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalInfoWrap } from './ModalInfoWrap';
import { ModalConditionsWrap } from './ModalConditionsWrap';
import {
  getUpperData,
  getBottomData,
  getUpperConditions,
  getBottomConditions,
} from 'js/getConditions';
import {
  Overlay,
  ModalWin,
  Image,
  ModalInnerWrap,
  BrandName,
  ModelName,
  Description,
  Subtitle,
  ConditionsWrap,
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
  const modifiedPrice = `${rentalPrice}$`;
  const upperData = getUpperData(shortAddress, id, year, type);
  const bottomData = getBottomData(fuelConsumption, engineSize);
  const upperConditions = getUpperConditions(
    minAge[1],
    modifiedRentalConditions[1]
  );
  const bottomConditions = getBottomConditions(
    modifiedRentalConditions[2],
    modifiedMileage,
    modifiedPrice
  );

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

          <ModalInfoWrap upperData={upperData} bottomData={bottomData} />

          <Description>{description}</Description>
        </ModalInnerWrap>

        <ModalInnerWrap>
          <Subtitle>Accessories and functionalities:</Subtitle>

          <ModalInfoWrap upperData={accessories} bottomData={functionalities} />
        </ModalInnerWrap>

        <ModalInnerWrap>
          <Subtitle>Rental Conditions:</Subtitle>

          <ConditionsWrap>
            <ModalConditionsWrap items={upperConditions} />

            <ModalConditionsWrap items={bottomConditions} />
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
