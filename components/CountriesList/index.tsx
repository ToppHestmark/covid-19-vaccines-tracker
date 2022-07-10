import Link from "next/link";
import { nonCountryArray } from "../../variables/nonCountryArray";
import { formatDate, formatLargeNum } from "../../utils/formatting";
import { Countries } from "../../globaltypes";
import {
  Container,
  HeadWrapper,
  HeadRow,
  CountryHead,
  DailyHead,
  TotalHead,
  FullyVaccHead,
  PerHundredHead,
  LastUpdatedHead,
  BodyWrapper,
  BodyRow,
  MessageBox,
} from "./CountriesList.styles";

interface ICountriesList {
  countries: Countries[];
}

const CountriesList = ({ countries }: ICountriesList) => {
  const countriesData = countries.filter(
    (obj) => !nonCountryArray.includes(obj.country)
  );

  return (
    <>
      <Container cellSpacing="0" cellPadding="0">
        <HeadWrapper>
          <HeadRow>
            <CountryHead>Country / Territory</CountryHead>
            <DailyHead>Daily</DailyHead>
            <TotalHead>1. Dose</TotalHead>
            <FullyVaccHead>Fully vaccinated</FullyVaccHead>
            <PerHundredHead>%</PerHundredHead>
            <LastUpdatedHead>Last update</LastUpdatedHead>
          </HeadRow>
        </HeadWrapper>
        <BodyWrapper>
          {countriesData.map((obj) => {
            const last = obj.data[obj.data.length - 1];

            return (
              <BodyRow key={obj.iso_code}>
                <Link href="/chart/[iso]" as={`/chart/${obj.iso_code}`}>
                  <td>
                    <a>{obj.country}</a>
                  </td>
                </Link>

                <td>{formatLargeNum(last?.daily_vaccinations)}</td>
                <td> {formatLargeNum(last.people_vaccinated)} </td>
                <td> {formatLargeNum(last?.people_fully_vaccinated)} </td>
                <td className="percent-col">
                  {" "}
                  {last.people_vaccinated_per_hundred === undefined
                    ? "-"
                    : last.people_vaccinated_per_hundred}{" "}
                </td>
                <td>{formatDate(last.date)}</td>
              </BodyRow>
            );
          })}
        </BodyWrapper>
      </Container>
      {countriesData.length === 0 && (
        <MessageBox>Sorry, no matching search result.</MessageBox>
      )}
    </>
  );
};

export default CountriesList;
