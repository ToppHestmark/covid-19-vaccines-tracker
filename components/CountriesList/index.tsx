import { CountriesListArrayProps } from "./countriesList.models";
import { nonCountryArray } from "../../constants/nonCountryArray";
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
} from "./CountriesList.styles";

const CountriesList = ({ countries }: CountriesListArrayProps) => {
  const countriesData = countries.filter(
    (obj) => !nonCountryArray.includes(obj.country)
  );

  return (
    <Container cellSpacing="0" cellPadding="0">
      <HeadWrapper>
        <HeadRow>
          <CountryHead>Country / Territory</CountryHead>
          <DailyHead>Daily</DailyHead>
          <TotalHead>Total</TotalHead>
          <FullyVaccHead>Fully vaccinated</FullyVaccHead>
          <PerHundredHead>Per 100 </PerHundredHead>
          <LastUpdatedHead>Last updated</LastUpdatedHead>
        </HeadRow>
      </HeadWrapper>
      <BodyWrapper>
        {countriesData.flatMap((obj) => {
          const last = obj.data[obj.data.length - 1];

          return (
            <BodyRow key={obj.iso_code}>
              <td>{obj.country} </td>
              <td>{last.daily_vaccinations}</td>
              <td> {last.total_vaccinations} </td>
              <td> {last.people_fully_vaccinated} </td>
              <td> {Math.floor(last.total_vaccinations_per_hundred)} </td>
              <td>{last.date}</td>
            </BodyRow>
          );
        })}
      </BodyWrapper>
    </Container>
  );
};

export default CountriesList;
