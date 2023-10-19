import { useEffect, useState } from 'react';
import {
  CarItem,
  ImgWrap,
  Image,
  FavoriteBtn,
  HeartIcon,
  InfoWrap,
  InfoInnerWrap,
  InfoOtherWrap,
  OtherDataWrap,
  MainInfoText,
  ModelName,
  InfoText,
  LearnMoreBtn,
} from './CarCard.styled';

export const Car = ({
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
  rentalCompany,
  shortAddress,
  rentalConditions,
  mileage,
  openModal,
  toggleFavorite,
}) => {
  const [activeFavoriteBtn, setActiveFavoriteBtn] = useState(false);
  const LOCALSTORAGE_KEY = 'favorite-cars';

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [];
      const isFavorite = storedFavorites.find(item => item.id === id);
      if (isFavorite) setActiveFavoriteBtn(true);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  const shortFunctionalities = functionalities[0]
    .split(' ')
    .slice(0, 2)
    .join(' ');

  const handleLearnMoreBtnClick = () =>
    openModal(
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
      mileage
    );

  const toggleFavoriteBtn = carId => {
    toggleFavorite(carId);
    setActiveFavoriteBtn(prev => !prev);
  }
  
  return (
    <CarItem>
      <ImgWrap>
        <Image src={img} alt={description} loading="lazy" />
        <FavoriteBtn
          type="button"
          activefavoritebtn={activeFavoriteBtn.toString()}
          onClick={() => toggleFavoriteBtn(id)}
        >
          <HeartIcon activefavoritebtn={activeFavoriteBtn.toString()} />
        </FavoriteBtn>
      </ImgWrap>

      <InfoWrap>
        <InfoInnerWrap>
          <MainInfoText>
            {make}
            <ModelName> {model}, </ModelName>
            {year}
          </MainInfoText>

          <MainInfoText>{rentalPrice}</MainInfoText>
        </InfoInnerWrap>

        <InfoOtherWrap>
          <OtherDataWrap>
            <InfoText>{shortAddress}</InfoText>
            <InfoText>{rentalCompany}</InfoText>
          </OtherDataWrap>

          <OtherDataWrap>
            <InfoText>{type}</InfoText>
            <InfoText>{model}</InfoText>
            <InfoText>{id}</InfoText>
            <InfoText>{shortFunctionalities}</InfoText>
          </OtherDataWrap>
        </InfoOtherWrap>
      </InfoWrap>

      <LearnMoreBtn type="button" onClick={handleLearnMoreBtnClick}>
        Learn more
      </LearnMoreBtn>
    </CarItem>
  );
};
