import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import Profile from "../components/Profile";
import { data } from "./data";
import StatCard from "../components/StatCard";
import { useState } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.background};
`;
const Center = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(4, 15vw);
  grid-template-rows: repeat(2, 30vh);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TimeTrackerPage = () => {
  const [timeFrame, settimeFrame] = useState("daily");
  const setTimeFrameState = (time) => {
    settimeFrame(time);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Center>
          <Profile setTimeFrameState={setTimeFrameState} />
          {data.map((item) => (
            <StatCard key={item.id} data={item} timeFrame={timeFrame} />
          ))}
        </Center>
      </Container>
    </ThemeProvider>
  );
};

export default TimeTrackerPage;
