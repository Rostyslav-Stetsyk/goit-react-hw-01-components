import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  box-shadow: 4px 4px 8px black;
  border: 1px solid gray;
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  width: fit-content;
  padding: 20px 0;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 700;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  width: calc(100% / ${({ quantity }) => quantity});
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: #${({ backgroundColor }) => backgroundColor};
`;

export const Label = styled.span`
  padding: 4px;
  background-color: white;
  border-radius: 4px;
`;

export const Percentage = styled.span`
  padding: 4px;
  background-color: white;
  border-radius: 4px;
`;
