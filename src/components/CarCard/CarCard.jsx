import { useEffect, useState } from "react";
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
  InfoText,
  LearnMoreBtn,
} from "./CarCard.styled";
import { addCarToList, deleteCarFromList } from "./localStorageFunctions";

export const Car = (car) => {
  const {
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
  } = car;

  const [activeFavoriteBtn, setActiveFavoriteBtn] = useState(false);
  const [favoriteCarId, setFavoriteCarId] = useState(null);
  const LOCALSTORAGE_KEY = "favorite-cars";

  useEffect(() => {
    try {
      const items = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      const el = items.find(item => item.id === id.toString())
      if(el) setActiveFavoriteBtn(true)
    } catch (error) {
      console.log(error.message);
    }
  }, [id])

  if (activeFavoriteBtn) {
    addCarToList(LOCALSTORAGE_KEY, favoriteCarId);
  } else {
    deleteCarFromList(LOCALSTORAGE_KEY, favoriteCarId);
  }

  const toggleFavoriteBtn = (event) => {
    setActiveFavoriteBtn((prev) => !prev);
    setFavoriteCarId(event.currentTarget.dataset.carid);
  };

  const shortFunctionalities = functionalities[0]
    .split(" ")
    .slice(0, 2)
    .join(" ");

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

  return (
    <CarItem>
      <ImgWrap>
        <Image src={img} alt={description} loading="lazy" />
        <FavoriteBtn
          type="button"
          activefavoritebtn={activeFavoriteBtn.toString()}
          onClick={toggleFavoriteBtn}
          data-carid={id}
        >
          <HeartIcon activefavoritebtn={activeFavoriteBtn.toString()} />
        </FavoriteBtn>
      </ImgWrap>

      <InfoWrap>
        <InfoInnerWrap>
          <MainInfoText>
            {make}, {year}
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
