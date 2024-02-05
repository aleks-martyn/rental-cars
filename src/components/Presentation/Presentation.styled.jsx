import styled from '@emotion/styled';
import BgImage from '../../images/road@x1.jpg';
import BigBgImage from '../../images/road@x2.jpg';

export const Wrap = styled.div`
  max-width: 100%;
  height: 700px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-top: 80px;
  padding-left: 150px;
  padding-right: 150px;
  background-image: linear-gradient(var(--car-img-overlay-bg-grad)),
    url(${BgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--background-image-color);
  text-align: center;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(var(--car-img-overlay-bg-grad)),
      url(${BigBgImage});
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: var(--button-text-color);
`;

export const About = styled.ul`
  margin-bottom: 20px;
`;

export const Item = styled.li`
  margin-bottom: 20px;
  text-align: start;
  font-weight: 500;
  font-size: 18px;
  color: var(--button-text-color);

  :last-of-type {
    margin-bottom: 0px;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: var(--button-text-color);
`;

export const List = styled.ul`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  list-style: inside;
`;
