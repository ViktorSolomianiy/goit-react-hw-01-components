import styled from '@emotion/styled';

export const Card = styled.div`
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.59);
  width: 420px;
  border-radius: 7px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 50px;
  background-color: #c7c7c7;
`;

export const Name = styled.p`
  font-size: 35px;
  font-weight: 500;
  margin-top: 40px;
`;

export const Tag = styled.p`
  font-weight: 200;
  font-size: 25px;
  margin-top: 15px;
`;

export const Location = styled.p`
  font-weight: 200;
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const Stats = styled.ul`
  display: flex;
  border: 1px solid #d4d4d4;
  border-radius: 0 0 7px 7px;
  background-color: #f0f0f0;
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-right: 1px solid #d4d4d4;
  &:last-child {
    border: 0;
  }
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

export const Quantity = styled.span`
  font-size: 25px;
  font-weight: 500;
  margin-top: 5px;
`;
