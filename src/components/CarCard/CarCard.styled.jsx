import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const CarItem = styled.li`
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
`;

export const ImgWrap = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

const setBtnColor = (props) =>
  props.activefavoritebtn === "true"
    ? "var(--accent-color)"
    : "var(--background-color)";
    
const setIconFill = (props) =>
  props.activefavoritebtn === "true" ? "var(--accent-color)" : "transparent";

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border: none;
  color: ${setBtnColor};
  background-color: transparent;
`;

export const HeartIcon = styled(FavoriteIcon)`
  width: 18px;
  height: 18px;
  fill: ${setIconFill};
  stroke: currentColor;
  stroke-width: 2px;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  margin-bottom: 28px;
`;

export const InfoInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoOtherWrap = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

export const OtherDataWrap = styled.div`
  display: flex;
  gap: 6px;
`;

export const MainInfoText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: var(--info-text-color);
`;

export const LearnMoreBtn = styled.button`
  display: block;
  width: 274px;
  height: 44px;
  padding: 12px 90px;
  border: none;
  border-radius: 12px;
  text-align: center;
  color: var(--button-text-color);
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  transition: background-color var(--tra);

  &:hover {
    background-color: var(--button-active-color);
  }
`;
