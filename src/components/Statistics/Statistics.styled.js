import styled from '@emotion/styled';

export const Card = styled.section`
  width: 550px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.59);
  margin-top: 50px;
  border-radius: 7px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

export const Label = styled.span`
  font-size: 20px;
`;

export const Percentage = styled.span`
  font-size: 28px;
  font-weight: 500;
`;
