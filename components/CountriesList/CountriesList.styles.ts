import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.table`
  width: 100% auto;
  min-width: 81.7px;
  padding: 0 1.625em 1.625em 1.625em;
  background-color: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.gray};
  margin-bottom: 4em;

  @media screen and (max-width: 768px) {
    min-width: fit-content;
    padding: 0 0.375em;
  }
`;

export const HeadWrapper = styled.thead``;

export const HeadRow = styled.tr`
  z-index: 2;
`;

export const CountryHead = styled.th`
  width: 220px;
  height: 40px;
  position: sticky;
  top: 0;
  text-align: left;
  padding-left: 0.6em;
  border-bottom: 1px solid ${theme.colors.gray};
  color: ${(props) => props.theme.colors.ghost};
  background-color: ${(props) => props.theme.colors.light};
  font-weight: 300;
  font-size: 0.75rem;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;
export const DailyHead = styled.th`
  width: 130px;
  height: 40px;
  position: sticky;
  top: 0;
  text-align: right;
  border-bottom: 1px solid ${theme.colors.gray};
  color: ${(props) => props.theme.colors.ghost};
  background-color: ${(props) => props.theme.colors.light};
  font-weight: 300;
  font-size: 0.75rem;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;
export const TotalHead = styled.th`
  width: 180px;
  height: 40px;
  position: sticky;
  top: 0;
  text-align: right;
  border-bottom: 1px solid ${theme.colors.gray};
  color: ${(props) => props.theme.colors.ghost};
  background-color: ${(props) => props.theme.colors.light};
  font-weight: 300;
  font-size: 0.75rem;
`;
export const FullyVaccHead = styled.th`
  width: 180px;
  height: 40px;
  position: sticky;
  top: 0;
  text-align: right;
  border-bottom: 1px solid ${theme.colors.gray};
  color: ${(props) => props.theme.colors.ghost};
  background-color: ${(props) => props.theme.colors.light};
  font-weight: 300;
  font-size: 0.75rem;
`;
export const PerHundredHead = styled.th`
  width: 140px;
  height: 40px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${theme.colors.gray};
  color: ${(props) => props.theme.colors.ghost};
  background-color: ${(props) => props.theme.colors.light};
  font-weight: 300;
  font-size: 0.75rem;

  @media screen and (max-width: 480px) {
    text-align: end;
  }
`;
export const LastUpdatedHead = styled.th`
  width: 140px;
  height: 40px;
  position: sticky;
  top: 0;
  text-align: right;
  padding-right: 0.6em;
  border-bottom: 1px solid ${theme.colors.gray};
  color: ${(props) => props.theme.colors.ghost};
  background-color: ${(props) => props.theme.colors.light};
  font-weight: 300;
  font-size: 0.75rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const BodyWrapper = styled.tbody`
  z-index: 1;
`;
export const BodyRow = styled.tr`
  height: 50px;

  td {
    padding-left: 0.6em;
    font-weight: 300;
    text-align: end;
    border-bottom: 0.2px solid ${theme.colors.gray};

    &:first-child {
      font-weight: 500;
      text-align: left;
    }

    &.percent-col {
      text-align: center;

      @media screen and (max-width: 480px) {
        text-align: end;
      }
    }

    &:last-child {
      padding-right: 0.6em;
      font-size: 0.875rem;
      text-align: end;

      @media screen and (max-width: 480px) {
        display: none;
      }
    }
  }

  &:hover {
    opacity: 0.95;
    background-color: ${(props) => props.theme.colors.primary_light};
  }

  @media screen and (max-width: 768px) {
    td {
      &:last-child {
        font-size: 0.85rem;
      }
    }
  }
`;

export const MessageBox = styled.p`
  text-align: center;
  min-height: 5vh;
  margin-bottom: 2em;
`;
