import styled from "styled-components";

export const Container = styled.table`
  min-width: 812px;
  padding: 0 1.625em;
`;

export const HeadWrapper = styled.thead`
  height: 40px;
  background-color: ${(props) => props.theme.colors.gray};
`;
export const HeadRow = styled.tr``;
export const CountryHead = styled.th`
  width: 220px;
`;
export const DailyHead = styled.th`
  width: 100px;
`;
export const TotalHead = styled.th`
  width: 100px;
`;
export const FullyVaccHead = styled.th`
  width: 140px;
`;
export const PerHundredHead = styled.th`
  width: 80px;
`;
export const LastUpdatedHead = styled.th`
  width: 120px;
`;

export const BodyWrapper = styled.tbody``;
export const BodyRow = styled.tr``;
