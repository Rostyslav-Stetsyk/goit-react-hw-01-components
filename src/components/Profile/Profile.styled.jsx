import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  box-shadow: 4px 4px 8px black;
  border: 1px solid gray;
  border-radius: 5px;
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  padding: 32px;
  gap: 8px;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: gray;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const DescriptionText = styled.p`
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const StatsEl = styled.li`
  display: flex;
  width: calc(100% / 3);
  padding: 12px;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  background-color: gainsboro;
  border: 1px solid darkgray;
`;

export const Label = styled.span`
  font-weight: 700;
  color: darkgrey;
`;
