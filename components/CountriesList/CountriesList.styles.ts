import styled from "styled-components";

export const Container = styled.table`
  min-width: 812px;
  padding: 0 1.625em;
  background-color: ${(props) => props.theme.colors.light};

  box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
  -webkit-box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
  -moz-box-shadow: 0px 2px 17px 0px rgba(185, 177, 177, 0.57);
`;

export const HeadWrapper = styled.thead`
  height: 40px;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.light};
`;
export const HeadRow = styled.tr``;
export const CountryHead = styled.th`
  width: 220px;
  border-bottom: 0.2px solid lightsteelblue;
`;
export const DailyHead = styled.th`
  width: 130px;
  border-bottom: 0.2px solid lightsteelblue;
`;
export const TotalHead = styled.th`
  width: 150px;
  border-bottom: 0.2px solid lightsteelblue;
`;
export const FullyVaccHead = styled.th`
  width: 150px;
  border-bottom: 0.2px solid lightsteelblue;
`;
export const PerHundredHead = styled.th`
  width: 80px;
  border-bottom: 0.2px solid lightsteelblue;
`;
export const LastUpdatedHead = styled.th`
  width: 140px;
  border-bottom: 0.2px solid lightsteelblue;
`;

export const BodyWrapper = styled.tbody``;
export const BodyRow = styled.tr`
  height: 50px;

  td {
    border-bottom: 0.2px solid lightsteelblue;
    padding-left: 0.6em;
    font-weight: 300;

    &:first-child {
      font-weight: 400;
    }

    &:last-child {
      font-weight: 200;
      font-size: 0.875rem;
      text-align: center;
    }
  }

  &:last-child td {
    border: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
