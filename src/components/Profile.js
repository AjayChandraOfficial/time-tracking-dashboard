import React from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  grid-column: 0/1;
  grid-row: 1/-1;
`;
const ProfileContainer = styled.div`
  border-radius: 30px;
  background-color: ${(props) => props.theme.frontBackground};
  width: 100%;
  height: 100%;
  position: relative;
  /* top: 20%;
  left: 22%; */
  /* transform: translate(-50%, -50%); */
`;
const ProfileFrontContainer = styled.div`
  border-radius: 30px;
  background-color: ${(props) => props.theme.profileBackground};
  /* top: 20%;
  left: 22%; */
  width: 100%;
  height: 65%;

  position: relative;
`;
const TextContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.lightText};
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 400;
  position: absolute;
  bottom: 10%;
  left: 15%;
`;
const TimeNavLink = styled.p`
  cursor: pointer;
  text-decoration: none;
`;
const UserDetailsContainer = styled.div`
  position: absolute;
  left: 15%;
  top: 50%;
  p {
    color: ${(props) => props.theme.lightTextProfile};
    font-size: calc(0.4rem + 0.4vw);
  }
  h2 {
    font-weight: 400;
    color: ${(props) => props.theme.whiteTextProfile};
    font-size: calc(1rem + 1vw);
  }
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ProfileImageContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 15%;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 1px solid white;
  background-color: white;
`;
const Profile = (props) => {
  const daily = useRef();
  const weekly = useRef();
  const monthly = useRef();
  const activeColor = "#C8CCDA";
  const inactiveColor = "#6D71A2";
  useEffect(() => {
    daily.current.style.color = activeColor;
  }, []);

  const setDaily = () => {
    daily.current.style.color = activeColor;
    weekly.current.style.color = inactiveColor;
    monthly.current.style.color = inactiveColor;
    props.setTimeFrameState("daily");
  };
  const setWeekly = () => {
    daily.current.style.color = inactiveColor;
    weekly.current.style.color = activeColor;
    monthly.current.style.color = inactiveColor;
    props.setTimeFrameState("weekly");
  };
  const setMonthly = () => {
    daily.current.style.color = inactiveColor;
    weekly.current.style.color = inactiveColor;
    monthly.current.style.color = activeColor;
    props.setTimeFrameState("monthly");
  };
  return (
    <Container>
      <ProfileContainer>
        <ProfileFrontContainer>
          <ProfileImageContainer>
            {/* Add dynamic picture here */}
          </ProfileImageContainer>
          <UserDetailsContainer>
            <p>Report for</p>
            {/* Add Dynamic name here */}
            <h2>Ajay Chandra</h2>
          </UserDetailsContainer>
        </ProfileFrontContainer>
        <TextContainer>
          <TimeNavLink onClick={setDaily} ref={daily}>
            Daily
          </TimeNavLink>
          <TimeNavLink onClick={setWeekly} ref={weekly}>
            Weekly
          </TimeNavLink>
          <TimeNavLink onClick={setMonthly} ref={monthly}>
            Monthly
          </TimeNavLink>
        </TextContainer>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
