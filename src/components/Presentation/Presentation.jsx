import {
  Wrap,
  Title,
  About,
  Item,
  Subtitle,
  List,
} from './Presentation.styled';

export const Presentation = () => (
  <Wrap>
    <Title>Rental Cars</Title>

    <About>
      <Item>
        We offer a wide selection of cars of different classes, including
        inexpensive economy models and prestigious premium cars.
      </Item>

      <Item>
        Our fleet consists of fully insured cars that regularly undergo
        technical inspections and maintenance.
      </Item>

      <Item>
        You can easily and conveniently rent a car at one of our branches
        located in major cities of the country. We are happy to suggest the best
        cars for your trip.
      </Item>
    </About>

    <Subtitle>Our advantages:</Subtitle>

    <List>
      <Item>24/7 support</Item>

      <Item>Quick registration</Item>

      <Item>Free cancellation</Item>

      <Item>Travel abroad</Item>

      <Item>More than 200 rental points</Item>
    </List>
  </Wrap>
);
