import React from "react";
import { render, fireEvent} from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);
    // move forward in the carousel before testing
    const rightArrow = queryByTestId("right-arrow");
    fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

    // move back in the carousel
    const leftArrow = queryByTestId("left-arrow");
    fireEvent.click(leftArrow);


  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

test('arrows are hidden appropriately', () =>{
  const {getByTestId} = render(<Carousel/>);
  const leftArrow = getByTestId("left-arrow");
  const rightArrow = getByTestId("right-arrow");

  // On load/first picture left arrow hidden, right arrow visible
  expect(leftArrow).toHaveClass('hide');
  expect(rightArrow).not.toHaveClass('hide');

  fireEvent.click(rightArrow);

  // Both arrows visible
  expect(leftArrow).not.toHaveClass('hide');
  expect(rightArrow).not.toHaveClass('hide');

  fireEvent.click(rightArrow)
  // expect left arrow visible and right arrow hidden

  expect(rightArrow).toHaveClass('hide');
  expect(leftArrow).not.toHaveClass('hide');


})




it('renders correctly', ()=>{
  render(<Carousel />);
});

it('matches snapshot', ()=>{
  const {asFragment} = render(<Carousel/>);
  expect(asFragment()).toMatchSnapshot();
})