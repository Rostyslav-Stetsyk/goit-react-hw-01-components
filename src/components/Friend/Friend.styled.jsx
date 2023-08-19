import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
  box-shadow: 4px 4px 8px black;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const FriendStatus = styled.span`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
