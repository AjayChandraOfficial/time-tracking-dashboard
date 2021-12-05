import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.colorData.Background};
  grid-row: 1/1;
  &:nth-child(3) {
    grid-row: 2/2;
  }
  &:nth-child(4) {
    grid-row: 2/2;
  }
  &:nth-child(5) {
    grid-row: 2/2;
  }

  border-radius: 30px;
  position: relative;
  z-index: -1;
`;
const Container = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 80%;
  border-radius: 30px;

  background-color: ${(props) => props.theme.frontBackground};
  /* background-color: white; */
  z-index: 1;
`;
const Text = styled.div`
  position: absolute;
  left: 10%;
  top: 20%;
  & > *:nth-child(1) {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme.whiteText};
  }
  & > *:nth-child(2) {
    font-weight: 300;
    margin-top: 1rem;
    color: ${(props) => props.theme.whiteText};
  }
  & > *:nth-child(3) {
    font-weight: 400;
    font-size: 0.7rem;
    color: ${(props) => props.theme.lightText};
  }
`;
const StatCard = (props) => {
  const calculateHours = () => {
    const timeframe = props.timeFrame;
    if (timeframe === "daily") {
      return {
        current: props.data.timeframes.daily.current,
        previous: props.data.timeframes.daily.previous,
        last: "day",
      };
    } else if (timeframe === "weekly") {
      return {
        current: props.data.timeframes.weekly.current,
        previous: props.data.timeframes.weekly.previous,
        last: "week",
      };
    } else if (timeframe === "monthly") {
      return {
        current: props.data.timeframes.monthly.current,
        previous: props.data.timeframes.monthly.previous,
        last: "month",
      };
    }
  };

  return (
    <Card colorData={props.data}>
      <Container>
        <Text>
          <h3>{props.data.title}</h3>
          <h1>{`${calculateHours().current} ${
            calculateHours().current > 1 ? "hrs" : "hr"
          }`}</h1>
          <p>{`Last ${calculateHours().last} - ${calculateHours().previous} ${
            calculateHours().previous > 1 ? "hrs" : "hr"
          }`}</p>
        </Text>
      </Container>
    </Card>
  );
};

export default StatCard;
