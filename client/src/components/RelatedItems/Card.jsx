import React from 'react';
import styled from 'styled-components';
import Stars from '../SharedComponents/Stars';
import Heart from './IconHeart';
import OutfitList from './OutfitList';

const H = {};

H.Wrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  position: absolute;
  margin-left: 205px;
  margin-top: 25px;
`;

H.BackHeartDiv = styled.button`
  display: flex;
  position: absolute;
  color: ${(props) => (props.selected ? 'coral' : 'gray')};
  border: none;
  background: none;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  max-width: 250px;
  min-height: 500px;
  border-radius: 4px;
  border: solid 2px #767676;
  padding: 5px;
  margin: 1rem;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const Name = styled.p`
  font-family: 'Montserrat'
  color: gray;
  font-size: 20px;
  font-weight: 200;
  text-align: left;
  flex-basis:0.1rem;
  margin-top: -35px;
`;

const Description = styled.p`
  color: gray;
  text-align:left;
  margin-top: -35px;
`;

const Category = styled.p`
  color: gray;
  text-align: left;
  margin-top:-20px;
`;

const Image = styled.img`
  border-radius: 5px;
  min-width: 230px;
  max-width: 250px;
  height: 350px;
  object-fit: cover;
`;

const Line = styled.hr`
  color: black;
  width: 100%;
  margin-top: -10px;
`;

const ComparisonModal = styled.table`
display: flex;
position: fixed;
z-index: 1;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.4);

.modal-content {
  position: relative;
  border-radius: 10%;
  background-color: white;
  margin: auto;
  width: 80%;
}
`;

// The related product id is passed down from cardList
// Perform a get request in the child function to display the
// Correct photo that corresponds with the data
const Card = ({
  // eslint-disable-next-line react/prop-types
  itemName, price, image, ratings, category, product,
}) => {
  const addOutfit = () => {
    console.log('this clicked');
    <H.BackHeartDiv selected>
      <Heart />
    </H.BackHeartDiv>;
    console.log(itemName);
    console.log(price);
  };

  const compare = () => {
    console.log('Compare this');
  }

  // pass data that was selected to outfitList
  return (
    <Wrapper data-testid="card" onClick={compare}>
      <H.Wrapper>
        <H.BackHeartDiv className="outfit" onClick={addOutfit}>
          <Heart />
        </H.BackHeartDiv>
      </H.Wrapper>
      <Image src={image} alt="empty" />
      <div><Line /></div>
      <Category>{category}</Category>
      <Name>{itemName}</Name>
      <Description>
        $
        {price}
      </Description>
      <Stars stars={ratings} />
    </Wrapper>
  );
};

export default Card;
