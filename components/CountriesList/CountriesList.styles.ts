import styled from "styled-components";

export const Container = styled.table`
  min-width: 812px;
  padding: 0 1.625em;
  background-color: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: 4em;

  @media screen and (max-width: 768px) {
    min-width: fit-content;
    padding: 0 0.375em;
  }

  ${(props) => props.theme.boxShadow};
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
  text-align: left;
  padding-left: 0.6em;
  border-bottom: 0.2px solid lightsteelblue;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;
export const DailyHead = styled.th`
  width: 130px;
  text-align: right;
  border-bottom: 0.2px solid lightsteelblue;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;
export const TotalHead = styled.th`
  width: 180px;
  text-align: right;
  border-bottom: 0.2px solid lightsteelblue;
`;
export const FullyVaccHead = styled.th`
  width: 180px;
  text-align: right;
  border-bottom: 0.2px solid lightsteelblue;
`;
export const PerHundredHead = styled.th`
  width: 140px;
  border-bottom: 0.2px solid lightsteelblue;
`;
export const LastUpdatedHead = styled.th`
  width: 140px;
  text-align: right;
  padding-right: 0.6em;
  border-bottom: 0.2px solid lightsteelblue;
`;

export const BodyWrapper = styled.tbody``;
export const BodyRow = styled.tr`
  height: 50px;

  td {
    border-bottom: 0.2px solid lightsteelblue;
    padding-left: 0.6em;
    font-weight: 300;
    text-align: end;

    &:first-child {
      font-weight: 400;
      text-align: left;
    }

    &.percent-col {
      text-align: center;
    }

    &:last-child {
      padding-right: 0.6em;
      font-size: 0.875rem;
      text-align: end;
    }
  }

  &:last-child td {
    border: 0;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (max-width: 768px) {
    td {
      &:last-child {
        font-size: 0.785rem;
      }
    }
  }
`;
